import React from 'react'


// function Klown(){}
const Character = (props) => {
    // console.log("Character Props: ", props)

    return (
        <div>
            <h1>{props.human ? ("Human") : ("Klown")}</h1>
            Name: {props.character.name}
            <br />
            <img alt="" src={props.character.image} />
            <br />
            <button onClick={props.clickHandler}>Like</button>

        </div>
    )
}

// class Klown extends React.Component {
//     render() {
//         this.props
//         return (
//             <div>
//                 <h1>Klown</h1>
//                 Name: {props.klown.name}
//                 <img alt="" src={props.klown.image} />
//                 <br />
//                 <button>button</button>

//             </div>
//         )
//     }
// }




export default Character


