/*
  Warnings:

  - You are about to drop the column `MenuCategoryId` on the `MenuCategoriesMenus` table. All the data in the column will be lost.
  - Added the required column `menuCategoryId` to the `MenuCategoriesMenus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MenuCategoriesMenus" DROP CONSTRAINT "MenuCategoriesMenus_MenuCategoryId_fkey";

-- AlterTable
ALTER TABLE "MenuCategoriesMenus" DROP COLUMN "MenuCategoryId",
ADD COLUMN     "menuCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MenuCategoriesMenus" ADD CONSTRAINT "MenuCategoriesMenus_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "MenuCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
