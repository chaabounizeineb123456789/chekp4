import React, {Component} from "react";
import logo from '../wolf.jpg';

//import './App.css';

class Box extends Component{
	render() {
		return(
			<div className={this.props.className}>
				<h4> {this.props.name} </h4>
				<button> en savoir plus</button>
				<div>
				{
					this.props.image  && <img src={this.props.image} width='270px' /> 
				}
				</div>
             </div>    
		);
	}
}

export default Box;