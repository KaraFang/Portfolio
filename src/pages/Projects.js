import React from 'react';
import '../assets/styles/Projects.css';
import ScreenList from '../components/ScreenList';

const Projects = () => {

  return (
    <section id="projects"
      className={`flex flex-col justify-center`}
    >
      <div className='title z-[4]'>
        <h1 className="font-libre text-defaultamber
        font-bold text-center sm:text-[90px] text-[50px]"
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

export default Projects;
