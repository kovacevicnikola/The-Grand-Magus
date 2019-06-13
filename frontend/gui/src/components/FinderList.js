import React, { Component } from 'react'
import Hero from './Hero'
export default class FinderList extends Component {
    constructor() {
        super()
        this.state = {
            counterSort : []
        }
    }

    createCounterScore = (arr) => {
		let currentComponent = this;
		if (arr!==undefined&&arr.length!==0) {
			for (let item of arr) {
                let heroCounterHolder = {
                    heroCounters: new Array(),
                    value : 0
                    }
				for (let item2 of arr) {
					if (item2.ct2===item.ct2 && item!==item2) {
                        
						heroCounterHolder.heroCounters.push(item2)
                        heroCounterHolder.value = heroCounterHolder.value + item2.score 
                        console.log(heroCounterHolder)
                    }}  
            currentComponent.setState(prevState => ({
                                      counterSort: [...prevState.counterSort, heroCounterHolder]}))
                        
			}
        }

    }
        
    render() {
        const { heroes } = this.props;

        return (
            <React.Fragment>
                <h1>Hero List</h1>
                <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                    {heroes.map(hero => {
                        return <Hero selectedHero={this.props.deselectedHero}
                            key={hero.pk}
                            hero={hero} />
                    })}
                </div>
                <input type="submit" value="Submit" onClick={() => {this.props.getCounters(heroes)}}/>
                <input type="submit" value="Submit" onClick={() => {this.createCounterScore(this.props.counterData)}}/>
            </React.Fragment>
        )
    }
}
