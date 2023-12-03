import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = JSON.parse(
        fs
          .readFileSync(process.cwd() + "\\public\\restaurantData.json")
          .toString()
      );
      const awards = data.restaurant.awards;
      res.status(200).json(awards);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
