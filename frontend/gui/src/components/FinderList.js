import React, { Component } from 'react'
import Hero from './Hero'


export default class FinderList extends Component {
    constructor() {
        super()
        this.state = {
            counterSort: []
        }
    }


    render() {
        const { heroes } = this.props;

        return (
            <div className='search-wrapper'>
                <div className="found-div">
                    {heroes.map(hero => {
                        return <Hero selectedHero={this.props.deselectedHero}
                            key={hero.pk}
                            hero={hero} />
                    })}

                </div>
            </div>
        )
    }
}
