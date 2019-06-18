import React, { Component } from 'react'

export default class FoundHero extends Component {
    getImage = (arr) => {
        let hero = arr[0]

        for (let item of this.props.heroes) {

            if (hero.ct2 === item.pk) {
                console.log('if block')
                return item.image
            }
        }
    } 
    render() {
        let image = this.getImage(this.props.counteringHero)
        return (
            <div>
            <img src={image} alt ='hero'/>
            </div>
        )
    }
}
