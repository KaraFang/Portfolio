import React from 'react';
import { FaCodepen } from 'react-icons/fa';

const GalleryScreens = () => {
  return (
    <section
      id="gallery-screens"
    >
      <div className="screen w-[250px] z-[4] hover:scale-110">
        <div className="screen-image"></div>
        <div className="screen-overlay"></div>
        <div className="screen-content">
          <FaCodepen className="screen-icon"/>
          <div className="screen-user">
            <span className="name" data-value="FITCOACH">
              FITCOACH
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