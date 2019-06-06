DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT (50) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    burger_name VARCHAR (300),
    devoured boolean DEFAULT FALSE,
      createdAt TIMESTAMP NOT NULL Default CURRENT_TIMESTAMP, 	
);