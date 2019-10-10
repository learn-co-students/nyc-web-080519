import React from 'react'
import Character from '../components/Character'
import NewKlown from '../components/NewKlown'
import KlownSearch from '../components/KlownSearch'



const KlownContainer = (props) => {
    // console.log("klown container human names: ", props.humans)

    let klownsArray = props.klowns.map(klownObj => <Character key={klownObj.id} character={klownObj} clickHandler={props.increaseKlownScore} attackClickHandler={props.attackClickHandler} names={props.humans} attackCharacter={props.attackHuman} />)

    return (
        <div className="klown-container">
            <h1>Klown Container</h1>
            <NewKlown submitHandler={props.submitHandler} />

            Score: {props.score}
            <KlownSearch searchChangeHandler={props.searchChangeHandler} searchTerm={props.searchTerm} />
            {klownsArray}
        </div>

    )

}

export default KlownContainer

