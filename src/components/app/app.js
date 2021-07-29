import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "./app.css";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../characterPage/characterPage";

export default class App extends Component {
	state = {
		showRandomChar: true,
		error: false,
	};

	componentDidCatch() {
		this.setState({ error: false });
	}

	toggleRandomChar = () => {
		this.setState((state) => {
			return {
				showRandomChar: !state.showRandomChar,
			};
		});
	};

	onCharSelected = (id) => {
		this.setState({ selectedChar: id });
	};

	render() {
		const char = this.state.showRandomChar ? <RandomChar /> : null;

		if (this.state.error) return <ErrorMessage />;

		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>
							{char}
							<button className="toggle-btn" onClick={this.toggleRandomChar}>
								Toggle random character
							</button>
						</Col>
					</Row>
					<CharacterPage />
				</Container>
			</>
		);
	}
}
