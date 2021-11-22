import React from 'react';

function GallaryProject({ projectName, projectImage }) {
  return (
    <div
      className={`bg-${projectImage}-mobile px-5 pt-10 pb-5 bg-cover lg:bg-${projectImage}-desktop lg:h-xxl lg:px-6 lg:relative`}
    >
      <h3
        className={`text-2xl font-josefin text-white uppercase ${
          projectName === 'The Grid' ? 'w-3/12' : 'w-7/12 lg:w-6/12'
        } lg:absolute bottom-5`}
      >
        {projectName}
      </h3>
    </div>
  );
}

export default GallaryProject;
