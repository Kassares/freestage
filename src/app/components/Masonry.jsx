import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Masonry extends Component{
	constructor(props){
		super(props);
		this.state = {columns: 2};
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
	}
	
	getColumns(width){
		return this.props.brakePoints.reduceRight( (previosValue, currentItem, index) => {
			return currentItem < width ? previosValue : index;
		}, this.props.brakePoints.length);
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return (
								<Link href="/single-band">
								<div key={i} >{child}</div>
								</Link>
								)
							})}
						</div>
					)
				})}
			</div>
		)
	}
}