
import React, { Component } from 'react'

import axios from 'axios'
import './App.css';

import HeroSearch from './components/HeroSearch'
import FoundList from './components/FoundList'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			heroes: [],
			counterData: [],
			counterSort: [],
			renderCounters: false
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

		let currentComponent = this
		const pkList = counterList.map(el => el.pk)

		const urlArray = pkList.map(item => `http://127.0.0.1:8000/api/herocounters/${item}/counter_list/`);
		const axArray = urlArray.map(item => axios.get(item))

		axios.all(axArray).then(response => {
			const heroData = response.map(item => item.data);
			let unpData = []
			heroData.forEach(item => {
				unpData = [...unpData, ...item];
			});
			currentComponent.setState({ counterData : unpData }, () => this.createCounterScore(unpData))
		})

	}

	createCounterScore = (arr) => {
		let currentComponent = this;
		let heroarray = [];
		let pk = 0;
		if (arr !== undefined && arr.length !== 0) {
			for (let item of arr) {
				pk = pk + 1;
				let heroCounterHolder = {
					heroCounters: [],
					value: 0,
					key: pk

				}
				for (let item2 of arr) {
					if (item2.ct2 === item.ct2) {
						heroCounterHolder.heroCounters.push(item2)
						heroCounterHolder.value = heroCounterHolder.value + item2.score

					}
				}
				if (!(heroarray.some(e => e.heroCounters[0].ct2 === item.ct2))) {

					heroarray = [...heroarray, heroCounterHolder]
					heroarray.sort((a, b) => (a.value > b.value) ? -1 : 1)
				}
			}

		}

		currentComponent.setState(prevState => ({
			counterSort: prevState.counterSort.concat(heroarray)
		}), () => this.changeView())
	}

	changeView = () => {
		let currentComponent = this
		currentComponent.setState(prevState => ({
			renderCounters: !prevState.renderCounters
		}))

	}
	updateDB = (pk, score) => {
		axios.patch('http://127.0.0.1:8000/api/herocounters/' + pk + '/counter_list/', {
			score: score
		})
	}


	render() {

		return (
			<div className="app-wrapper">
				{!this.state.renderCounters ?
					<HeroSearch counterData={this.state.counterData}
						getCounters={this.getCounters}
						heroes={this.state.heroes}
						changeView={this.changeView}
						renderCounters={this.state.renderCounters}
						createCounterScore={this.createCounterScore} />
					:
					<FoundList foundHero={this.state.counterSort}
						changeView={this.changeView}
						heroes={this.state.heroes}
						updateDB={this.updateDB}
					/>
				}

			</div>
		)
	}
}

