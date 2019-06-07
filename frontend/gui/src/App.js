
import React, { Component } from 'react'

import axios from 'axios'
import './App.css';

import HeroSearch from './components/HeroSearch'


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			heroes: []
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

	render() {

		return (
			<div>
				<HeroSearch heroes={this.state.heroes} />



			</div>
		)
	}
}

