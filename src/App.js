import React, { useState } from 'react';
import './assets/styles/App.css';
import styles from './styles';
import { Navbar, Home, Footer, ContactMe, Projects } from './components/links';

function App() {
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setBlobPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-defaultteal dark:bg-defaultsky ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-defaultteal dark:bg-defaultsky ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`gallery-container bg-defaultteal dark:bg-defaultsky ${styles.flexCenter} ${styles.paddingYY}`}
        onMouseMove={handleMouseMove}
      >
        <div id="blob" style={{ left: blobPosition.x, top: blobPosition.y }}></div>
        <div id="blur"></div>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>

      <div className={`bg-defaultteal dark:bg-defaultsky ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactMe />
        </div>
      </div>

      <div className={`bg-defaultsky ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export const MoveBlob = () => {
    const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      setBlobPosition({ x: clientX, y: clientY });
    };
  
    return (
      <div
        style={{ height: '100vh', background: '#f1f1f1' }}
        onMouseMove={handlePointerMove}
      >
        <div
          id="blob"
          className="blob-element"
          style={{
            left: `${blobPosition.x - 50}px`,
            top: `${blobPosition.y - 50}px`,
          }}
        />
      </div>
    );
}

export default App;
