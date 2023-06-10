import React from 'react';
import styles from '../styles';
import GalleryScreens from './GalleryScreens';
import '../assets/styles/Gallery.css';

const Gallery = () => {

  return (
    <section id="gallery"
      className={`flex flex-col justify-center`}
    >
      <div className='title z-[4]'>
        <h1 className="font-libre text-defaultamber py-16
        font-bold text-center sm:text-[90px] text-[40px]"
          >
            Projects Gallery
        </h1>
      </div>

      <div
        className={`flex flex-wrap justify-center items-center py-16 gap-8`}
      >
        <GalleryScreens />
        <GalleryScreens />
        <GalleryScreens />
      </div>
    </section>
  );
};

export default Gallery;
