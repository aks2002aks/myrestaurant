import readJsonFile from "@/utils/readJsonFile";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = readJsonFile();
      const online_presence = data.restaurant.online_presence;
      res.status(200).json(online_presence);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
