// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method} = req;
  if (method === "GET") {
    const menuCategories = await prisma.menuCategories.findMany();
    res.status(200).json({menuCategories});
  } else if (method === "POST") {
    const menuCategory = req.body;
    const isValid = menuCategory.name;
    if (!isValid) return res.status(400).send("Bad Request");
    await prisma.menuCategories.create({
      data: {
        name: menuCategory.name,
      }
    })
    res.end(); 
  }
  res.status(405).send("Invalid method");
}
