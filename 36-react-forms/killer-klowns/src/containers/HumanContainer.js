import React from 'react'
import Character from '../components/Character'

const HumanContainer = (props) => {
    // console.log("human container klown names: ", props.klowns)
    let humans = props.humans.map(humanObj => <Character key={humanObj.id} character={humanObj} human clickHandler={props.increaseHumanScore} attackClickHandler={props.attackClickHandler} names={props.klowns} attackCharacter={props.attackKlown} />)
    return (
        <div className="human-container">
            <h1>Human Container</h1>
            Score: {props.score}
            {humans}
        </div>

    )

}

export default HumanContainer
