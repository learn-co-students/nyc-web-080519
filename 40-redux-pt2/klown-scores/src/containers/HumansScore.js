import React from 'react'
import { connect } from 'react-redux'
import { fetchHumans } from '../actions'
import Human from '../components/Human'

class HumansScore extends React.Component {
    // state={
    //     humansArray: []
    // }

    componentDidMount() {
        // fetch()
        // .then()
        // .then(setState)
        this.props.fetchHumans()

    }

    render() {
        console.log("humans score props: ", this.props.humans)
        let humans = this.props.humans.map(humanObj => <Human key={humanObj.id} human={humanObj} />)
        return (
            <div>
                <h3>Humans Score</h3>
                <br />
                Human Score: {this.props.humanScore}
                <br />
                {humans}
            </div>
        )
    }
}

function mdp(dispatch) {
    return { fetchHumans: () => dispatch(fetchHumans()) }
}
function msp(state) {
    console.log("msp state", state)
    return { humanScore: state.human, humans: state.humansArray }
}

export default connect(msp, mdp)(HumansScore)