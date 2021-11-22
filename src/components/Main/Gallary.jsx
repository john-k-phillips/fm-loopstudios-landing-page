import React from 'react';
import GallaryProject from './GallaryProject';

function Gallary() {
  const projectList = [
    { projectName: 'Deep Earth', projectImage: 'deep-earth' },
    { projectName: 'Night Arcade', projectImage: 'night-arcade' },
    { projectName: 'Soccer Team VR', projectImage: 'soccer-team' },
    { projectName: 'The Grid', projectImage: 'grid', breakText: true },
    { projectName: 'From Up Above VR', projectImage: 'from-above' },
    { projectName: 'Pocket Borealis', projectImage: 'pocket-borealis' },
    { projectName: 'The Curiosity', projectImage: 'curiosity' },
    { projectName: 'Make it Fisheye', projectImage: 'fisheye' },
  ];
  const projectCards = projectList.map(({ projectName, projectImage }) => (
    <GallaryProject
      key={projectImage}
      projectName={projectName}
      projectImage={projectImage}
      breakText
    />
  ));
  return (
    <div className="w-10/12 max-w-6xl m-auto my-20 grid gap-5 lg:grid-cols-4 lg:my-40">
      <h2 className="uppercase font-bold font-josefin text-2xl text-center lg:text-4xl lg:col-span-2 lg:text-left lg:mb-14">
        Our Creations
      </h2>
      {projectCards}
      <button className="border-2 uppercase font-josefin font-bold tracking-widest border-black w-6/12 py-3 justify-self-center px-8 lg:row-start-1 lg:col-span-2 lg:col-end-5 lg:justify-self-end lg:mb-14">
        See All
      </button>
    </div>
  );
}

export default Gallary;
