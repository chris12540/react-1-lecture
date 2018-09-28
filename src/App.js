import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "bOb",
			pic: "http://http.cat/404",
			friends: [{ name: "Kian", pic: "http://http.cat/200" }]
		};

		// this.updateName = this.updateName.bind(this);
	}

	addFriend = () => {
		const newFriend = { name: this.state.name, pic: this.state.pic };
		const friendsCopy = this.state.friends.slice();
		// do not mutate state directly!
		friendsCopy.push(newFriend);
		this.setState({ name: "", pic: "", friends: friendsCopy });
	};

	// updateName = event => {
	// 	this.setState({
	// 		name: event.target.value
	// 	});
	// };

	// updatePic = event => {
	// 	this.setState({
	// 		pic: event.target.value
	// 	});
	// };

	render() {
		const { name, pic, friends } = this.state;

		return (
			<div>
				<div>
					Name:{" "}
					<input
						type="text"
						value={name}
						onChange={e => this.setState({ name: e.target.value })}
					/>
					{name}
				</div>
				<div>
					Picture URL:{" "}
					<input
						type="text"
						value={pic}
						onChange={e => this.setState({ pic: e.target.value })}
					/>
					{pic}
				</div>
				<button onClick={this.addFriend}>Add Friend</button>
				<div>
					Friends: <br />
					{friends.map(friend => {
						return (
							<div>
								Name: {friend.name} Picture:{" "}
								<img src={friend.pic} alt="Cats :P" height="200px" />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
