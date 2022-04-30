import { Box, Button, Flex, Image } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useRef,useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { useCreatePostMutation } from "../generated/graphql";
import { cloudinarySignature } from "../utils/cloudinary";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";

const CreatePost: React.FC<{}> = ({}) => {
  useIsAuth();

  const [createPost] = useCreatePostMutation();

  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadImage = async () => {
    if (!file) return { success: false, url: "" };

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const publicId = "test";
    const secret = process.env.NEXT_PUBLIC_CLOUDINARY_SECRET ?? "";

    const signature = await cloudinarySignature({
      publicId,
      timestamp,
      secret,
    });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_KEY ?? "");
    formData.append("public_id", publicId);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/tusharsadhwani/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) return { success: false, url: "" };

    const data = await response.json();
    const url = data.secure_url as string;
    return { success: true, url };
  };

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.currentTarget.files?.[0];
    if (!newFile) return;

    setFile(newFile);
    setFileUrl(URL.createObjectURL(newFile));
  };

  const router = useRouter();

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", text: "", imgUrl: "" }}
        // onSubmit={async (values, { setErrors, resetForm }) => {
          onSubmit={async (values) => {


          if (file) {
            const upload = await uploadImage();
            if (!upload.success) return;
  
            values.imgUrl = upload.url;
          }
  
          // const response = await createPost({ ...values });

          const { errors } = await createPost({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: "posts:{}" });
            },
          });
          if (!errors) {
            router.push("/");
          }
        }}
      >
        {({values, isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4} >
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              />
            </Box>

     
                <Flex justify="space-between" align="center">
                  <label htmlFor="postImage">
                    <Button onClick={() => fileInputRef.current?.click()}>
                      Select Image
                    </Button>
                  </label>
                  <input
                    ref={fileInputRef}
                    name="postImage"
                    type="file"
                    accept="image/*"
                    onChange={handleSetImage}
                    style={{ display: "none" }}
                  />
                  <Image src={fileUrl} maxH={200} maxW={400} />
                </Flex>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreatePost);
