import React from 'react'
import Character from '../components/Character'


const KlownContainer = (props) => {
    // console.log("klown container human names: ", props.humans)

    let klownsArray = props.klowns.map(klownObj => <Character key={klownObj.id} character={klownObj} clickHandler={props.increaseKlownScore} attackClickHandler={props.attackClickHandler} names={props.humans} attackCharacter={props.attackHuman} />)

    return (
        <div className="klown-container">
            <h1>Klown Container</h1>
            Score: {props.score}
            {klownsArray}
        </div>

    )

}

export default KlownContainer

