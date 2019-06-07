import React, { Component } from 'react'

export default class Hero extends Component {
    
    handleClick = (hero) => {
        this.props.selectedHero(hero)
    }
    render() {
        const { hero } = this.props;

        return (
            <div onClick={() => this.handleClick(hero)} className="single-hero">
                <h2>{hero.name}</h2>
                <img src={hero.image} alt="hero" />
            </div>
        )
    }
}
