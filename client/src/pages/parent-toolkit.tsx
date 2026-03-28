import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, Clock, Leaf, TrendingDown } from "lucide-react";
import bundleMockup from "@assets/zero2seventeenmockup_2_1771837614940.png";

const PRODUCT_CATEGORIES = [
  "Toys",
  "Apparel",
  "Kitchenware",
  "Kids Toys",
  "Toddler Shirt",
  "Clothing",
  "Books",
  "Furniture",
  "Shoes",
  "Bedding",
  "Other",
];

export default function ParentToolkit() {
  const MAILCHIMP_LANDING_PAGE_URL = "https://mailchi.mp/zero2seventeen/landing-page-for-freebies";

  const [shopping, setShopping] = useState({
    newItems: "",
    newItemsCategory: "",
    secondHandItems: "",
    secondHandCategory: "",
  });

  const [donations, setDonations] = useState({
    itemsDonated: "",
    donationCategory: "",
  });

  const [recycling, setRecycling] = useState({
    itemsRecycled: "",
    recyclingCategory: "",
  });

  const calculateImpact = () => {
    let totalItems = 0;
    let wasteReduction = 0;
    let carbonSaved = 0;

    if (shopping.newItems) totalItems += parseFloat(shopping.newItems);

    if (shopping.secondHandItems) {
      const secondHand = parseFloat(shopping.secondHandItems);
      totalItems += secondHand;
      wasteReduction += secondHand * 2.5;
      carbonSaved += secondHand * 8;
    }

    if (donations.itemsDonated) {
      const donated = parseFloat(donations.itemsDonated);
      wasteReduction += donated * 3;
      carbonSaved += donated * 12;
    }

    if (recycling.itemsRecycled) {
      const recycled = parseFloat(recycling.itemsRecycled);
      wasteReduction += recycled * 1.5;
      carbonSaved += recycled * 5;
    }

    return {
      totalItems: Math.round(totalItems),
      wasteReduction: Math.round(wasteReduction),
      carbonSaved: Math.round(carbonSaved),
    };
  };

  const impact = calculateImpact();

  const tips = [
    "Buy second-hand for gently used items - kids outgrow them quickly",
    "Donate items your children have outgrown to other families",
    "Recycle old clothing and worn items responsibly",
    "Encourage friends to shop together and share purchases",
    "Keep high-quality items in circulation through the community",
    "Choose sustainable brands when buying new",
    "Host clothing swap events with other mum friends",
    "Teach your kids the value of reusing and sharing",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6" data-testid="text-parent-toolkit-title">
              Parent Toolkit
            </h1>
            <div className="space-y-4">
              <p className="text-xl font-medium text-foreground" data-testid="text-parent-toolkit-question">
                Need something helpful today without adding more to your mental load?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-parent-toolkit-intro">
                Our free resources are made for real life Australian families — calm, practical and easy to use. Everything is a digital download of printable PDFs so you can grab it in minutes and start right away.
              </p>
            </div>
          </div>

          {/* Current Freebie Section */}
          <section className="mb-20" data-testid="section-current-freebie">
            <h2 className="text-2xl font-bold text-foreground mb-8">Current Freebie</h2>
            <Card className="p-8 md:p-10 hover-elevate transition-all border-primary/20 bg-primary/5">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3" data-testid="text-freebie-name">
                      The School and Kids Reset Bundle Free
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6" data-testid="text-freebie-description">
                      A parent friendly bundle of printables to help you feel more organised and keep little hands busy without screens.
                    </p>

                    <ul className="space-y-3 mb-8">
                      {[
                        "2026 School Term Planner Australian dates",
                        "Kids Activity Pack ages 2 to 8",
                        "Screen Free Idea Reset Pack for overwhelmed days",
                        "Bonus 20 page Australian Kids Activity Book",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={MAILCHIMP_LANDING_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      data-testid="link-get-freebie"
                    >
                      <Button size="lg" className="gap-2 text-lg px-8">
                        Get the free digital bundle
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground" data-testid="text-cta-helper">
                        Enter your email and we will send your instant download link.
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="text-spam-note">
                        If you do not see it within a few minutes please check Spam or Promotions.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">Digital download only. Nothing is shipped.</p>
                        <p className="text-sm text-muted-foreground">
                          You will receive printable PDF files to download instantly and print at home. A4 and printer friendly sizing.
                        </p>
                        <p className="text-sm text-muted-foreground">Personal use only.</p>
                      </div>
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-4">
                        Want it professionally printed? Printed copies are available on request. Printing charges and shipping apply.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-80 aspect-[3/4.5] rounded-lg overflow-hidden border border-border shadow-md bg-white">
                  <img
                    src={bundleMockup}
                    alt="The School and Kids Reset Bundle digital printable PDF download"
                    className="w-full h-full object-contain"
                    data-testid="img-bundle-preview"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* More coming soon */}
          <section className="mb-20" data-testid="section-future-freebies">
            <h2 className="text-2xl font-bold text-foreground mb-8">More coming soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 border-dashed border-2 bg-transparent flex flex-col items-center justify-center text-center space-y-4 min-h-[200px]">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="w-6 h-6 text-muted-foreground/40" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-muted-foreground">Coming Soon</h4>
                    <p className="text-sm text-muted-foreground/60">We'll add new freebies here over time. Check back soon.</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* My Green Impact Calculator */}
          <section id="my-green-impact" data-testid="section-green-impact">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3" data-testid="text-calculator-title">
                My Green Impact Calculator
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
                See how your shopping and sharing choices reduce waste and carbon emissions for future generations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="shopping" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="shopping" data-testid="tab-shopping">Shopping</TabsTrigger>
                    <TabsTrigger value="donations" data-testid="tab-donations">Donations</TabsTrigger>
                    <TabsTrigger value="recycling" data-testid="tab-recycling">Recycling</TabsTrigger>
                  </TabsList>

                  <TabsContent value="shopping" className="space-y-4 mt-6">
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="new-items-category" data-testid="label-new-items-category">New Items Category</Label>
                          <Select value={shopping.newItemsCategory} onValueChange={(value) => setShopping({ ...shopping, newItemsCategory: value })}>
                            <SelectTrigger id="new-items-category" data-testid="select-new-items-category">
                              <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                            <SelectContent>
                              {PRODUCT_CATEGORIES.map((category) => (
                                <SelectItem key={category} value={category} data-testid={`option-category-${category}`}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="new-items" data-testid="label-new-items">New Items Purchased This Month</Label>
                          <Input
                            id="new-items"
                            type="number"
                            placeholder="e.g., 5"
                            value={shopping.newItems}
                            onChange={(e) => setShopping({ ...shopping, newItems: e.target.value })}
                            data-testid="input-new-items"
                          />
                          <p className="text-xs text-muted-foreground mt-2">Toys, clothing, books, furniture, etc.</p>
                        </div>
                        <div>
                          <Label htmlFor="secondhand-category" data-testid="label-secondhand-category">Second-Hand Items Category</Label>
                          <Select value={shopping.secondHandCategory} onValueChange={(value) => setShopping({ ...shopping, secondHandCategory: value })}>
                            <SelectTrigger id="secondhand-category" data-testid="select-secondhand-category">
                              <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                            <SelectContent>
                              {PRODUCT_CATEGORIES.map((category) => (
                                <SelectItem key={category} value={category} data-testid={`option-secondhand-category-${category}`}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="secondhand-items" data-testid="label-secondhand">Second-Hand Items Purchased This Month</Label>
                          <Input
                            id="secondhand-items"
                            type="number"
                            placeholder="e.g., 8"
                            value={shopping.secondHandItems}
                            onChange={(e) => setShopping({ ...shopping, secondHandItems: e.target.value })}
                            data-testid="input-secondhand-items"
                          />
                          <p className="text-xs text-muted-foreground mt-2">Gently used items from other families</p>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="donations" className="space-y-4 mt-6">
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="donation-category" data-testid="label-donation-category">Items Category</Label>
                          <Select value={donations.donationCategory} onValueChange={(value) => setDonations({ ...donations, donationCategory: value })}>
                            <SelectTrigger id="donation-category" data-testid="select-donation-category">
                              <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                            <SelectContent>
                              {PRODUCT_CATEGORIES.map((category) => (
                                <SelectItem key={category} value={category} data-testid={`option-donation-category-${category}`}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="donated-items" data-testid="label-donated">Items Donated This Month</Label>
                          <Input
                            id="donated-items"
                            type="number"
                            placeholder="e.g., 12"
                            value={donations.itemsDonated}
                            onChange={(e) => setDonations({ ...donations, itemsDonated: e.target.value })}
                            data-testid="input-donated-items"
                          />
                          <p className="text-xs text-muted-foreground mt-2">Items shared with other families or donated</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2 text-green-900 dark:text-green-100">Impact of Donations</h4>
                          <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
                            <li>✓ Keeps items out of landfills</li>
                            <li>✓ Helps other families save money</li>
                            <li>✓ Reduces manufacturing demand</li>
                            <li>✓ Builds community connections</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="recycling" className="space-y-4 mt-6">
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="recycling-category" data-testid="label-recycling-category">Items Category</Label>
                          <Select value={recycling.recyclingCategory} onValueChange={(value) => setRecycling({ ...recycling, recyclingCategory: value })}>
                            <SelectTrigger id="recycling-category" data-testid="select-recycling-category">
                              <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                            <SelectContent>
                              {PRODUCT_CATEGORIES.map((category) => (
                                <SelectItem key={category} value={category} data-testid={`option-recycling-category-${category}`}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="recycled-items" data-testid="label-recycled">Items Recycled This Month</Label>
                          <Input
                            id="recycled-items"
                            type="number"
                            placeholder="e.g., 6"
                            value={recycling.itemsRecycled}
                            onChange={(e) => setRecycling({ ...recycling, itemsRecycled: e.target.value })}
                            data-testid="input-recycled-items"
                          />
                          <p className="text-xs text-muted-foreground mt-2">Worn out or damaged items properly recycled</p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">Recycling Tips</h4>
                          <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                            <li>• Check local textile recycling programs</li>
                            <li>• Break down items by material type</li>
                            <li>• Remove non-recyclable parts first</li>
                            <li>• Ask friends if they can reuse items first</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-5 h-5 text-green-600" data-testid="icon-leaf" />
                    <h3 className="font-bold text-lg" data-testid="text-total-items-label">Total Items</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary" data-testid="text-total-items-value">{impact.totalItems}</div>
                  <p className="text-sm text-muted-foreground" data-testid="text-total-items-unit">items in circulation this month</p>
                </Card>

                <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-5 h-5 text-green-600" data-testid="icon-waste-reduction" />
                    <h3 className="font-bold text-lg text-green-900 dark:text-green-100" data-testid="text-waste-reduction-label">Waste Reduced</h3>
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400" data-testid="text-waste-reduction-value">{impact.wasteReduction} kg</div>
                  <p className="text-sm text-green-700 dark:text-green-300" data-testid="text-waste-reduction-description">of waste kept from landfills</p>
                </Card>

                <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100" data-testid="text-carbon-saved-label">Carbon Saved</h3>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400" data-testid="text-carbon-saved-value">{impact.carbonSaved} kg</div>
                  <p className="text-sm text-blue-700 dark:text-blue-300" data-testid="text-carbon-saved-description">equivalent CO₂ emissions avoided</p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-4" data-testid="text-tips-title">Sustainability Tips</h3>
                  <ul className="space-y-2">
                    {tips.map((tip, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-tip-${index}`}>
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
