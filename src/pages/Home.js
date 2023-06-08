import React, { useState, useEffect  } from 'react';
import styles from '../styles';

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient
        rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px]
          text-white ss:leading-[100.8px] leading-[75px]">
            <Hype initialText="Custom Text"/><br className="sm:block hidden" />{" "}
            <span className="text-gradient">GENERATION</span>{" "}
          </h1>
        </div>

        <h1 data-value="HYPERPLEXED" className="font-semibold ss:text-[68px] text-[52px] text-white
        ss:leading-[100.8px] leading-[75px] w-full">
          HYPERTEXT
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

    </section>
  );
};

const Hype = ({ initialText }) => {
    const [text, setText] = useState(initialText);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
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