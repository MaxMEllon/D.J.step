import '../assets/style';
import React from 'react';
import ReactDOM from 'react-dom';
import DJBoard from './components/DJBoard';
import debug from './utils/debug';

window.onload = function onLoadWindow() {
  ReactDOM.render(<DJBoard />, document.getElementById('main'));
  if (module.hot) {
    module.hot.accept(err => {
      if (err) debug(err, 'white', 'red');
    });
  }
};

// vim: ft=javascript.jsx

