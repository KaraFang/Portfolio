import React from 'react';
import { FaRegLightbulb, FaLink, FaGithub } from 'react-icons/fa';

const Screen = ({ name, bgimg, website, github }) => {
  return (
    <section id="gallery-screens">
      <div className="screen w-[280px] z-[4] hover:scale-110">
        <div
          className="screen-image bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="screen-overlay"></div>
        <div className="screen-content">
          <FaRegLightbulb className="screen-icon" />
          <div className="screen-user">
            <span className="name" data-value="name">
              {name}
            </span>
            <div className="link flex gap-8">
              {website ? (
                <a href={website} rel="opener">
                  <FaLink className="screen-icon" />
                </a>
              ) : null}
              {github ? (
                <a href={github} rel="opener">
                  <FaGithub className="screen-icon" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screen;