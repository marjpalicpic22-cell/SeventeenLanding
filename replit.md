# Zero to Seventeen - Landing Page

## Overview

Zero to Seventeen is a family-focused marketplace platform that enables families to buy, sell, donate, and recycle children's items. The application consists of a landing page built with React, TypeScript, and modern web technologies, designed to showcase the platform's mission of building a circular economy for children's items while connecting families in a safe, trusted community.

The current implementation focuses on a marketing landing page with sections covering the brand story, mission, values, and app download CTAs. The platform emphasizes sustainability, community support, and making second-hand children's items more accessible to families.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query** (React Query) for server state management and data fetching
- **Tailwind CSS** for utility-first styling with custom design system

**Design System:**
- **shadcn/ui** component library (New York style variant) providing accessible, customizable UI primitives
- **Radix UI** primitives for headless, accessible component foundations
- Custom theme with CSS variables for colors, spacing, and typography
- Typography: Outfit font for headings, Urbanist for body text
- Color scheme: Primary green (#42A852), neutral backgrounds, with light mode focus
- Consistent spacing system using Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24)

**Component Structure:**
- Landing page broken into logical sections: Hero, Origin Story, Mission, Core Values, How It Works, Community Impact, Final CTA, and Footer
- Reusable UI components in `client/src/components/ui/` following shadcn/ui patterns
- Section components in `client/src/components/landing/` for page-specific content
- Path aliases configured (`@/` for client/src, `@shared/` for shared code, `@assets/` for attached assets)

**State Management:**
- React Query for asynchronous state with infinite stale time and disabled refetching by default
- Local component state using React hooks
- Form state managed with react-hook-form (indicated by @hookform/resolvers dependency)

### Backend Architecture

**Server Framework:**
- **Express.js** Node.js server with TypeScript
- Custom build script using esbuild for server compilation
- Static file serving for production builds
- Vite integration for development with HMR support

**Development vs Production:**
- Development: Vite middleware mode with hot module replacement
- Production: Pre-built static files served from `dist/public`
- Environment-based configuration through NODE_ENV

**API Structure:**
- Routes registered in `server/routes.ts` with `/api` prefix convention
- Storage abstraction layer (`server/storage.ts`) providing an interface for data operations
- Currently using in-memory storage (MemStorage) for user data
- Designed to be swapped with database-backed storage implementation

### Data Storage Solutions

**Database Technology:**
- **PostgreSQL** configured via Neon serverless driver (`@neondatabase/serverless`)
- **Drizzle ORM** for type-safe database operations and schema management
- Schema defined in `shared/schema.ts` for code sharing between client and server
- Migrations managed in `./migrations` directory via drizzle-kit

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Schema validation using Zod via drizzle-zod for runtime type checking
- Insert schemas derived from table definitions for input validation

**Database Connection:**
- Connection via DATABASE_URL environment variable
- Session storage configured for connect-pg-simple (PostgreSQL session store)
- Database must be provisioned before running migrations

### Authentication and Authorization

**Current State:**
- Basic user schema with username/password fields defined
- Storage interface includes methods for user lookup and creation
- No active authentication middleware implemented yet

**Intended Architecture (based on dependencies):**
- Passport.js for authentication strategy management
- Express-session for session management with PostgreSQL backing
- Local strategy for username/password authentication
- JWT support available via jsonwebtoken dependency

### External Dependencies

**Third-Party Services:**
- **Neon Database** - Serverless PostgreSQL hosting
- **Google Fonts** - Typography delivery (Urbanist, Outfit fonts)
- App store links to Apple App Store and Google Play Store for mobile app downloads

**Social Media Integration:**
- Instagram: @zero2seventeen
- Facebook: Profile ID 61572776604472
- TikTok: @zero2seventeen

**Content Delivery:**
- Brand assets hosted at zero2seventeen.com domain
- Logo SVG served from https://www.zero2seventeen.com/_nuxt/logo.189acc67.svg
- Stock images stored in `attached_assets/stock_images/` directory

**Development Tools:**
- Replit-specific plugins for development banner, error overlays, and cartographer
- PostCSS with Tailwind CSS and Autoprefixer for CSS processing

**API/SDK Dependencies:**
- Rate limiting via express-rate-limit
- CORS support configured
- File upload handling through multer
- Email capability through nodemailer (not yet implemented)
- Potential AI integration via OpenAI and Google Generative AI SDKs
- Payment processing via Stripe (not yet implemented)

**Build and Development:**
- TypeScript with strict mode enabled
- ESM module system throughout
- Source maps for debugging
- Incremental compilation with build info caching