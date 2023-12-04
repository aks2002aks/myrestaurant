import { readFileSync } from "fs";
import path from "path";

export default function readJsonFile() {
  try {
    const filePath = path.join(process.cwd(), "json", "restaurantData.json");
    console.log(filePath);
    const data = readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}
