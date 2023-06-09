import React, { useState } from 'react';
import styles from '../styles';
import GalleryScreens from './GalleryScreens';
import '../assets/styles/Gallery.css';

const Gallery = () => {
//   const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     setBlobPosition({ x: clientX, y: clientY });
//   };

  return (
    <section id="gallery"
      className={`flex-1 md:flex-row justify-center flex-col gap-8 ${styles.paddingY}`}
    >
      <div
        className={`flex ${styles.flexCenter} flex-col xl:px-16 sm:px-10 px-6`}
      >
        <GalleryScreens />
      </div>
      {/* <div id="blob" style={{ left: blobPosition.x, top: blobPosition.y }}></div> */}
      {/* <div id="blur"></div> */}
    </section>
  );
};

// export const BlobMoveComponent = () => {
//   const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

//   const handlePointerMove = (event) => {
//     const { clientX, clientY } = event;
//     setBlobPosition({ x: clientX, y: clientY });
//   };

//   return (
//     <div
//       style={{ height: '100vh', background: '#f1f1f1' }}
//       onMouseMove={handlePointerMove}
//     >
//       <div
//         id="blob"
//         className="blob-element"
//         style={{
//           left: `${blobPosition.x - 50}px`,
//           top: `${blobPosition.y - 50}px`,
//         }}
//       />
//     </div>
//   );
// };

export default Gallery;
