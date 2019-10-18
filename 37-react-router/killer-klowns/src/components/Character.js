import React from 'react'
import { Link } from 'react-router-dom'


// function Klown(){}
const Character = (props) => {

    // let attack = () => {
    //     props.attackCharacter(props.names[0])
    // }

    return (
        <div>
            <h1>{props.human ? ("Human") : ("Klown")}</h1>
            Name: {props.character.name}
            <br />
            <Link to={`/klowns/${props.character.id}`}>
                <img alt="" src={props.character.image} />
            </Link>
            <br />
            Health: {props.character.health}
            <br />
            <button onClick={props.clickHandler}>Like</button>
            {/* <button onClick={props.attackClickHandler}>Attack Everyone</button> */}
            <br />
            {/* <button onClick={() => props.attackCharacter(props.names[0])}>Attack {props.names[0]}</button>
            <button onClick={() => props.attackCharacter(props.names[1])}>Attack {props.names[1]}</button> */}

        </div>
    )
}


export default Character


