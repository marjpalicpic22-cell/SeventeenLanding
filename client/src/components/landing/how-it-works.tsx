import { Card, CardContent } from "@/components/ui/card";
import { Download, UserPlus, Package, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import screenshot1 from "@assets/app_screenshots/screenshot1.png";
import screenshot2 from "@assets/app_screenshots/screenshot2.png";
import screenshot3 from "@assets/app_screenshots/screenshot3.png";
import screenshot4 from "@assets/app_screenshots/screenshot4.png";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the App",
    description: "Get started in seconds. Download Zero to Seventeen from the App Store or Google Play and join our community of caring parents.",
    testId: "step-download-app"
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Set up your profile and become part of a warm, welcoming community. Connect with other mums and parents who understand your journey.",
    testId: "step-create-profile"
  },
  {
    number: "03",
    icon: Package,
    title: "List Your Items",
    description: "Share the items your little ones have outgrown. Upload photos, add details, and give quality items a second life with families who need them.",
    testId: "step-list-items"
  },
  {
    number: "04",
    icon: Users,
    title: "Connect with Parents",
    description: "Chat with other mums and parents, share experiences, exchange advice, and build genuine connections with people who truly understand.",
    testId: "step-connect-parents"
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Safe In-App Transactions",
    description: "Every conversation and transaction happens securely inside the app. Buy and sell with confidence knowing you're protected every step of the way.",
    testId: "step-safe-transactions"
  }
];

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-heading mb-4"
            data-testid="how-it-works-headline"
          >
            How It Works
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="how-it-works-description"
          >
            Five simple steps to join a community that supports you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={step.testId}>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <Card className="hover-elevate transition-all duration-300 h-full border-card-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <span
                        className="text-4xl font-bold text-primary/20"
                        data-testid={`${step.testId}-number`}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center"
                        data-testid={`${step.testId}-icon`}
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3
                      className="text-lg font-semibold text-foreground"
                      data-testid={`${step.testId}-title`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      data-testid={`${step.testId}-description`}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border overflow-hidden">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 font-heading">
            See the App in Action
          </h3>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...screenshots, ...screenshots].map((screenshot, index) => (
                <motion.div 
                  key={index} 
                  className="flex-shrink-0 w-48 md:w-56 lg:w-64 overflow-hidden rounded-xl shadow-md"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={screenshot}
                    alt={`Zero to Seventeen app screenshot ${(index % 4) + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
