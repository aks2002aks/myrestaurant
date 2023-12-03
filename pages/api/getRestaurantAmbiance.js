import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = JSON.parse(
        fs
          .readFileSync(process.cwd() + "\\public\\restaurantData.json")
          .toString()
      );
      const ambiance = data.restaurant.ambiance;
      res.status(200).json(ambiance);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
