  import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPosts1597424501158 implements MigrationInterface {


  // public async up(queryRunner: QueryRunner): Promise<void> {
  public async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.query(`

      insert into "user" (id, username, email, password)
                  values (1, 'u', 'u@gmail.com', 'u'); 

      insert into post (id, title, "imgUrl", text, "creatorId") values 
      (1, 'Briant', 'http://dummyimage.com/125x100.png/dddddd/000000', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1);

      insert into post (id, title, "imgUrl", text, "creatorId") values (2, 'Mollee', 'http://dummyimage.com/128x100.png/cc0000/ffffff', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
      Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
      
      insert into post (id, title, "imgUrl", text, "creatorId") values (3, 'Tim', 'http://dummyimage.com/152x100.png/cc0000/ffffff', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
      
      insert into post (id, title, "imgUrl", text, "creatorId") values (4, 'Annaliese', 'http://dummyimage.com/247x100.png/dddddd/000000', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
      
      insert into post (id, title, "imgUrl", text, "creatorId") values (5, 'Tandi', 'http://dummyimage.com/248x100.png/5fa2dd/ffffff', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
      Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1);
      
      insert into post (id, title, "imgUrl", text, "creatorId") values (6, 'Sandye', 'http://dummyimage.com/201x100.png/5fa2dd/ffffff', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
  
      insert into post (id, title, "imgUrl", text, "creatorId") values (7, 'Mordy', 'http://dummyimage.com/248x100.png/cc0000/ffffff', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
      Phasellus in felis. Donec semper sapien a libero. Nam dui.
      Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
      
      insert into post (id, title, "imgUrl", text, "creatorId") values (8, 'Dona', 'http://dummyimage.com/163x100.png/dddddd/000000', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
      Fusce consequat. Nulla nisl. Nunc nisl.', 1);

      insert into post (id, title, "imgUrl", text, "creatorId") values (9, 'Sashenka', 'http://dummyimage.com/125x100.png/dddddd/000000', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
      Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
      In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);

      insert into post (id, title, "imgUrl", text, "creatorId") values 
      (10, 'Urbano', 'http://dummyimage.com/201x100.png/5fa2dd/ffffff', 'Sed ante. 
      Vivamus tortor. Duis mattis egestas metus.', 1);     
      `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
