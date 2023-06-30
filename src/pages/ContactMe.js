import React from 'react'
import ContactForm from '../components/ContactForm';

const ContactMe = () => {
  return (
    <section id="contactMe" className={`flex flex-col justify-center`}>
      <div className="title z-[4]">
        <h1
          className="font-libre text-defaultamber
      font-bold text-center sm:text-[90px] text-[50px]"
        >
          Contact Me
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe