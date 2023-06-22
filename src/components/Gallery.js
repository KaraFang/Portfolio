import React from 'react';
import styles from '../styles';
import '../assets/styles/Gallery.css';
import ScreenList from './ScreenList';

const Gallery = () => {

  return (
    <section id="gallery"
      className={`flex flex-col justify-center`}
    >
      <div className='title z-[4]'>
        <h1 className="font-libre text-defaultamber
        font-bold text-center sm:text-[90px] text-[40px]"
          >
            Projects Gallery
        </h1>
      </div>

      <div
        className="flex justify-center items-center py-16 mx-10"
      >
        <ScreenList />
      </div>
    </section>
  );
};

export default Gallery;
