import React, { Component } from 'react'
import HeroList from './HeroList'

export default class HeroSearch extends Component {
    constructor() {
        super()
        this.state = {
            queryHeroes: [],
            query: "",
            firstRender: true
        }
    }

    filterHeroes = (query) => {
        return this.props.heroes.filter(el =>
            el.name.toString().toLowerCase().indexOf(
                query.toLowerCase()) !== -1)
    }

    handleChange = event => {
        const { name, value } = event.target;

        const heroQuery = this.filterHeroes(value);
        this.setState({
            [name]: value,
            queryHeroes: heroQuery,
            firstRender: false
        });
    }

    selectedHero=(hero)=>{
        console.log("HEROOOOOO", hero)
    }

    onSubmit() {

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form>
                        <label>
                            Hero Name:
                        <input
                                type="text"
                                name="query"
                                placeholder="Hero Name"
                                onChange={this.handleChange}
                                value={this.state.query} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <HeroList selectedHero={this.selectedHero} heroes={this.state.queryHeroes.length === 0 && this.state.firstRender ? this.props.heroes : this.state.queryHeroes} />
            </React.Fragment>
        )
    }
}
