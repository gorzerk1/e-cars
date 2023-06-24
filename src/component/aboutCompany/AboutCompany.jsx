import './aboutCompany.css';

function AboutCompany() {
  return (
    <div className='aboutCompany--body'>
      <img src="../../sale_car.jpg"  />
      <div className='aboutCompany--container'>
        <div className='aboutCompany--box'>
        <div>About Company</div>
        <div>
          Since our inception, journeying has been more than a business at Accelerate Auto Rentals — it's our passion. We are not simply a company that lends out vehicles; we are the conduit through which individuals, families, and professionals ignite their dreams of travel, exploration, and discovery.
        </div>
        <div className='aboutCompany--bottomBox'>
            <div className='aboutCompany--Boxes'>
              <img src="../../car_icon2.png" alt="" />
              <div>
                <div>20+</div>
                <div>Product amount</div>
              </div>
            </div>
            <div className='aboutCompany--Boxes'>
              <img src="../../car_icon3.png" alt="" />
              <div>
                <div>15+</div>
                <div>Rental outlets</div>
              </div>
            </div>
            <div className='aboutCompany--Boxes'>
              <img src="../../car_icon4.png" alt="" />
              <div>
                <div>10+</div>
                <div>Repair shop</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
