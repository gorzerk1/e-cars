import React, { useState } from 'react';
import './faq.css';

function Faq() {
  const [openBox, setOpenBox] = useState(null);

  const handleClick = (boxNumber) => {
    if (openBox === boxNumber) {
      setOpenBox(null);
    } else {
      setOpenBox(boxNumber);
    }
  };

  return (
    <div className='faq--body'>
      <img src="../../nissan_sentra.png" alt="" />
      <div className='faq--title'>
        <div>FAQ</div>
        <div>Frequently Asked Questions</div>
        <div>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</div>
      </div>
      <div className='faq--container'>
        <div className='faq--smallBox'>
          <div onClick={() => handleClick(1)}>
            <div>1. What is special about comparing rental car deals?</div>
            <img src="../../arrow_down.png" alt="" />
          </div>
          <div style={{display: openBox === 1 ? "block" : "none"}}>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</div>
        </div>
        <div className='faq--smallBox'>
          <div onClick={() => handleClick(2)}>
            <div>2. How do I find the car rental deals?</div>
            <img src="../../arrow_down.png" alt="" />
          </div>
          <div style={{display: openBox === 2 ? "block" : "none"}}>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</div>
        </div>
        <div className='faq--smallBox'>
          <div onClick={() => handleClick(3)}>
            <div>3. How do I find such low rental car prices?</div>
            <img src="../../arrow_down.png" alt="" />
          </div>
          <div style={{display: openBox === 3 ? "block" : "none"}} >Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.</div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
