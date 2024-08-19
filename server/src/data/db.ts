import * as fs from "fs";
import * as path from "path";
import { exit } from "process";

import config from "../config";
import Database from "better-sqlite3";

const { DB_PATH } = config;

// crash the program if the DB_NAME is not set correctly
const CORRECT_DB_NAMES = ["test.db", "dev.db", "prod.db"];
if (!CORRECT_DB_NAMES.some((name) => DB_PATH.includes(name))) {
  console.error(
    "=> db: incorrect DB_NAME value. Did you put the correct .env?"
  );
  exit(1);
}

// mkdir "src/data/bin" directory if not exists
const dirname = path.dirname(DB_PATH);
if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname, { recursive: true });
}

export const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

// migrate db to create notes table
try {
  const query = fs.readFileSync(
    path.join(__dirname, "migrations", "create_notes_table_up.sql"),
    { encoding: "utf-8" }
  );
  db.exec(query);

  console.log("=> db: migration applied successfully");
} catch (err) {
  console.error(err);
  exit(1);
}

// close the db connection if the program received SIGINT
process.on("SIGINT", () => {
  db.close();
  exit(0);
});
