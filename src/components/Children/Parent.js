import React, { Component } from "react";
import Children from './Children';

class Parent extends Component {
	render() {
		return <Children>
			{(test) => {
				return <div>
					{test}
				</div>
			}
		}
			</Children>
	}
}

export default Parent;