import React from 'react';

import MobileHeroImage from './images/mobile/image-interactive.jpg';

function App() {
  return (
    <div>
      <img src={MobileHeroImage} alt="" />
      <div>
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default App;
