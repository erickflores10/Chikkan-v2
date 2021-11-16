import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import LayoutMain from './components/user/LayoutMain';
import Footer from './components/Footer';







ReactDOM.render(
  <React.StrictMode>
      <Header />
        <LayoutMain />
          <Footer />
  </React.StrictMode>, document.getElementById('root')
);
