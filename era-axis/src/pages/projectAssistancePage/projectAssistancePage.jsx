import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import Overview from "../../components/project-assistance/Overview";
import HowWeCanHelp from "../../components/project-assistance/HowWeCanHelp";
import ProjectTypes from "../../components/project-assistance/ProjectTypes";
import HowItWorks from "../../components/project-assistance/HowItWorks";
import Gallery from "../../components/project-assistance/Gallery";
import GetStarted from "../../components/project-assistance/GetStarted";
import { Helmet } from "react-helmet";

const ProjectAssistance = () => {
  return (
    <div className="bg-grey text-white">
      <Helmet>
        <title>Project Assistance</title>
      </Helmet>
      <Header />
      <main>
        <Overview />
        <HowWeCanHelp />
        <ProjectTypes />
        <HowItWorks />
        <Gallery />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectAssistance;
