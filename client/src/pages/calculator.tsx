import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, TrendingDown } from "lucide-react";

export default function EnvironmentalCalculator() {
  const [shopping, setShopping] = useState({
    newItems: "",
    secondHandItems: "",
  });

  const [donations, setDonations] = useState({
    itemsDonated: "",
  });

  const [recycling, setRecycling] = useState({
    itemsRecycled: "",
  });

  const calculateImpact = () => {
    let totalItems = 0;
    let wasteReduction = 0;
    let carbonSaved = 0;

    if (shopping.newItems) {
      totalItems += parseFloat(shopping.newItems);
    }

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
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" data-testid="button-home">
              ← Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-calculator-title">
            Environmental Impact Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            See how your shopping and sharing choices reduce waste and carbon emissions for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="shopping" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="shopping" data-testid="tab-shopping">
                  Shopping
                </TabsTrigger>
                <TabsTrigger value="donations" data-testid="tab-donations">
                  Donations
                </TabsTrigger>
                <TabsTrigger value="recycling" data-testid="tab-recycling">
                  Recycling
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shopping" className="space-y-4 mt-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="new-items" data-testid="label-new-items">
                        New Items Purchased This Month
                      </Label>
                      <Input
                        id="new-items"
                        type="number"
                        placeholder="e.g., 5"
                        value={shopping.newItems}
                        onChange={(e) =>
                          setShopping({ ...shopping, newItems: e.target.value })
                        }
                        data-testid="input-new-items"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Toys, clothing, books, furniture, etc.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="secondhand-items" data-testid="label-secondhand">
                        Second-Hand Items Purchased This Month
                      </Label>
                      <Input
                        id="secondhand-items"
                        type="number"
                        placeholder="e.g., 8"
                        value={shopping.secondHandItems}
                        onChange={(e) =>
                          setShopping({
                            ...shopping,
                            secondHandItems: e.target.value,
                          })
                        }
                        data-testid="input-secondhand-items"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Gently used items from other families
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="donations" className="space-y-4 mt-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="donated-items" data-testid="label-donated">
                        Items Donated This Month
                      </Label>
                      <Input
                        id="donated-items"
                        type="number"
                        placeholder="e.g., 12"
                        value={donations.itemsDonated}
                        onChange={(e) =>
                          setDonations({ itemsDonated: e.target.value })
                        }
                        data-testid="input-donated-items"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Items shared with other families or donated
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2 text-green-900 dark:text-green-100">
                        Impact of Donations
                      </h4>
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
                      <Label htmlFor="recycled-items" data-testid="label-recycled">
                        Items Recycled This Month
                      </Label>
                      <Input
                        id="recycled-items"
                        type="number"
                        placeholder="e.g., 6"
                        value={recycling.itemsRecycled}
                        onChange={(e) =>
                          setRecycling({ itemsRecycled: e.target.value })
                        }
                        data-testid="input-recycled-items"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Worn out or damaged items properly recycled
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">
                        Recycling Tips
                      </h4>
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
                <h3
                  className="font-bold text-lg"
                  data-testid="text-total-items-label"
                >
                  Total Items
                </h3>
              </div>
              <div className="text-3xl font-bold text-primary" data-testid="text-total-items-value">
                {impact.totalItems}
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-total-items-unit">
                items in circulation this month
              </p>
            </Card>

            <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-green-600" data-testid="icon-waste-reduction" />
                <h3
                  className="font-bold text-lg text-green-900 dark:text-green-100"
                  data-testid="text-waste-reduction-label"
                >
                  Waste Reduced
                </h3>
              </div>
              <div
                className="text-2xl font-bold text-green-600 dark:text-green-400"
                data-testid="text-waste-reduction-value"
              >
                {impact.wasteReduction} kg
              </div>
              <p className="text-sm text-green-700 dark:text-green-300" data-testid="text-waste-reduction-description">
                of waste kept from landfills
              </p>
            </Card>

            <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-blue-600" />
                <h3
                  className="font-bold text-lg text-blue-900 dark:text-blue-100"
                  data-testid="text-carbon-saved-label"
                >
                  Carbon Saved
                </h3>
              </div>
              <div
                className="text-2xl font-bold text-blue-600 dark:text-blue-400"
                data-testid="text-carbon-saved-value"
              >
                {impact.carbonSaved} kg
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300" data-testid="text-carbon-saved-description">
                equivalent CO₂ emissions avoided
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4" data-testid="text-tips-title">
                Sustainability Tips
              </h3>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                    data-testid={`text-tip-${index}`}
                  >
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
