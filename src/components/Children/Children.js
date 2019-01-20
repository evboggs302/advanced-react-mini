import React, { Component } from "react";

class Children extends Component {
	state = {
		testData: 'Hello Friends'
	}
	render() {
		return <div>
		{this.state.testData}
		</div>
	}
}

export default Children;