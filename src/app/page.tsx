import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ShopByGoal } from "@/components/home/ShopByGoal";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StatsBand } from "@/components/home/StatsBand";
import { BrandStory } from "@/components/home/BrandStory";
import { ProductSpotlight } from "@/components/home/ProductSpotlight";
import { Collection } from "@/components/home/Collection";
import { WhyTotalCore } from "@/components/home/WhyTotalCore";
import { IngredientExplorer } from "@/components/home/IngredientExplorer";
import { Reviews } from "@/components/home/Reviews";
import { BundleBuilder } from "@/components/home/BundleBuilder";
import { Subscription } from "@/components/home/Subscription";
import { CoreJournal } from "@/components/home/CoreJournal";
import { EmailCapture } from "@/components/home/EmailCapture";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ShopByGoal />
      <FeaturedProducts />
      <StatsBand />
      <BrandStory />
      <ProductSpotlight />
      <Collection />
      <WhyTotalCore />
      <SectionDivider />
      <IngredientExplorer />
      <Reviews />
      <BundleBuilder />
      <Subscription />
      <SectionDivider />
      <CoreJournal />
      <EmailCapture />
    </>
  );
}
