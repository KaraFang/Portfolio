import styles from '../styles';
import logo from '../assets/images/logo.png';
import { socialMedia } from './index';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col gap-6`}>
    <div className="w-full flex justify-center items-center md:flex-row">
      {socialMedia.map((social, index) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${
            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
          }`}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>

    <div>
      <p className="font-mono text-center text-[18px] leading-[27px] text-defaultteal">
        © Copyright 2023 KaraFang. | All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer