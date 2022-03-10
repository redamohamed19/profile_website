import React from 'react';

import Header from './component/header';
import Main from './component/main';
import About from './component/about';
import Work from './component/work';
import Contact from './component/contact';
import Footer from './component/footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
