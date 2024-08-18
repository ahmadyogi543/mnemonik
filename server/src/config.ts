import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const config = {
  DB_PATH: `src/data/bin/${process.env.DB_NAME}` || ":memory:",
  HOSTNAME: process.env.HOSTNAME || "localhost",
  PORT: process.env.PORT || 3000,
};

export default config;
