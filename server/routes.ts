import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // GET /robots.txt -> serve robots.txt as text/plain
  app.get("/robots.txt", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/public/robots.txt"));
  });

  // GET /sitemap.xml -> serve sitemap.xml as application/xml
  app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/public/sitemap.xml"));
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
