import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import ParentToolkit from "@/pages/parent-toolkit";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";
import FAQ from "@/pages/faq";
import DeclutterKidsItems from "@/pages/insights/declutter-kids-items";
import SecondhandKidsMarketplaceMelbourne from "@/pages/insights/secondhand-kids-marketplace-melbourne";
import SaveMoneyKidsStuff from "@/pages/insights/save-money-kids-stuff";
import Zero2SeventeenVsFacebookMarketplace from "@/pages/insights/zero-2-seventeen-vs-facebook-marketplace";
import BestAppsSellingBabyItemsAustralia from "@/pages/insights/best-apps-selling-baby-items-australia";
import WhereToBuySecondHandBabyClothes from "@/pages/insights/where-to-buy-second-hand-baby-clothes-melbourne";
import InsightsTag from "@/pages/insights/tag";
import Products from "@/pages/products";
import ProductCategory from "@/pages/product-category";
import NotFound from "@/pages/not-found";

function RedirectTo({ to }: { to: string }) {
  const [, navigate] = useLocation();
  useEffect(() => {
    navigate(to, { replace: true });
  }, []);
  return null;
}

function InsightsSlugRedirect() {
  const [location, navigate] = useLocation();
  useEffect(() => {
    const slug = location.replace("/insights/", "").replace(/^tag\//, "tag/");
    if (slug.startsWith("tag/")) {
      navigate(`/blog/tag/${slug.replace("tag/", "")}`, { replace: true });
    } else {
      navigate(`/blog/${slug}`, { replace: true });
    }
  }, []);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Blog (was Insights + Community) */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/declutter-kids-items" component={DeclutterKidsItems} />
      <Route path="/blog/secondhand-kids-marketplace-melbourne" component={SecondhandKidsMarketplaceMelbourne} />
      <Route path="/blog/save-money-kids-stuff" component={SaveMoneyKidsStuff} />
      <Route path="/blog/zero-2-seventeen-vs-facebook-marketplace" component={Zero2SeventeenVsFacebookMarketplace} />
      <Route path="/blog/best-apps-selling-baby-items-australia" component={BestAppsSellingBabyItemsAustralia} />
      <Route path="/blog/where-to-buy-second-hand-baby-clothes-melbourne" component={WhereToBuySecondHandBabyClothes} />
      <Route path="/blog/tag/:tagName" component={InsightsTag} />

      {/* Products Catalogue */}
      <Route path="/products" component={Products} />
      <Route path="/products/:categoryId" component={ProductCategory} />

      {/* Parent Toolkit (was Free Resources + Calculator) */}
      <Route path="/parent-toolkit" component={ParentToolkit} />

      {/* Legal & Help */}
      <Route path="/faq" component={FAQ} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />

      {/* Redirects — old URLs */}
      <Route path="/insights">
        <RedirectTo to="/blog" />
      </Route>
      <Route path="/insights/:slug">
        <InsightsSlugRedirect />
      </Route>
      <Route path="/community">
        <RedirectTo to="/blog" />
      </Route>
      <Route path="/free-resources">
        <RedirectTo to="/parent-toolkit" />
      </Route>
      <Route path="/calculator">
        <RedirectTo to="/parent-toolkit#my-green-impact" />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
