-- CreateTable
CREATE TABLE `blog_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bgImg` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `subDescripation` TEXT NOT NULL,
    `content` TEXT NOT NULL,
    `optionalImage` VARCHAR(255) NULL,
    `date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
