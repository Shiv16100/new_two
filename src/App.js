import Navbar from './components/navbar/Navbar.jsx';
import './App.css';
import Topview from './components/TopView/Topview.jsx';
import HiringPartners from './components/hiringPartners/HiringPartners.jsx';
import ExploreThePrograms from './components/exploreThePrograms/ExploreThePrograms.jsx';
import WhyChooseCareerCorps from './components/whyChooseCareerCorps/WhyChooseCareerCorps.jsx';
import MAST from './components/mentorAndStudentTestimonials/MAST.jsx';
import Footer from './components/footer/Footer.jsx';


// internship_assingment
function App() {
  return (
  <>
    <Navbar/>
    <Topview/>
    <HiringPartners/>
    <ExploreThePrograms/>
    <WhyChooseCareerCorps/>
    <MAST/>
    <Footer/>
  </>
  );
}

export default App;
