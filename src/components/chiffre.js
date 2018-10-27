import React, {Component} from "react";
import logo from '../wolf.jpg';

import '../App.css';

class Chiffre extends Component{
	render() {
		return(
			<div className="chiffre">
				<strong>{this.props.number}</strong>
				<br/>
				<strong>{this.props.content}</strong>
            </div>    
		);
	}
}

export default Chiffre;