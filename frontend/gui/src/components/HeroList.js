import React, { Component } from 'react';
import Hero from './Hero';

export default class HeroList extends Component {

    render() {
        const { heroes } = this.props;
        return (
            <React.Fragment>
                <h1>Hero List</h1>
                <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                    {heroes.map(hero => {
                        return <Hero selectedHero={this.props.selectedHero}
                            key={hero.pk}
                            hero={hero} />
                    })}
                </div>
            </React.Fragment>
        )
    }
}
