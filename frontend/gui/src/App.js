
import React, { Component } from 'react'

import axios from 'axios'
import './App.css';

import HeroSearch from './components/HeroSearch'


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			heroes: [],
			counterData: []
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

	getCounters(counterList) {
		if (counterList.length===5) {
		const pkList = counterList.map(el => el.pk)
		pkList.forEach(item => 
			console.log(axios.get("http://127.0.0.1:8000/api/herocounters/"+item+"/counter_list/").then(function(response) {console.log(response)}))
			// axios.get("http://127.0.0.1:8000/api/"+item+"/counter_list/"))
			// .then(function(response) {
			// 	console.log(response)}
				)} else {
					console.log('counterlist else block', counterList)
				}
	}

	render() {

		return (
			<div>
				<HeroSearch getCounters={this.getCounters} heroes={this.state.heroes} />



			</div>
		)
	}
}

