import React, { Component } from 'react'
import HeroList from './HeroList'

export default class HeroSearch extends Component {
    constructor() {
        super()
        this.state = {
            queryHeroes: [],
            query : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    filterHeroes(arr, query) {
        return arr.filter(el => 
            el.name.toString().toLowerCase().indexOf(
                query.toLowerCase()) !== -1)}
        
    handleChange(event) {
        try { 
        console.log('query', this.state.query)
        console.log('qheroes', this.state.queryHeroes)
        const {name, value} = event.target
        const heroQuery = this.filterHeroes(this.props.heroes, this.state.query)
        this.setState({ 
            [name]: value,
            queryHeroes: heroQuery }, this.render)
        } catch(error) {
            console.log(error)
            console.log(this.state)
            console.log(this.props)
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
            <HeroList heroes={this.state.queryHeroes}/>
            </React.Fragment>
        )
    }
}
