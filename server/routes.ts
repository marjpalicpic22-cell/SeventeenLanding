import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSignupSchema, insertTestimonialSchema, insertBlogPostSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Newsletter signup endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      
      // Server-side computation of waitlist status based on region
      const isWaitlist = !["Australia", "USA"].includes(validatedData.region);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSignupByEmail(validatedData.email);
      if (existing) {
        return res.status(409).json({ error: "Email already subscribed" });
      }
      
      const signup = await storage.createNewsletterSignup({
        ...validatedData,
        isWaitlist,
      });
      res.status(201).json(signup);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const featured = req.query.featured === "true";
      const testimonials = await storage.getTestimonials(featured || undefined);
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Create testimonial (for admin/seeding)
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to create testimonial" });
    }
  });

  // Get blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const published = req.query.published !== "false";
      const posts = await storage.getBlogPosts(published);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  // Get blog post by slug
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // Create blog post (for admin/seeding)
  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: fromZodError(error).message });
      }
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  return httpServer;
}
