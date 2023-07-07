import Navbar from '../component/navbar/Navbar.jsx'
import Main from '../component/main/Main.jsx'
import Book from '../component/book/Book.jsx'
import Information from '../component/information/Information.jsx'
import ModelData from '../component/modelData/ModelData.jsx'
import Ads from '../component/ads/Ads.jsx'
import AboutUs from '../component/aboutUs/AboutUs.jsx'
import Review from '../component/review/Review.jsx'
import Faq from '../component/faq/Faq.jsx'
import InstallApp from '../component/installApp/InstallApp.jsx'
import Footer from '../component/footer/Footer.jsx'
import { useRef } from 'react';

function FullSite() {
  const bookRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <>
      <Navbar/>
      <Main bookRef={bookRef} faqRef={faqRef}/>
      <div ref={bookRef}><Book/></div>
      <Information/>
      <ModelData/>
      <Ads/>
      <AboutUs/>
      <Review/>
      <div ref={faqRef}><Faq/></div>
      <InstallApp/>
      <Footer/>
    </>
  );
}

export default FullSite;
