import { Box } from "@mui/material";
import { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./Topbar";

interface Props {
    children: ReactNode;
}

export function BackOfficeLayout({children} : Props) {
    return (
        <div>
            <TopBar/>
            <Box sx={{display: "flex"}}>
            <SideBar/>
            <Box sx={{p: 2, width: "100%"}}>{children}</Box>
            </Box>
        </div>
    )
}