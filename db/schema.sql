drop database if EXISTS `burgers_db`;
create database `burgers_db`;
use `burgers_db`;

create table `burgers`(
    id INT auto_increment,
    burger_name VARCHAR(20),
    devoured boolean DEFAULT TRUE,
    primary key (id)
);

SELECT * FROM `burgers`;