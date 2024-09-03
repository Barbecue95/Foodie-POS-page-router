import { BackOfficeLayout } from "@/components/BackOfficeLayout";
import MenuCard from "@/components/MenuCards";
import { config } from "@/config";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface Menus {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

export default function Menus() {
  const [menus, setMenus] = useState<Menus[]>([]);
  const router = useRouter();

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = async () => {
    const response = await fetch(`${config.backOfficeUrl}/menus`);
    const menus = await response.json();
    setMenus(menus);
  };

  return (
    <div>
      <BackOfficeLayout>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
          <h1>Menus</h1>
          <Button
            variant="contained"
            onClick={() => router.push("/backoffice/menus/new")}
          >
            Create New Menu
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </BackOfficeLayout>
    </div>
  );
}
