import { readJsonFile } from "@/utils/readJson";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = readJsonFile();
      const events = data.restaurant.events;
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
