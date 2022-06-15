-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema kea
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `kea` ;

-- -----------------------------------------------------
-- Schema kea
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `kea` ;

-- -----------------------------------------------------
-- Table `kea`.`classes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kea`.`classes` ;

CREATE TABLE IF NOT EXISTS `kea`.`classes` (
  `class_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`class_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `kea`.`subjects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kea`.`subjects` ;

CREATE TABLE IF NOT EXISTS `kea`.`subjects` (
  `subject_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `teacher_user_id` INT NOT NULL,
  `class_id` INT NOT NULL,
  PRIMARY KEY (`subject_id`),
  INDEX `class_id` (`class_id` ASC) VISIBLE,
  CONSTRAINT `subjects_ibfk_1`
    FOREIGN KEY (`class_id`)
    REFERENCES `kea`.`classes` (`class_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `kea`.`lectures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kea`.`lectures` ;

CREATE TABLE IF NOT EXISTS `kea`.`lectures` (
  `lecture_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `started_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ended_at` DATETIME NULL DEFAULT (now() + interval 90 minute),
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`lecture_id`),
  INDEX `subject_id` (`subject_id` ASC) VISIBLE,
  CONSTRAINT `lectures_ibfk_1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `kea`.`subjects` (`subject_id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `kea`.`attendances`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kea`.`attendances` ;

CREATE TABLE IF NOT EXISTS `kea`.`attendances` (
  `attendance_id` INT NOT NULL AUTO_INCREMENT,
  `attended_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `lecture_id` INT NOT NULL,
  PRIMARY KEY (`attendance_id`),
  INDEX `lecture_id` (`lecture_id` ASC) VISIBLE,
  CONSTRAINT `attendances_ibfk_1`
    FOREIGN KEY (`lecture_id`)
    REFERENCES `kea`.`lectures` (`lecture_id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
