import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  mysqlPool: mysql.Pool | undefined;
};

function createPool(): mysql.Pool {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env and configure your MySQL connection.",
    );
  }
  return mysql.createPool({
    uri: url,
    connectionLimit: 10,
  });
}

export const pool = globalForDb.mysqlPool ?? createPool();

if (process.env.NODE_ENV !== "production") globalForDb.mysqlPool = pool;

export const db = drizzle(pool, { schema, mode: "default" });

export * as tables from "./schema";
export { schema };
export default db;
