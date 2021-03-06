import React, { Component } from 'react'
import OriginHero from './OriginHero'
export default class OriginHeroes extends Component {
    constructor() {
        super()
        this.state = {
            heroes: []
        }
    }
    getHero = () => {
        let heroarray = []
        for (let item of this.props.relations) {
            for (let hero of this.props.heroes) {
                if (item.ct1 === hero.pk) {
                    heroarray.push(hero)
                }
            }
        }
        this.setState(prevState => ({
            heroes: prevState.concat(heroarray)
        }))
    }
    getHeroScore = () => { }


    render() {
        return (
            <div>
                {
                    this.props.relations.map(item => {
                        for (let hero of this.props.heroes) {

                            if (item.ct1 === hero.pk) {
                                console.log('if block', hero)
                                return <OriginHero
                                    pk={item.pk}
                                    hero={hero}
                                    score={item.score}
                                    changeView={this.props.changeView}
                                    updateDB={this.props.updateDB} />
                            }
                        }
                    })}

            </div>
        )
    }
}
