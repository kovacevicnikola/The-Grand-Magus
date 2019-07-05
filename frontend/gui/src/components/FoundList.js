import React, { Component } from 'react'
import FoundHero from './FoundHero'
export default class FoundList extends Component {
    render() {
        return (

            <React.Fragment>
            <h1>Counters List</h1>

            <input type="submit" value="Submit" onClick={() => this.props.changeView()}/>
            <div style={{alignItems: "center", display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                {this.props.foundHero.slice(0,10).map(counteringHero => {

                    return <FoundHero counteringHero = {counteringHero}
                                      value = {counteringHero.value}
                                      key = {counteringHero.key} 
                                      heroes={this.props.heroes} 
                                      updateDB={this.props.updateDB} />
                })}
            </div>
        </React.Fragment>

        )
    }
}
