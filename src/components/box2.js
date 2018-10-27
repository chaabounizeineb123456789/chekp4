import React, {Component} from "react";
import logo from '../wolf.jpg';
//import './App.css';

class Box extends Component{
	render() {
		return(

			<div className="box">

				<img src={logo} className="App-wolf" alt="wolf" />
				<h2> {this.props.name} </h2>
			</div>
		);
	}
}

export default Box;