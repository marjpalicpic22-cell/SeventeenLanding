import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, Droplets, Trash2, TrendingDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImpactMetrics {
  co2Saved: number;
  wasteDiverted: number;
  waterConserved: number;
}

const CATEGORY_IMPACTS = {
  "Clothing": { co2: 12, waste: 0.5, water: 2700 },
  "Toys": { co2: 8, waste: 0.3, water: 180 },
  "Furniture": { co2: 45, waste: 15, water: 1200 },
  "Strollers": { co2: 35, waste: 12, water: 900 },
  "Car Seats": { co2: 28, waste: 10, water: 750 },
  "Books": { co2: 4, waste: 0.4, water: 85 },
  "Equipment": { co2: 25, waste: 8, water: 600 },
} as const;

export function ImpactCalculator() {
  const [itemCount, setItemCount] = useState<number>(1);
  const [category, setCategory] = useState<keyof typeof CATEGORY_IMPACTS | "">("");
  const [showResults, setShowResults] = useState(false);
  const [metrics, setMetrics] = useState<ImpactMetrics>({ co2Saved: 0, wasteDiverted: 0, waterConserved: 0 });

  const calculateImpact = () => {
    if (!category || itemCount < 1) return;

    const impact = CATEGORY_IMPACTS[category];
    const co2Saved = Math.round(impact.co2 * itemCount * 10) / 10;
    const wasteDiverted = Math.round(impact.waste * itemCount * 10) / 10;
    const waterConserved = Math.round(impact.water * itemCount);

    setMetrics({ co2Saved, wasteDiverted, waterConserved });
    setShowResults(true);
  };

  const resetCalculator = () => {
    setItemCount(1);
    setCategory("");
    setShowResults(false);
  };

  return (
    <section
      id="impact-calculator"
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-impact-calculator"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4" data-testid="calculator-icon">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Environmental Impact</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="calculator-headline"
          >
            Calculate Your Impact
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="calculator-description"
          >
            See how choosing second-hand items helps the environment
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8 space-y-6" data-testid="calculator-card">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="item-count" className="text-base font-semibold">
                  How many items?
                </Label>
                <Input
                  id="item-count"
                  type="number"
                  min="1"
                  max="100"
                  value={itemCount}
                  onChange={(e) => setItemCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-base"
                  data-testid="input-item-count"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-base font-semibold">
                  What type of items?
                </Label>
                <Select value={category} onValueChange={(value) => setCategory(value as keyof typeof CATEGORY_IMPACTS)}>
                  <SelectTrigger id="category" className="text-base" data-testid="select-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Toys">Toys</SelectItem>
                    <SelectItem value="Furniture">Furniture (Crib, Dresser, etc.)</SelectItem>
                    <SelectItem value="Strollers">Strollers & Carriers</SelectItem>
                    <SelectItem value="Car Seats">Car Seats & Safety</SelectItem>
                    <SelectItem value="Books">Books & Media</SelectItem>
                    <SelectItem value="Equipment">Equipment & Gear</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={calculateImpact}
                size="lg"
                className="flex-1"
                data-testid="button-calculate"
                disabled={!category || itemCount < 1}
              >
                Calculate Impact
              </Button>
              {showResults && (
                <Button
                  onClick={resetCalculator}
                  size="lg"
                  variant="outline"
                  data-testid="button-reset"
                >
                  Reset
                </Button>
              )}
            </div>

            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 pt-4 border-t"
                  data-testid="calculator-results"
                >
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground">
                      By choosing second-hand, you would save:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-primary/5 rounded-lg p-4 text-center space-y-2"
                      data-testid="result-co2"
                    >
                      <TrendingDown className="w-8 h-8 text-primary mx-auto" />
                      <div>
                        <p className="text-3xl font-bold text-foreground">
                          {metrics.co2Saved}
                        </p>
                        <p className="text-sm text-muted-foreground">kg CO₂</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Carbon emissions reduced</p>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-primary/5 rounded-lg p-4 text-center space-y-2"
                      data-testid="result-waste"
                    >
                      <Trash2 className="w-8 h-8 text-primary mx-auto" />
                      <div>
                        <p className="text-3xl font-bold text-foreground">
                          {metrics.wasteDiverted}
                        </p>
                        <p className="text-sm text-muted-foreground">kg waste</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Diverted from landfills</p>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-primary/5 rounded-lg p-4 text-center space-y-2"
                      data-testid="result-water"
                    >
                      <Droplets className="w-8 h-8 text-primary mx-auto" />
                      <div>
                        <p className="text-3xl font-bold text-foreground">
                          {metrics.waterConserved}
                        </p>
                        <p className="text-sm text-muted-foreground">liters</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Water conserved</p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-accent/30 rounded-lg p-4 text-center"
                    data-testid="result-message"
                  >
                    <p className="text-sm text-foreground font-medium">
                      Amazing! That's equivalent to driving {Math.round(metrics.co2Saved / 0.12)} fewer kilometers 
                      or planting {Math.round(metrics.co2Saved / 22)} trees! 🌱
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
}
