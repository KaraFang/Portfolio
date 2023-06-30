import React, { useState } from 'react';
import styles from '../styles';
import Kara from '../assets/images/Kara Fang.png';

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row justify-center flex-col gap-8 ${styles.paddingY}`}>
      <div className={`flex ${styles.flexStart} flex-col lg:px-16 sm:px-10 px-6`}>

        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-none font-libre text-defaultamber font-semibold text-justify
          lg:text-[70px] text-[50px]
          lg:leading-[100px] sm:leading-[70px] leading-[60px]">
            KARA FANG<br/>WEB DEVELOPER
          </h1>
        </div>

        <p className={`${styles.paragraph} dark:text-defaultteal text-justify max-w-[470px] mt-5`}>
          <Hype initialText="Hi I'm Kara."/>
          <Hype initialText="Welcome to my playground."/>
          <Hype initialText="Hover over the website,"/>
          <Hype initialText="and see What you can find?"/>
        </p>
      </div>
      
      <div className={`flex ${styles.flexCenter} flex-col xl:px-16 sm:px-10 px-6`}>
        <img className="object-contain lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-48 h-48" src={Kara} alt="Kara" />
      </div>

    </section>
  );
};

const Hype = ({ initialText }) => {
    const [text, setText] = useState(initialText);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  
    const handleMouseOver = (event) => {
      let iterations = 0;
      const originalText = event.target.dataset.value;
  
      const interval = setInterval(() => {
        if (iterations >= originalText.length) {
          clearInterval(interval);
        }
  
        setText((prevText) => {
          let updatedText = "";
          for (let i = 0; i < originalText.length; i++) {
            if (i < iterations) {
              updatedText += originalText[i];
            } else {
              updatedText += letters[Math.floor(Math.random() * 26)];
            }
          }
          return updatedText;
        });
  
        iterations += 1 / 3;
      }, 30);
    };
  
    return (
      <h1 onMouseOver={handleMouseOver} data-value={initialText}>
        {text}
      </h1>
    );
};

export default Home