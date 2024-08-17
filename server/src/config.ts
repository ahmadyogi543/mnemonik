import dotenv from "dotenv";

dotenv.config();

const config = {
  DB_PATH: process.env.DB_PATH || ":memory:",
  HOSTNAME: process.env.HOSTNAME || "localhost",
  PORT: process.env.PORT || 3000,
};

export default config;
