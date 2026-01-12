import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // GET /robots.txt -> serve robots.txt as text/plain
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /
Sitemap: https://www.zero2seventeen.com/sitemap.xml`);
  });

  // GET /sitemap.xml -> serve sitemap.xml as application/xml
  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.zero2seventeen.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.zero2seventeen.com/how-it-works</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.zero2seventeen.com/our-story</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.zero2seventeen.com/community</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.zero2seventeen.com/calculator</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.zero2seventeen.com/download</loc>
    <priority>0.8</priority>
  </url>
</urlset>`);
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
