-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema base
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema base
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `base` DEFAULT CHARACTER SET utf8 ;
USE `base` ;

-- -----------------------------------------------------
-- Table `base`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `base`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `base`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `position` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin_idadmin` INT NOT NULL,
  PRIMARY KEY (`iduser`),
  INDEX `fk_user_admin_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_user_admin`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `base`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `base`.`courses` (
  `idcourses` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `hour` INT NOT NULL,
  `subjct` VARCHAR(255) NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idcourses`, `user_iduser`),
  INDEX `fk_courses_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_courses_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `base`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
