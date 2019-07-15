import React, { Component } from 'react'
import FoundHero from './FoundHero'
export default class FoundList extends Component {
    render() {
        return (

            <React.Fragment>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="submit" className="heroValue-submit" value="Retry" onClick={() => this.props.changeView()} />
                </div>

                <div style={{ width: '100%' }}>
                    {this.props.foundHero.slice(0, 10).map(counteringHero => {

                        return <FoundHero counteringHero={counteringHero}
                            value={counteringHero.value}
                            key={counteringHero.key}
                            heroes={this.props.heroes}
                            updateDB={this.props.updateDB} />
                    })}
                </div>
            </React.Fragment>

        )
    }
}
