/*
  Warnings:

  - You are about to drop the `blog_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `blog_data`;

-- CreateTable
CREATE TABLE `blogPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bgImg` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `subDescripation` TEXT NOT NULL,
    `content` TEXT NOT NULL,
    `optionalImage` VARCHAR(255) NULL,
    `date` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
