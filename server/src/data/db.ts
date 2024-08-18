import * as fs from "fs";
import * as path from "path";

import config from "../config";
import Database from "better-sqlite3";
import { exec } from "child_process";

const { DB_NAME: DB_PATH } = config;

const dirname = path.dirname(DB_PATH);
if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname, { recursive: true });
}

export const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

exec(`bash ./migrations.sh create_notes up dev`, (error, stdout, stderr) => {
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
