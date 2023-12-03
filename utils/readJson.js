// utils/readJson.js
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  process.cwd(),
  "../myrestaurant/json/restaurantData.json"
);

export const readJsonFile = () => {
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return data;
};
