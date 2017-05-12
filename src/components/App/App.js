// Deps
import React, { Component } from 'react';

// Components
import Question from '../Question/Question';
import Introduction from '../Introduction/Introduction';
import Footer from '../Footer/Footer';

// CSS
import './App.css';



// <App /> Component
class App extends Component {

	constructor(){
		super();

		this.handleChange = this.handleChange.bind(this);

	};

	handleChange(e, ref) {

		e.preventDefault();

		console.log(ref);

	};

	render() {
		return (
			<div className="app">
				<Introduction />
				<form>
					<Question 
						handleChange={this.handleChange}
					/>
				</form>
				<Footer />
			</div>
		);
	};
};

export default App;