CREATE DATABASE guess_who;

CREATE TABLE characters (
    id SERIAL,
   name VARCHAR(255),
    gender VARCHAR(255),
    hair_colour VARCHAR(255),
    eye_colour VARCHAR(255),
    glasses BOOLEAN,
    piercings BOOLEAN,
    beard BOOLEAN,
    london BOOLEAN,
    pets BOOLEAN,
    hair_accessory BOOLEAN,
    top_colour VARCHAR(225));

    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Aaron', 'male', 'black', 'brown', FALSE, FALSE, TRUE, TRUE, FALSE, TRUE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Abdi', 'male', 'black', 'brown', FALSE, FALSE, TRUE, TRUE, FALSE, FALSE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Adib', 'male', 'blonde', 'brown', TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Alex', 'male', 'black', 'brown', FALSE, FALSE, TRUE, TRUE, TRUE, TRUE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Alimaa', 'female', 'hijab', 'brown', FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Andrew', 'male', 'brown', 'blue', TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Aoife', 'female', 'brown', 'brown', TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Connie', 'female', 'blonde', 'blue', FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Cristian', 'male', 'brown', 'brown', FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Darshil', 'male', 'black', 'brown', FALSE, FALSE, TRUE, FALSE, FALSE, TRUE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Hajr', 'female', 'hijab', 'brown', FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Jake', 'male', 'brown', 'brown', FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Marcy', 'female', 'black', 'brown', FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Michael', 'male', 'black', 'brown', FALSE, FALSE, TRUE, TRUE, FALSE, FALSE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Michelle', 'female', 'brown', 'brown', FALSE, TRUE, FALSE, FALSE, TRUE, TRUE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Nasir', 'male', 'black', 'brown', TRUE, FALSE, TRUE, TRUE, FALSE, FALSE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Nayan', 'female', 'black', 'brown', FALSE, FALSE, FALSE, TRUE, TRUE, FALSE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Rachel', 'female', 'brown', 'brown', TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Robyn', 'female', 'brown', 'green', TRUE, TRUE, FALSE, FALSE, TRUE, TRUE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Rosalinda', 'female', 'black', 'brown', FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Sarina', 'female', 'black', 'brown', FALSE, FALSE, FALSE, TRUE, FALSE, TRUE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Shirhan', 'female', 'hijab', 'brown', TRUE, TRUE, FALSE, TRUE, FALSE, FALSE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Suad', 'female', 'hijab', 'brown', FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Suj', 'male', 'black', 'brown', TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Suraya', 'female', 'hijab', 'brown', FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'white');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Wendy', 'female', 'brown', 'brown', TRUE, TRUE, FALSE, TRUE, FALSE, FALSE, 'red');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Will', 'male', 'brown', 'brown', TRUE, TRUE, TRUE, TRUE, FALSE, FALSE, 'black');
    INSERT INTO characters (name, gender, hair_colour, eye_colour, glasses, piercings, beard, london, pets, hair_accessory, top_colour) VALUES ('Yang', 'male', 'black', 'brown', FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, 'black');

