import * as fs from "fs";
import * as path from "path";
import { exec } from "child_process";
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

// exec migrations script to create a notes table
if (fs.existsSync(DB_PATH)) {
  const cmd = `bash ./migrations.sh create_notes up ${DB_PATH}`;
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`=> db: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`=> db: ${stderr.trim()}`);
      return;
    }
    console.log(`=> db: ${stdout.trim()}`);
  });
}
