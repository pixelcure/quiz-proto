// Deps
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Question from './Question/Question';



// Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
});
