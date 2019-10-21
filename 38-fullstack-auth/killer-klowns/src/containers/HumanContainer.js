import React from 'react'
import Character from '../components/Character'

class HumanContainer extends React.Component {
    state = {
        humans: []
    }

    componentDidMount() {
        this.fetchHumans()

    }
    fetchHumans = () => {
        fetch("http://localhost:4001/humans")
            .then(resp => resp.json())
            .then(data => this.setState({
                humans: data
            }))
    }
    render() {
        let humans = this.state.humans.map(humanObj => <Character key={humanObj.id} character={humanObj} human clickHandler={this.state.increaseHumanScore} attackClickHandler={this.props.attackClickHandler} names={this.props.klowns} attackCharacter={this.props.attackKlown} />)
        return (
            <div className="human-container">
                {this.state.humans.length > 0 ? (<>
                    <h1>Human Container</h1>
                    Score: {this.props.score}
                    {humans}
                </>
                ) : (<h1>Loading</h1>)
                }

            </div>

        )
    }

}

export default HumanContainer
