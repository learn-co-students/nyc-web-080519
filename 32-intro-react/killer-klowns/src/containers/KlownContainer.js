import React from 'react'
import Klown from '../components/Klown'

//

/*
anything
I 
put 
here

*/



const KlownContainer = () => {
    // Array of klowns
    let klowns = [{ id: 1, name: "Joker", health: 100, image: "https://img.cinemablend.com/filter:scale/quill/e/4/7/0/2/8/e470289e30be3f30a4003e98c0e1103ebdc32f7a.jpg?mw=600" }, { id: 2, name: "PennyWise", health: 100, image: "https://i.ytimg.com/vi/aW19ur93Y6o/maxresdefault.jpg" }]


    // map through array and create an array of klown components
    let klownsArray = klowns.map(klownObj => <Klown key={klownObj.id} klown={klownObj} />)


    return (
        <div>
            <h1>Klown Container</h1>
            {/* print all of the klown components from klownsArray to the DOM */}
            {klownsArray}
        </div>

    )

}

export default KlownContainer

