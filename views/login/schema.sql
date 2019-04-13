CREATE DATABASE formDB;
USE formDB;

CREATE TABLE `formInfo` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255 ) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  PRIMARY KEY ( `id` ) 
);