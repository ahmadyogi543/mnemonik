import Database from "better-sqlite3";

import config from "../config";

const { DB_NAME: DB_PATH } = config;

export const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
