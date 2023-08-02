/*
  Warnings:

  - Added the required column `author` to the `post` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `author` VARCHAR(255) NOT NULL,
    MODIFY `content` VARCHAR(191) NOT NULL;
