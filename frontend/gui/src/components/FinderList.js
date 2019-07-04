import React, { Component } from 'react'
import Hero from './Hero'


export default class FinderList extends Component {
    constructor() {
        super()
        this.state = {
            counterSort : []
        }
    }


    render() {
        const { heroes } = this.props;

        return (
            <React.Fragment>

                
                <div style={{alignItems: "center", display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                    {heroes.map(hero => {
                        return <Hero selectedHero={this.props.deselectedHero}
                            key={hero.pk}
                            hero={hero} />
                    })}
                </div>
                <div className="input-bar">
                <input type="submit" value="Submit" onClick={() => this.props.getCounters(heroes)}/>
                <input type="submit" value="Submit" onClick={() => this.props.createCounterScore(this.props.counterData)}/>
                <input type="submit" value="Submit" onClick={() => this.props.changeView()}/>
                </div>
            </React.Fragment>
        )
    }
}
