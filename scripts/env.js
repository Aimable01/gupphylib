const fs = require("fs");
const dotenv = require("dotenv");

// Load .env variables
dotenv.config();

// Generate environment.ts content
const envConfig = `export const environment = {
  production: false,
  UNSPLASH_ACCESS_KEY: '${process.env.UNSPLASH_ACCESS_KEY}',
};`;

fs.writeFileSync("./src/environments/environment.ts", envConfig);
console.log("Environment variables generated.");
