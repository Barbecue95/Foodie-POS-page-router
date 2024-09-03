import { BackOfficeLayout } from "@/components/BackOfficeLayout";
import { config } from "@/config";
import { Box, Button, Card } from "@mui/material";
import { MenuCategories } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MenuCategoriesPage() {
  const [MenuCategories, setMenuCategories] = useState<MenuCategories[]>([]);

  useEffect(() => {
    getMenuCategories();
  }, []);

  const getMenuCategories = async () => {
    const response = await fetch(`${config.backOfficeUrl}/menu-categories`);
    const dataFromServer = await response.json();
    const { menuCategories } = dataFromServer;
    setMenuCategories(menuCategories);
  };

  const router = useRouter();
  return (
    <div>
      <BackOfficeLayout>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
          <h1>Menu-Categories</h1>
          <Button
            variant="contained"
            onClick={() => router.push("/backoffice/menu-categories/new")}
          >
            Create New Menu-Categories
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 4 }}>
          {MenuCategories.map((menu) => (
            <Card
              variant="outlined"
              sx={{
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              {menu.name}
            </Card>
          ))}
        </Box>
      </BackOfficeLayout>
    </div>
  );
}
