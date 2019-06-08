import React, { Component } from 'react'
import HeroList from './HeroList'
import FinderList from './FinderList'
export default class HeroSearch extends Component {
    constructor() {
        super()
        this.state = {
            queryHeroes: [],
            query: "",
            firstRender: true,
            finderList: [],
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
        if (this.state.finderList.length<5 && !this.state.finderList.includes(hero)) {
        this.setState(prevState => ({
            finderList: [...prevState.finderList, hero]
        }))

    } else {
        console.log('hero already in list')
    }
    }
    deselectedHero=(hero)=>{
        if (this.state.finderList.length>0) {
        this.setState(prevState => ({
            finderList: prevState.finderList.filter(tryhero => tryhero !== hero)
        }))
        } else {
            console.log(this.state.finderList)
        }
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
                <FinderList heroes={this.state.finderList} deselectedHero={this.deselectedHero} />
                <HeroList selectedHero={this.selectedHero} heroes={this.state.queryHeroes.length === 0 && this.state.firstRender ? this.props.heroes : this.state.queryHeroes} />
            </React.Fragment>
        )
    }
}
