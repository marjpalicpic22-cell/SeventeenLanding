import { 
  type User, 
  type InsertUser,
  type NewsletterSignup,
  type InsertNewsletterSignup,
  type Testimonial,
  type InsertTestimonial,
  type BlogPost,
  type InsertBlogPost,
  users,
  newsletterSignups,
  testimonials,
  blogPosts,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  getNewsletterSignupByEmail(email: string): Promise<NewsletterSignup | undefined>;
  
  getTestimonials(featured?: boolean): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DBStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return await db.query.users.findFirst({
      where: eq(users.id, id),
    });
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return await db.query.users.findFirst({
      where: eq(users.username, username),
    });
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const [created] = await db.insert(newsletterSignups).values(signup).returning();
    return created;
  }

  async getNewsletterSignupByEmail(email: string): Promise<NewsletterSignup | undefined> {
    return await db.query.newsletterSignups.findFirst({
      where: eq(newsletterSignups.email, email),
    });
  }

  async getTestimonials(featured?: boolean): Promise<Testimonial[]> {
    return await db.query.testimonials.findMany({
      where: featured !== undefined ? eq(testimonials.featured, featured) : undefined,
      orderBy: [desc(testimonials.createdAt)],
    });
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [created] = await db.insert(testimonials).values(testimonial).returning();
    return created;
  }

  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    return await db.query.blogPosts.findMany({
      where: published !== undefined ? eq(blogPosts.published, published) : undefined,
      orderBy: [desc(blogPosts.createdAt)],
    });
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return await db.query.blogPosts.findFirst({
      where: eq(blogPosts.slug, slug),
    });
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [created] = await db.insert(blogPosts).values(post).returning();
    return created;
  }
}

export const storage = new DBStorage();
