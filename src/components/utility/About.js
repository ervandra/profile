import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			about: null,
		};
	}
	componentDidMount() {
		axios.get(`https://www.ervandra.com/wp-json/wp/v2/pages?slug=about&_embed`).then(res => {
			const about = res.data;
			this.setState({ about });
		});
	}
	render() {
		return (
			<div id="about">
				<div className="grid-container">
					<div className="grid-x grid-margin-x">
						<div className="cell">
							
								{ this.state.about ? 
									<div id="container-isotope" className="js-isotope">
									{ this.state.about.map((about, index) => (
										<div className="section" dangerouslySetInnerHTML={ {__html: about.content.rendered }}></div>
									))}
									</div>
								:
									<div className="text-center portfolio-loading"><h3><span className="fa fa-spin fa-circle-o-notch"></span></h3></div>
								}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
