import React, { useState } from 'react';

import HeadWrapper from './components/Header/HeadWrapper';
import Gallary from './components/Main/Gallary';
import Interactive from './components/Main/Interactive';
import Footer from './components/Footer/Footer';

function App() {
  const [navIsClosed, setNavIsOpen] = useState(true);
  return (
    <>
      <HeadWrapper toggleElements={setNavIsOpen} />

      {navIsClosed && (
        <main>
          <Interactive />
          <Gallary />
        </main>
      )}

      {navIsClosed && <Footer />}
    </>
  );
}

export default App;
