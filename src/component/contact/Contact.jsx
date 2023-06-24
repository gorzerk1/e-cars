import './contact.css';

function Contact() {

  return (
    <div className='contact--body'>
      <div className='contact-wrapper'>
        <img src="../../black_car.png" alt="" />
      </div>
      <div className='contact--container'>
        <div>Book a car by getting in touch with us</div>
        <div className='contact--box'>
          <img src="../../phone_icon.png" alt="" />
          <div>(123) 456-7869</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
