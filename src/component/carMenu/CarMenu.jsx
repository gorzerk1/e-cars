import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './carMenu.css';

const carData = [
  {
    image: "../../ToyotaRAV4.png",
    name: "Toyota Rav 4",
    year: 2021,
    engineType: "Diesel",
    model: "XLE Premium",
    transmission: "Manual",
    price: 30,
    duration: 0
  },
  {
    image: "../../ToyotaYaris.png",
    name: "Toyota Yaris",
    year: 2021,
    engineType: "Petrol",
    model: "L",
    transmission: "Automatic",
    price: 10,
    duration: 250
  },
  {
    image: "../../teslaModle3.png",
    name: "Tesla",
    year: 2022,
    engineType: "EV",
    model: "Model 3",
    transmission: "Automatic",
    duration: 500
  },
  {
    image: "../../nissan_sentra.png",
    name: "Nissan Sentra",
    year: 2021,
    engineType: "Petrol",
    model: "SV",
    transmission: "Manual",
    duration: 750
  },
  {
    image: "../../M2_BMW.png",
    name: "BMW",
    year: 2023,
    engineType: "Petrol",
    model: "M2",
    transmission: "Automatic",
    duration: 1000
  },
  {
    image: "../../M6_BMW.png",
    name: "BMW",
    year: 2023,
    engineType: "Petrol",
    model: "M6",
    transmission: "Manual",
    price: 40,
  },
  {
    image: "../../ssangyong-rexton.png",
    name: "Ssangyong Rexton",
    year: 2023,
    engineType: "Diesel",
    model: "G4",
    transmission: "Automatic",
    price: 40,
  },
  {
    image: "../../mazda6.png",
    name: "Mazda 6",
    year: 2021,
    engineType: "Petrol",
    model: "Sport",
    transmission: "Automatic",
    price: 35,
  },
  {
    image: "../../ToyotaRAV4.png",
    name: "Honda Civic",
    year: 2022,
    engineType: "Petrol",
    model: "R",
    transmission: "Manual",
    price: 15,
  },
  {
    image: "../../Mercedes-Benz.png",
    name: "Mercedes-Benz",
    year: 2017,
    engineType: "Petrol",
    model: "Coupe",
    transmission: "Automatic",
    price: 20,
  },
];
function CarItem({ item, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring(inView ? {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.molasses,
  } : {});

  return (
    <animated.div 
      className={`carMenu--box ${index % 2 === 0 ? 'even' : 'odd'}`}
      style={props}
      ref={ref}
    >
      <div className='carMenu--image'><img src={item.image} alt="" /></div>
      <div className='carMenu--div'>
        <div>{item.name}</div>
        <div>Year: {item.year}</div>
        <div>Engine Type: {item.engineType}</div>
        <div>Model: {item.model}</div>
        <div>Transmission: {item.transmission}</div>
        <div>${item.price} per day</div>
      </div>
    </animated.div>
  );
}

function CarMenu() {
  return (
    <div className='carMenu--body'>
      <div className='carMenu--container'>
        {carData.map((item, index) => (
          <CarItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CarMenu;