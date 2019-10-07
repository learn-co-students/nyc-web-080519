import React from 'react'


// function Klown(){}
const Klown = (props) => {
    console.log("Klown Props: ", props)
    return (
        <div>
            <h1>Klown</h1>
            Name: {props.klown.name}
            <img alt="" src={props.klown.image} />
            <br />
            <button>button</button>

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




export default Klown


