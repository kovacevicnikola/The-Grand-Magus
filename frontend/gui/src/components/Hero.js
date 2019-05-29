import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        const {hero} = this.props
        
        return (
            <div>
                <h2>{hero.name}</h2>
                <img src={hero.image} alt="hero"></img>
            </div>
        )
    }
}
