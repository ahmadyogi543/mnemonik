import * as fs from "fs";
import * as path from "path";

import config from "../config";
import Database from "better-sqlite3";
import { exec } from "child_process";

const { DB_NAME: DB_PATH } = config;

// mkdir "src/data/bin" directory if not exists
const dirname = path.dirname(DB_PATH);
if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname, { recursive: true });
}

export const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

// exec migrations script to create a notes table
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
