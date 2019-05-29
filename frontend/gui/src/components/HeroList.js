import React, { Component } from 'react'
import Hero from './Hero'
export default class HeroList extends Component {
    render() {
        const {heroes} = this.props
        return(
            <React.Fragment>
            
            <div><h1>Hero List</h1></div>
            {heroes.map(hero => {
                return <Hero 
                        key={hero.pk}
                        hero={hero}/>
            })}
            
            </React.Fragment>
        )
    }
}
