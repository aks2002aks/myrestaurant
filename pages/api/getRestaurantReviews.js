import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = JSON.parse(
        fs
          .readFileSync(process.cwd() + "\\public\\restaurantData.json")
          .toString()
      );
      const reviews = data.restaurant.reviews;
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
