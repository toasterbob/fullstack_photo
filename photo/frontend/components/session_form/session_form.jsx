import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">login instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	demoLogin(e) {
		e.preventDefault();
		const guest = {username: "guest", password: "password"}; //need to create in database
		this.props.guestUser();
	}

	render() {

		return (
			<div className="form-page">
				<div className="login-form-container">
					<div className="logo">
						<img src="http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_142/v1484119573/v8_c5rdfy.png" />
					</div>
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<br/>
						Welcome to Photo Journal!
						<br/>
						Please {this.props.formType} or {this.navLink()}
						<br/>
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/><br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/><br/>
							<input className="submit" type="submit" value="Submit" />
						</div>
					</form>
					<br />
					<button className="header-button" onClick={this.demoLogin}> Skip and Use Demo</button>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
