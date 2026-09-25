import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  // Allow loading from .env manually when drizzle-kit doesn't load it
  try {
    const fs = await import("node:fs");
    const content = fs.readFileSync(".env", "utf8");
    const match = content.match(/^DATABASE_URL\s*=\s*"?([^"\n]+)"?/m);
    if (match) process.env.DATABASE_URL = match[1].trim();
  } catch {
    // .env not found
  }
}

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "mysql://root@localhost:3306/skansaba_blud",
  },
  verbose: true,
  strict: false,
});
