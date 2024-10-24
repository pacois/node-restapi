CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE empleados(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1, 'Joe', 1000),
    (2, 'Paco', 2000),
    (3, 'Hugo', 2400),
    (4, 'Max', 1500);
