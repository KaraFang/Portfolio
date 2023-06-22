import React from 'react';
import { FaCodepen } from 'react-icons/fa';

const Screen = ({ name, link }) => {
  return (
    <section
      id="gallery-screens"
    >
      <div className="screen w-[280px] z-[4] hover:scale-110"
      >
        <div className="screen-image"></div>
        <div className="screen-overlay"></div>
        <div className="screen-content">
          <FaCodepen className="screen-icon"/>
          <div className="screen-user">
            <span className="name" data-value='name'>
              {name}
            </span>
            <a
              className="link"
              href={link}
              rel="opener"
            >
              @Hyperplexed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screen;