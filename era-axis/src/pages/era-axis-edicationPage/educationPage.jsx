import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import Home from "../../components/education/Home";
import WhatWeOffer from "../../components/education/WhatWeOffer";
import WhyChooseUs from "../../components/education/WhyChooseUs";
import CaptureSchool from "../../components/education/CaptureSchool";
import Competitions from "../../components/education/Competitions";
import TurningDreams from "../../components/education/TurningDreams";
import WhyItMatters from "../../components/education/WhyItMatters";
// import ProceedToPayment from "../../components/education/ProceedToPayment";
import ContactUs from "../../components/education/ContactUs";
// import Gallery from "../../components/education/Gallery";

const EducationPage = () => {
  return (
    <div className="education-page bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <WhatWeOffer />
        <WhyChooseUs />
        <CaptureSchool />
        <Competitions />
        <TurningDreams />
        <WhyItMatters />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;
