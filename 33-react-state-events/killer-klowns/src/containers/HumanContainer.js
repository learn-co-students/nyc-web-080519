import React from 'react'
import Character from '../components/Character'

const HumanContainer = () => {
    let humansArray = [{ id: 1, name: "Debbie Stone", health: 100, image: "http://geekchocolate.co.uk/wp-content/uploads/2015/02/2014pt3_BookFest_klowns-7.jpg" }, { id: 2, name: "Curtis Mooney", health: 100, image: "https://vignette.wikia.nocookie.net/to-hollywood-and-beyond/images/7/70/Curtis_Mooney_klowns.jpg/revision/latest?cb=20170106221045" }]

    let humans = humansArray.map(humanObj => <Character key={humanObj.id} character={humanObj} human />)
    return (
        <div className="human-container">
            <h1>Human Container</h1>
            Score: 0
            {humans}
        </div>

    )
}

export default HumanContainer
