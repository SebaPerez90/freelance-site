// import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import CTASlider from "@/components/CTASlider";
import FAQAcordeon from "@/components/FAQAcordeon";
import HowWorks from "@/components/HowWorks";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="max-w-300 mx-auto flex flex-col gap-40">
        <Hero />
        <Services />
        <CTASlider />
        <HowWorks />
        <Benefits />
        <FAQAcordeon />
      </main>
      <Footer />
    </>
  );
}
