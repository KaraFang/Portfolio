import styles from '../styles';
import logo from '../assets/images/logo.png';
import { socialMedia } from './links';

const Footer = () => (
  <section className={`${styles.flexCenter} sm:py-10 py-6 flex-col gap-6`}>
    <div className="w-full flex justify-center items-center sm:flex-row">
      {socialMedia.map((social, index) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[26px] h-[26px] object-contain cursor-pointer hover:scale-125 ${
            index !== socialMedia.length - 1 ? "mr-10" : "mr-0"
          }`}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>

    <div>
      <p className="text-center text-[18px] leading-[27px] text-defaultteal">
        © Copyright 2023 KaraFang. | All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer