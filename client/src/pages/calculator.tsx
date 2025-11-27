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
  const [transportation, setTransportation] = useState({
    mode: "car",
    distance: "",
    frequency: "daily",
  });

  const [energy, setEnergy] = useState({
    electricity: "",
    gas: "",
    renewable: "0",
  });

  const [diet, setDiet] = useState({
    meatServings: "",
    dairyServings: "",
  });

  const calculateEmissions = () => {
    let total = 0;

    if (transportation.distance) {
      const distance = parseFloat(transportation.distance);
      const multiplier =
        transportation.frequency === "daily"
          ? 250
          : transportation.frequency === "weekly"
            ? 52
            : 12;
      const emissions =
        transportation.mode === "car"
          ? distance * 0.19
          : transportation.mode === "bus"
            ? distance * 0.05
            : distance * 0.02;
      total += emissions * multiplier;
    }

    if (energy.electricity) {
      total += parseFloat(energy.electricity) * 0.92 * 12;
    }

    if (energy.gas) {
      total += parseFloat(energy.gas) * 5.3;
    }

    if (diet.meatServings) {
      total += parseFloat(diet.meatServings) * 6.6 * 52;
    }

    if (diet.dairyServings) {
      total += parseFloat(diet.dairyServings) * 1.3 * 52;
    }

    return Math.round(total);
  };

  const emissions = calculateEmissions();
  const offset = Math.round(emissions * 0.1);

  const tips = [
    "Use public transportation or carpool 2 days per week",
    "Switch to renewable energy sources for your home",
    "Reduce meat consumption by 2 servings per week",
    "Plant trees (each tree offsets ~20kg CO₂/year)",
    "Reduce flying - consider virtual meetings",
    "Buy local and seasonal produce",
    "Support carbon offset programs",
    "Use energy-efficient appliances",
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
            Carbon Footprint Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Estimate your environmental impact and discover actionable ways to reduce it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="transportation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="transportation" data-testid="tab-transportation">
                  Transportation
                </TabsTrigger>
                <TabsTrigger value="energy" data-testid="tab-energy">
                  Energy
                </TabsTrigger>
                <TabsTrigger value="diet" data-testid="tab-diet">
                  Diet
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transportation" className="space-y-4 mt-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="transport-mode" data-testid="label-transport-mode">
                        Transportation Mode
                      </Label>
                      <Select
                        value={transportation.mode}
                        onValueChange={(value) =>
                          setTransportation({ ...transportation, mode: value })
                        }
                      >
                        <SelectTrigger id="transport-mode" data-testid="select-transport-mode">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Personal Car</SelectItem>
                          <SelectItem value="bus">Bus</SelectItem>
                          <SelectItem value="bike">Bike/Walk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="distance" data-testid="label-distance">
                        Average Distance (km)
                      </Label>
                      <Input
                        id="distance"
                        type="number"
                        placeholder="e.g., 50"
                        value={transportation.distance}
                        onChange={(e) =>
                          setTransportation({
                            ...transportation,
                            distance: e.target.value,
                          })
                        }
                        data-testid="input-distance"
                      />
                    </div>

                    <div>
                      <Label htmlFor="frequency" data-testid="label-frequency">
                        Frequency
                      </Label>
                      <Select
                        value={transportation.frequency}
                        onValueChange={(value) =>
                          setTransportation({ ...transportation, frequency: value })
                        }
                      >
                        <SelectTrigger id="frequency" data-testid="select-frequency">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="energy" className="space-y-4 mt-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="electricity" data-testid="label-electricity">
                        Monthly Electricity (kWh)
                      </Label>
                      <Input
                        id="electricity"
                        type="number"
                        placeholder="e.g., 300"
                        value={energy.electricity}
                        onChange={(e) =>
                          setEnergy({ ...energy, electricity: e.target.value })
                        }
                        data-testid="input-electricity"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gas" data-testid="label-gas">
                        Monthly Gas Usage (therms)
                      </Label>
                      <Input
                        id="gas"
                        type="number"
                        placeholder="e.g., 40"
                        value={energy.gas}
                        onChange={(e) => setEnergy({ ...energy, gas: e.target.value })}
                        data-testid="input-gas"
                      />
                    </div>

                    <div>
                      <Label htmlFor="renewable" data-testid="label-renewable">
                        Renewable Energy (%)
                      </Label>
                      <Input
                        id="renewable"
                        type="number"
                        min="0"
                        max="100"
                        placeholder="0"
                        value={energy.renewable}
                        onChange={(e) =>
                          setEnergy({ ...energy, renewable: e.target.value })
                        }
                        data-testid="input-renewable"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="diet" className="space-y-4 mt-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="meat" data-testid="label-meat">
                        Meat Servings per Week
                      </Label>
                      <Input
                        id="meat"
                        type="number"
                        placeholder="e.g., 5"
                        value={diet.meatServings}
                        onChange={(e) =>
                          setDiet({ ...diet, meatServings: e.target.value })
                        }
                        data-testid="input-meat"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dairy" data-testid="label-dairy">
                        Dairy Servings per Week
                      </Label>
                      <Input
                        id="dairy"
                        type="number"
                        placeholder="e.g., 10"
                        value={diet.dairyServings}
                        onChange={(e) =>
                          setDiet({ ...diet, dairyServings: e.target.value })
                        }
                        data-testid="input-dairy"
                      />
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
                  data-testid="text-annual-emissions-label"
                >
                  Annual Emissions
                </h3>
              </div>
              <div className="text-3xl font-bold text-primary" data-testid="text-emissions-value">
                {emissions}
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-emissions-unit">
                kg CO₂e per year
              </p>
            </Card>

            <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-green-600" data-testid="icon-trending" />
                <h3
                  className="font-bold text-lg text-green-900 dark:text-green-100"
                  data-testid="text-reduction-label"
                >
                  Potential Reduction
                </h3>
              </div>
              <div
                className="text-2xl font-bold text-green-600 dark:text-green-400"
                data-testid="text-reduction-value"
              >
                {offset} kg
              </div>
              <p className="text-sm text-green-700 dark:text-green-300" data-testid="text-reduction-description">
                by implementing recommendations
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4" data-testid="text-tips-title">
                Reduction Tips
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
