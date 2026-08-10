import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ShopByGoal } from "@/components/home/ShopByGoal";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { ProductSpotlight } from "@/components/home/ProductSpotlight";
import { WhyTotalCore } from "@/components/home/WhyTotalCore";
import { IngredientExplorer } from "@/components/home/IngredientExplorer";
import { Reviews } from "@/components/home/Reviews";
import { BundleBuilder } from "@/components/home/BundleBuilder";
import { Subscription } from "@/components/home/Subscription";
import { CoreJournal } from "@/components/home/CoreJournal";
import { EmailCapture } from "@/components/home/EmailCapture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ShopByGoal />
      <FeaturedProducts />
      <BrandStory />
      <ProductSpotlight />
      <WhyTotalCore />
      <IngredientExplorer />
      <Reviews />
      <BundleBuilder />
      <Subscription />
      <CoreJournal />
      <EmailCapture />
    </>
  );
}
