CREATE DATABASE movies

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(40),
  image_url VARCHAR(400)
);

INSERT INTO movies (name, image_url) VALUES ('Jaws', 'https://images-na.ssl-images-amazon.com/images/I/41H5ZQQN4RL._SY445_.jpg');

ALTER TABLE movies
ADD search_count int(4);

UPDATE movies
SET search_count = 0
WHERE id = *;
