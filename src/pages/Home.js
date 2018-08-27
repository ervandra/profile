import React, { Component } from 'react';

import Wrapper from '../components/global/Wrapper';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import About from '../components/utility/About';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: true,
		};
	}
	
	render() {
		return (
			<Wrapper>
				<Header />
				<section id="content" className="internal">
				<div className="hero">
					<h1>About Me</h1>
				</div>
				<div id="maincontent">
					<About />	
				</div>
				</section>
				<Footer />
			</Wrapper>
		);
	}
}

export default Home;
