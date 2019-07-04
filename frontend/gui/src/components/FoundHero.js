import React, { Component } from 'react'
import OriginHeroes from './OriginHeroes'
export default class FoundHero extends Component {
    constructor() {
        super()
        this.state = {
            mouseOver: false
        }
    }
    getImage = (arr) => {
        let hero = arr[0]

        for (let item of this.props.heroes) {

            if (hero.ct2 === item.pk) {

                return item.image
            }
        }
    }
    getName = (arr) => {
        let hero = arr.heroCounters[0]
        for (let item of this.props.heroes) {

            if (hero.ct2 === item.pk) {

                return item.name
            }
        }
    }
    changeView = () => {
		let currentComponent = this
		currentComponent.setState(prevState => ({
			mouseOver: !prevState.mouseOver
		}))

	}

    render() {
        let image = this.getImage(this.props.counteringHero.heroCounters)
        let name = this.getName(this.props.counteringHero)
        return (
            <div>
            { !this.state.mouseOver ?
                <React.Fragment>
                <img src={image}
                    alt='hero'
                    title={name}
                    onMouseEnter={() => this.changeView()}
                    onMouseLeave={() => this.changeView()} />
                <h2>Value is {this.props.value}</h2>
                </React.Fragment>
                :
                <OriginHeroes 
                relations={this.props.counteringHero.heroCounters}
                changeView  ={this.changeView}
                heroes = {this.props.heroes}
                updateDB={this.props.updateDB}
                /> }
            </div>
        )
    }
}
