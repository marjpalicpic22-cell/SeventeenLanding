import { storage } from "./storage";

async function seed() {
  console.log("Seeding database...");

  // Add testimonials
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Sydney, Australia",
      quote: "I found the perfect cot for my daughter through Zero to Seventeen. Not only did I save money, but I also loved knowing I was helping another family and the environment. The community is so supportive!",
      itemType: "Cot",
      featured: true,
    },
    {
      name: "James Chen",
      location: "Melbourne, Australia",
      quote: "As a dad of two, I appreciate how easy it is to pass on items my kids have outgrown. We've donated clothes, toys, and even a stroller. It feels great to help other families while decluttering our home.",
      itemType: "Stroller & Clothing",
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      location: "Los Angeles, USA",
      quote: "The quality of items on Zero to Seventeen is amazing! I've bought a high chair, books, and toys for my son. Every transaction has been smooth, and I love connecting with other parents in my area.",
      itemType: "High Chair & Toys",
      featured: true,
    },
    {
      name: "Tom & Lisa Parker",
      location: "Brisbane, Australia",
      quote: "We've saved hundreds of dollars furnishing our nursery through the app. The sustainability aspect is what drew us in initially, but the community kept us coming back. Everyone is so genuine and helpful!",
      itemType: "Nursery Furniture",
      featured: false,
    },
  ];

  for (const testimonial of testimonials) {
    await storage.createTestimonial(testimonial);
  }

  // Add blog posts
  const blogPosts = [
    {
      title: "5 Essential Tips for Buying Second-Hand Baby Items Safely",
      slug: "buying-second-hand-baby-items-safely",
      excerpt: "Learn how to shop smart and safe when purchasing pre-loved baby items for your little ones.",
      content: `When it comes to buying second-hand baby items, safety should always be your top priority. Here are five essential tips to help you make informed decisions:

1. **Check for Recalls**: Always verify that the item hasn't been recalled. Visit your country's consumer product safety website to check.

2. **Inspect for Wear and Tear**: Look for signs of damage, especially on items like car seats, cribs, and strollers. Check for cracks, missing parts, or worn straps.

3. **Ask About the Item's History**: Don't hesitate to ask the seller about how the item was used and stored. Items kept in smoke-free, pet-free homes are often in better condition.

4. **Test Moving Parts**: For strollers, high chairs, and other items with moving parts, test everything thoroughly before purchasing.

5. **Know What to Avoid**: Some items, like car seats and mattresses, have strict safety guidelines. Car seats should never be purchased if they've been in an accident, and mattresses should be firm with no sagging.

Remember, the Zero to Seventeen community is here to support you. Many sellers are parents just like you who want to ensure items go to good homes!`,
      category: "Safety & Tips",
      published: true,
    },
    {
      title: "The Environmental Impact of Choosing Second-Hand",
      slug: "environmental-impact-second-hand",
      excerpt: "Discover how buying pre-loved children's items helps create a more sustainable future for the next generation.",
      content: `Every time you choose a second-hand item over a new one, you're making a positive impact on the environment. Here's how:

**Reduced Carbon Footprint**
Manufacturing new products requires significant energy and resources. By choosing second-hand, you're reducing the demand for new production and the associated carbon emissions.

**Less Waste in Landfills**
Children outgrow items quickly. When these items end up in landfills instead of being reused, they contribute to our growing waste problem. A single stroller can take decades to decompose.

**Water Conservation**
The textile industry is one of the largest consumers of water globally. By purchasing second-hand clothing and fabric items, you're helping conserve this precious resource.

**Resource Preservation**
From the metals in cribs to the plastics in toys, manufacturing requires raw materials. Reusing items means these resources stay in circulation longer.

**The Ripple Effect**
When you participate in the circular economy through platforms like Zero to Seventeen, you inspire others to do the same. Small actions create big changes when we work together!

Join our community of conscious families making a difference, one item at a time.`,
      category: "Sustainability",
      published: true,
    },
    {
      title: "How to Prepare Items for Resale: A Complete Guide",
      slug: "prepare-items-for-resale",
      excerpt: "Maximize the value of your children's items with our step-by-step guide to preparing them for their next home.",
      content: `Want to get the best value when selling your children's items? Follow this complete guide to preparation:

**Cleaning is Key**
- Wash all clothing items according to care labels
- Wipe down hard surfaces with gentle, child-safe cleaners
- Remove stains when possible (natural solutions work great!)

**Make Necessary Repairs**
- Fix loose buttons or seams
- Tighten screws on furniture and toys
- Replace missing parts if possible

**Take Quality Photos**
- Use natural lighting
- Show the item from multiple angles
- Include close-ups of any wear or imperfections
- Style clothing on a hanger or flat surface

**Write Honest Descriptions**
- List the brand, size, and age of the item
- Mention any flaws or wear honestly
- Include dimensions for furniture
- Share why you loved the item

**Price Fairly**
- Research similar items on the platform
- Consider condition, brand, and demand
- Be willing to negotiate

**Package with Care**
- Use clean, sturdy boxes
- Wrap fragile items securely
- Include any manuals or accessories

Remember, treating buyers the way you'd want to be treated builds trust and positive reviews in our community!`,
      category: "Selling Tips",
      published: true,
    },
    {
      title: "Building Community Through Sharing: Parent Stories",
      slug: "parent-stories-community",
      excerpt: "Real stories from families who have connected, shared, and built friendships through Zero to Seventeen.",
      content: `The best part of Zero to Seventeen isn't just the items exchanged—it's the connections made. Here are some heartwarming stories from our community:

**Sarah's Story: Finding Support**
"When I moved to a new city while pregnant, I felt isolated. Through Zero to Seventeen, I not only found baby items I needed but also connected with other new moms. We now have a playgroup that meets weekly!"

**The Rodriguez Family: Paying It Forward**
"After receiving donated items when we were struggling financially, we made it our mission to pay it forward. We've now helped over a dozen families furnish their nurseries. It's incredibly rewarding."

**Emma & Kate: Sustainability Sisters**
"We started as buyer and seller but became friends bonded by our commitment to sustainability. Our kids now play together regularly, and we swap items between our families constantly."

**Community Impact**
These connections transform our platform from a simple marketplace into a support network. Parents help parents, not just with items, but with advice, encouragement, and friendship.

Together, we're proving that sharing economy isn't just about saving money—it's about building the world we want our children to inherit.

Want to share your story? Connect with us through the app!`,
      category: "Community",
      published: true,
    },
  ];

  for (const post of blogPosts) {
    await storage.createBlogPost(post);
  }

  console.log("✅ Database seeded successfully!");
  console.log(`- Added ${testimonials.length} testimonials`);
  console.log(`- Added ${blogPosts.length} blog posts`);
}

seed().catch(console.error);
