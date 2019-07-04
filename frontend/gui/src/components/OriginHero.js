import React, { Component } from 'react'

export default class OriginHero extends Component {
    render() {
        return (
            <div>
                <img src={this.props.hero.image} title={this.props.hero.name} alt = 'hero' onMouseLeave={() => this.props.changeView()}/>
                <h2>Individual score is {this.props.score}</h2> 
                
                <input type="submit" value="Score up" onClick={() => this.props.updateDB((this.props.pk), (this.props.score+1))}/>
                <input type="submit" value="Score down" onClick={() => this.props.updateDB((this.props.pk), (this.props.score-1))}/>
            </div>
        )
    }
}
