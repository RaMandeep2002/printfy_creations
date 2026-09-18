import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CustomModel } from "@/components/custom-model";
import {
  ShopSection,
  HowItWorks,
  Collections,
  WhyUs,
  SocialProof,
  Footer,
} from "@/components/home-sections";
import { CartDrawer } from "@/components/cart-drawer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShopSection />
        <CustomModel />
        <HowItWorks />
        <Collections />
        <WhyUs />
        <SocialProof />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
