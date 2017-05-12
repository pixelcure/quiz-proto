// Deps
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Introduction from './Introduction/Introduction';



// Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Introduction />, div);
});
