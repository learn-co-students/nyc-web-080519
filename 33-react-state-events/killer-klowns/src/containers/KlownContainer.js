import React from 'react'
import Character from '../components/Character'


class KlownContainer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         score: 0,
    //         klowns: [{ id: 1, name: "Joker", health: 100, image: "https://img.cinemablend.com/filter:scale/quill/e/4/7/0/2/8/e470289e30be3f30a4003e98c0e1103ebdc32f7a.jpg?mw=600" }, { id: 2, name: "PennyWise", health: 100, image: "https://i.ytimg.com/vi/aW19ur93Y6o/maxresdefault.jpg" }]
    //     }
    // }

    state = {
        score: 0,
        klowns: [{ id: 1, name: "Joker", health: 100, image: "https://img.cinemablend.com/filter:scale/quill/e/4/7/0/2/8/e470289e30be3f30a4003e98c0e1103ebdc32f7a.jpg?mw=600" }, { id: 2, name: "PennyWise", health: 100, image: "https://i.ytimg.com/vi/aW19ur93Y6o/maxresdefault.jpg" }]
    }

    changeScore = () => {
        this.setState({
            score: this.state.score + 1
        })
        // console.log("new score", this.state.score)
    }


    render() {
        console.log("new state: ", this.state)
        let klownsArray = this.state.klowns.map(klownObj => <Character key={klownObj.id} character={klownObj} clickHandler={this.changeScore} />)

        return (
            <div className="klown-container">
                <h1>Klown Container</h1>
                Score: {this.state.score}
                {klownsArray}
            </div>

        )
    }

}

export default KlownContainer

