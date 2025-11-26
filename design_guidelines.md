# Zero to Seventeen Landing Page Design Guidelines

## Design Approach

**Reference-Based**: Drawing inspiration from Airbnb's warm community feel, Etsy's personal storytelling, and modern marketplace aesthetics. This family-focused marketplace requires emotional connection, trust-building, and accessibility for busy parents.

## Typography System

**Fonts**: 
- Move Sans (via Google Fonts CDN) - Headlines and prominent UI elements
- Urbanist (via Google Fonts CDN) - Body text and supporting content

**Hierarchy**:
- Hero headline: text-5xl to text-7xl, font-bold (Move Sans)
- Section headings: text-4xl to text-5xl, font-semibold (Move Sans)
- Subsection headings: text-2xl to text-3xl, font-medium (Move Sans)
- Body text: text-base to text-lg, font-normal (Urbanist)
- Supporting text: text-sm, font-normal (Urbanist)

## Layout System

**Spacing primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Container max-width: max-w-7xl
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-8 to space-y-12
- Inner content gaps: gap-6 to gap-8

**Grid patterns**:
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Values: grid-cols-1 md:grid-cols-2 lg:grid-cols-5
- Testimonials: grid-cols-1 md:grid-cols-2

## Page Structure

### 1. Navigation Bar
- Logo on left (SVG from brand assets)
- Clean, minimal navigation: "How It Works", "Our Story", "Download"
- App download CTAs (Google Play + App Store badges) on desktop
- Mobile: Hamburger menu
- Sticky positioning with subtle backdrop blur on scroll

### 2. Hero Section (90vh)
- Large hero image: Warm family photo showing parent and child with children's items, conveying trust and community connection
- Overlay with subtle gradient for text readability
- Center-aligned content on overlay
- Logo mark (subtle, top-left corner)
- Headline: "Where Families Help Families"
- Subheadline: "Buy, sell, donate, and recycle children's items with families you trust"
- Dual CTA buttons with blurred glass-morphism backgrounds: "Download on App Store" + "Get it on Google Play"
- Trust indicator: "Join 10,000+ families in Australia & the USA"

### 3. Origin Story Section
- Two-column layout (text left, image right, alternating)
- Image: Authentic photo of founder Madelon with Liliana, or warm lifestyle photo
- Headline: "Where Our Story Begins"
- Body copy from brand guidelines: Madelon's highchair search journey
- Warm, personal narrative tone
- Decorative leaf element (brand motif) as visual accent

### 4. Mission Statement Block
- Full-width, centered text block (max-w-4xl)
- Large, impactful typography
- Quote-style presentation: "Our mission is to build a global circular economy..."
- Subtle background treatment (soft texture or pattern)

### 5. Core Values Grid
- Five-column grid on desktop (stacks on mobile)
- Icon + Title + Description cards for each value:
  - Sustainability (leaf icon)
  - Family (heart/home icon)
  - Community (people icon)
  - Giving Back (hands/gift icon)
  - Education (book/growth icon)
- Equal height cards with rounded corners (rounded-2xl)
- Hover lift effect

### 6. How It Works Section
- Four-step horizontal flow (becomes vertical on mobile)
- Step cards with large numbers, icons, titles, and descriptions:
  1. "List Your Items" - Upload, describe, price
  2. "Connect Safely" - In-app messaging, verified users
  3. "Complete Transaction" - Buy, sell, or donate
  4. "Make a Difference" - Help families, reduce waste
- Connecting line/arrow visual between steps

### 7. Platform Features Showcase
- Three-column feature grid
- Image cards showing app interface screenshots
- Overlaid feature highlights:
  - "Safe Messaging"
  - "Local & Verified"
  - "Easy Listing"
  - "Donation Options"
- Mix of phone mockups and interface close-ups

### 8. Community Impact Section
- Stats showcase: grid-cols-3
- Large numbers with descriptions:
  - "10,000+ Items Rehomed"
  - "5,000+ Families Connected"
  - "50 Tons of Waste Diverted"
- Background: subtle pattern or soft imagery

### 9. Testimonials
- Two-column card layout
- Quote cards with:
  - Parent photo (circular avatar)
  - Testimonial text
  - Name and location
  - Star rating visual
- Warm, authentic parent quotes about platform experience

### 10. Final CTA Section
- Full-width, visually distinct
- Background image: Joyful family moment or children playing
- Overlay treatment
- Centered content:
  - Headline: "Ready to Join Our Community?"
  - Subtext: "Download Zero to Seventeen today"
  - Large app store badges with blurred backgrounds
  - Social proof: "Available in Australia & USA, expanding to UK"

### 11. Footer
- Three-column layout
  - Column 1: Logo + tagline + social icons (Instagram, Facebook, TikTok)
  - Column 2: Quick links (How It Works, Our Story, Contact)
  - Column 3: Legal (Terms & Conditions, Privacy Policy) + Contact email
- Copyright and global expansion note
- Subtle top border separation

## Component Specifications

**Buttons**:
- Primary: Large, rounded-lg, px-8 py-4, font-semibold
- App store badges: Official Apple/Google assets from brand resources
- Blurred backgrounds when overlaying images: backdrop-blur-md with semi-transparent fill

**Cards**:
- Border radius: rounded-2xl
- Padding: p-6 to p-8
- Shadow: Subtle, soft shadows (shadow-lg with reduced opacity)
- Hover states: Gentle lift (translate-y-[-4px]) with shadow increase

**Icons**:
- Use Heroicons (via CDN) for interface elements
- Size: w-12 h-12 for feature icons, w-6 h-6 for utility icons
- Consistent stroke width across all icons

**Forms** (if newsletter signup):
- Input: rounded-lg, px-4 py-3, border width 1px
- Focus states: Ring offset for accessibility

## Images Specification

1. **Hero Image**: Large, full-width background - Warm, bright photo of diverse families engaging with children's items (playground, home setting). Should convey trust, joy, and community. High quality, professional lifestyle photography.

2. **Story Section Image**: Authentic founder photo with child, or warm parent-child moment showing the real, human side of the brand

3. **Feature Screenshots**: 3-4 mobile app interface screenshots showing key features in use

4. **Community Impact Background**: Subtle, soft-focus image of children's items, families, or nature elements

5. **Final CTA Background**: Uplifting family moment - children playing, parents smiling, conveying the positive impact

All images should feel authentic, warm, and inclusive - representing diverse families and real moments.

## Accessibility

- ARIA labels for all interactive elements
- Semantic HTML throughout (nav, main, section, article, footer)
- Sufficient text contrast maintained by image overlays
- Focus indicators on all interactive elements
- Alt text for all images describing family/community context