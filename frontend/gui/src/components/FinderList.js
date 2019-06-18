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

                <h1>Hero List</h1>
                <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                    {heroes.map(hero => {
                        return <Hero selectedHero={this.props.deselectedHero}
                            key={hero.pk}
                            hero={hero} />
                    })}
                </div>
                <input type="submit" value="Submit" onClick={() => this.props.getCounters(heroes)}/>
                <input type="submit" value="Submit" onClick={() => this.props.createCounterScore(this.props.counterData)}/>
                <input type="submit" value="Submit" onClick={() => this.props.changeView()}/>
            </React.Fragment>
        )
    }
}
