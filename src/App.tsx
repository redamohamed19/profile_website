import React from 'react';

import './App.css';
import Header from './component/header';
import Main from './component/main';
import About from './component/about';
import Work from './component/work';
import Contact from './component/contact';

function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
