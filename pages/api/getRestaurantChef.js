import { readJsonFile } from "@/utils/readJson";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = readJsonFile();
      const chef = data.restaurant.chef;
      res.status(200).json(chef);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
