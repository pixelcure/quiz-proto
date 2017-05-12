// Deps
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Footer from './Footer/Footer';



// Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});
