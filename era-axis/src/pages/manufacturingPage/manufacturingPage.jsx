import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import HeroSection from "../../components/Manufacturing Page/HeroSection";
import SolutionsSection from "../../components/Manufacturing Page/SolutionsSection";
import CaseStudySection from "../../components/Manufacturing Page/CaseStudySection";
import CTASection from "../../components/Manufacturing Page/CTASection";
import ContactSection from "../../components/Manufacturing Page/ContactSection";
import BenefitsSection from "../../components/Manufacturing Page/BenefitsSection";
import WhyChooseUsSection from "../../components/Manufacturing Page/WhyChooseUsSection";

const ManufacturingPage = () => {
  return (
    <div className="manufacturing-page">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <BenefitsSection />
        <CaseStudySection />
        <WhyChooseUsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ManufacturingPage;
