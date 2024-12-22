import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import Home from "../../components/education/Home";
import WhatWeOffer from "../../components/education/WhatWeOffer";
import WhyChooseUs from "../../components/education/WhyChooseUs";
import CaptureSchool from "../../components/education/CaptureSchool";
import Competitions from "../../components/education/Competitions";
import TurningDreams from "../../components/education/TurningDreams";
import WhyItMatters from "../../components/education/WhyItMatters";
import ContactUs from "../../components/education/ContactUs";
import { Helmet } from "react-helmet";

const EducationPage = () => {
  return (
    <div className="education-page bg-gray-100 text-white">
      <Helmet>
        <title>ERA AXIS Education</title>
      </Helmet>
      <Header />
      <Home />
      <WhatWeOffer />
      <WhyChooseUs />
      <CaptureSchool />
      <Competitions />
      <TurningDreams />
      <WhyItMatters />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default EducationPage;
