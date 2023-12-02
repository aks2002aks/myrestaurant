import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const jsonData = fs.readFileSync(
        "E:\\restaurant\\myrestaurant\\json\\restaurantData.json",
        "utf8"
      );

      const data = JSON.parse(jsonData);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
