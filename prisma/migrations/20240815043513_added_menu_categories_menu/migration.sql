-- CreateTable
CREATE TABLE "MenuCategoriesMenus" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "MenuCategoryId" INTEGER NOT NULL,

    CONSTRAINT "MenuCategoriesMenus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenuCategoriesMenus" ADD CONSTRAINT "MenuCategoriesMenus_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCategoriesMenus" ADD CONSTRAINT "MenuCategoriesMenus_MenuCategoryId_fkey" FOREIGN KEY ("MenuCategoryId") REFERENCES "MenuCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
