// Deps
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App/App';

// CSS
import 'normalize-scss';
import './styles/index.css';



// Root Element
export const Root = () => {

	return (
		<App />
	);

};

// Render DOM
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);