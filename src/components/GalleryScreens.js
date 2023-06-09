import React from 'react';
import styles from '../styles';
import { FaCodepen } from 'react-icons/fa';

const GalleryScreens = () => {
  return (
    <section
      id="gallery-screens"
      className={`flex md:flex-row justify-center flex-col gap-8 ${styles.paddingY}`}
    >
      <div className="screen">
        <div className="screen-image"></div>
        <div className="screen-overlay"></div>
        <div className="screen-content">
          <FaCodepen className="screen-icon"/>
          <div className="screen-user">
            <span className="name" data-value="FITCOACH">
              FITCOACD
            </span>
            <a
              className="link"
              href="https://youtube.com/@Hyperplexed"
              rel="opener"
            >
              @Hyperplexed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryScreens;