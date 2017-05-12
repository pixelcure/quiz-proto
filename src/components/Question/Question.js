// Deps
import React, { Component } from 'react';

// Components
// import App from './components/App/App';

// CSS
import './Question.css';



// <Question /> Component
class Question extends Component {

	constructor(){
		super();

		this.state = {
			quiz : true
		};

	};

	render() {

		let labelStyle = {
			paddingLeft : '15px'
		};

		return (
			<div className="question">
				<p>What year were you born?</p>
				<ul className="choices">
					<li>
						<fieldset>
							<label htmlFor="question1">
								What is your dream car?
							</label>
							<div className="answer">
								<input type="radio" id="answer1" value="Ferrari" name="question1" />
								<label style={labelStyle} htmlFor="answer1">Ferrari</label>
							</div>
							<div className="answer">
								<input type="radio" id="answer2" value="Mazda" name="question1" />
								<label style={labelStyle} htmlFor="answer2">Mazda</label>
							</div>
							<div className="answer">
								<input type="radio" id="answer3" value="Toyota" name="question1" />
								<label style={labelStyle} htmlFor="answer3">Toyota</label>
							</div>
							<div className="answer">
								<input type="radio" id="answer4" value="Corvette" name="question1" />
								<label style={labelStyle} htmlFor="answer4">Corvette</label>
							</div>
						</fieldset>
					</li>
				</ul>
			</div>
		);
	};
};

export default Question;