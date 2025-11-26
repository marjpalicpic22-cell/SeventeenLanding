import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const newsletterSignups = pgTable("newsletter_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  region: text("region").notNull(),
  isWaitlist: boolean("is_waitlist").notNull().default(false),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  avatar: text("avatar"),
  quote: text("quote").notNull(),
  itemType: text("item_type"),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertNewsletterSignupSchema = createInsertSchema(newsletterSignups).omit({
  id: true,
  createdAt: true,
  isWaitlist: true,
}).extend({
  email: z.string().email("Please enter a valid email address").transform(s => s.trim().toLowerCase()),
  region: z.enum(["Australia", "USA", "UK", "Canada", "New Zealand", "Other"], {
    errorMap: () => ({ message: "Please select a valid region" }),
  }),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type NewsletterSignup = typeof newsletterSignups.$inferSelect;
export type InsertNewsletterSignup = z.infer<typeof insertNewsletterSignupSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
