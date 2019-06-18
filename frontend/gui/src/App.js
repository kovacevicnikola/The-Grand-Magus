
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
		console.log('get counters')
		let currentComponent = this 
		const pkList = counterList.map(el => el.pk)
		
		pkList.forEach(item => 
			axios.get("http://127.0.0.1:8000/api/herocounters/"+item+"/counter_list/")
			.then(function(response) {
				currentComponent.setState(prevState => ({
				counterData: prevState.counterData.concat(response.data)
			}))
		console.log('getCounters state', currentComponent.state.counterData)

		
	}))
		
	}

	createCounterScore = (arr) => {
		console.log('counter score')
		let currentComponent = this 
		let heroarray = []
		let keyvalue = 0
		if (arr!==undefined&&arr.length!==0) {
			for (let item of arr) {
				keyvalue = keyvalue + 1
                let heroCounterHolder = {
                    heroCounters: [],
					value : 0,
					key : keyvalue
					
                    }
				for (let item2 of arr) {
					if (item2.ct2===item.ct2 && item!==item2) {
                        console.log('herocounterholder', heroCounterHolder, currentComponent.state)
						heroCounterHolder.heroCounters.push(item2)
                        heroCounterHolder.value = heroCounterHolder.value + item2.score 
                        
					}}  
				
					heroarray = [...heroarray, heroCounterHolder]
					heroarray.sort((a, b) => (a.value > b.value) ? 1 : -1)
                        
			}
			
        }
		
		currentComponent.setState(prevState => ({
			counterSort: prevState.counterSort.concat(heroarray)}), () => console.log('counterscoreend', heroarray))
    }

	changeView = () => {
		let currentComponent = this
		currentComponent.setState(prevState => ({
			renderCounters: !prevState.renderCounters
		}))
		console.log('changeviewstate', currentComponent.state.renderCounters)
	}



	render() {

		return (
			<div>
				{!this.state.renderCounters ?
				<HeroSearch counterData={this.state.counterData} 
							getCounters={this.getCounters} 
							heroes={this.state.heroes}
							changeView={this.changeView}
							renderCounters={this.state.renderCounters}
							createCounterScore={this.createCounterScore}/> 
				:
                <FoundList foundHero={this.state.counterSort}
						   changeView={this.changeView}
						   heroes={this.state.heroes}
				/>
				}

			</div>
		)
	}
}

