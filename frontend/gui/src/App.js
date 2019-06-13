
import React, { Component } from 'react'

import axios from 'axios'
import './App.css';

import HeroSearch from './components/HeroSearch'


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			heroes: [],
			counterData: [],
		}
	}
	async getHeroes() {
		try {
			const response = await axios.get("http://127.0.0.1:8000/api/heroes/");

			this.setState({
				heroes: response.data
			})
		} catch (error) {
			console.error(error);
		}
	}

	componentDidMount() {
		this.getHeroes()
	}

	getCounters = (counterList) => {
		let currentComponent = this;
		const pkList = counterList.map(el => el.pk)
		currentComponent.setState(prevstate => ({
			counterData: []
		}))
		pkList.forEach(item => 
			axios.get("http://127.0.0.1:8000/api/herocounters/"+item+"/counter_list/")
			.then(function(response) {
				if (response!==undefined) {
				
				currentComponent.setState(prevState => ({
				counterData: prevState.counterData.concat(response.data)
			}))
				console.log(currentComponent.state.counterData)
		
		}}))
	}

	render() {

		return (
			<div>
				<HeroSearch counterData={this.state.counterData} getCounters={this.getCounters} heroes={this.state.heroes} />



			</div>
		)
	}
}

