DROP TABLE teams;

CREATE TABLE teams (
  id SERIAL4 PRIMARY KEY,
  image_url VARCHAR(400),
  name VARCHAR(200)
);

INSERT INTO teams (name, image_url) VALUES ('Saints', 'http://www.classicbargainz.com/Images/4028.jpg');

INSERT INTO teams (name, image_url) VALUES ('Tigers', 'http://www.aflfootyshop.com.au/sites/default/files/imagecache/product_full/richmond-tigers-polar-fleece-rug.jpg');
