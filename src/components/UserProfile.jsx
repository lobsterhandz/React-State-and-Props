import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Alex" };

    // Bind the method to the component
    this.changeName = this.changeName.bind(this);
  }

  // Corrected function using setState
  changeName() {
    this.setState({ name: "Charlie" });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default UserProfile;
