// import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import CTASlider from "@/components/CTASlider";
import FAQAcordeon from "@/components/FAQAcordeon";
import HowWorks from "@/components/HowWorks";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import PricingSection from "@/components/PricingSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="max-w-300 mx-auto flex flex-col gap-40 ">
        <Hero />
        <CTASlider />
        <Services />
        <HowWorks />
        <Benefits />
        <PricingSection />
        <FAQAcordeon />
      </main>
      <Footer />
    </>
  );
}
