import Navbar from '../component/navbar/Navbar.jsx'
import SitePath from '../component/sitePath/SitePath.jsx'
import AboutCompany from '../component/aboutCompany/AboutCompany.jsx'
import Information from '../component/information/Information.jsx'
import Contact from '../component/contact/Contact.jsx'
import Footer from '../component/footer/Footer.jsx'

function AboutPath() {
  return (
    <>
      <Navbar/>
      <SitePath/>
      <AboutCompany/>
      <Information/>
      <Contact/>
      <Footer/>
    </>
  );
}


export default AboutPath;
