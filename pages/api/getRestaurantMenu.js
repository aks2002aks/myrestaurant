import { readJsonFile } from "@/utils/readJson";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = readJsonFile();
      const menu = data.restaurant.menu;
      res.status(200).json(menu);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
