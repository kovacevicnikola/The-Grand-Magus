import React, { Component } from 'react';
import plus from '../plus2.svg';
import minus from '../minus2.svg'
export default class OriginHero extends Component {
    constructor(){
        super()

        this.state = {
            modifier: 0
        }

    }

    callMultiple = (newscore, change) => {
        this.props.updateDB(this.props.pk, newscore)
        this.setState(prevState => ({
            modifier: prevState.modifier + change
        }))
    }


    render() {
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    <img style={{ verticalAlign: 'middle' }} src={this.props.hero.image} title={this.props.hero.name} alt='hero' />
                    <div style={{ position: 'absolute', right: '0', bottom: '0' }}>
                            <img src={plus} style={{ width: '30px', height: '30px', backgroundColor: 'rgb(43, 175, 10)', borderRadius: '7px'}} onClick={() => this.callMultiple((this.props.score+1), 1)}/>
                            <img src={minus} style={{ width: '30px', height: '30px', backgroundColor: 'rgb(43, 175, 10)', borderRadius: '7px'}} onClick={() => this.callMultiple((this.props.score-1), -1)} />

                    </div>
                </div>
                <h2>Score: {this.props.score+this.state.modifier}</h2>
            </div>
        )
    }
}
