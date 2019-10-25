import React from 'react'
import { connect } from 'react-redux'
import { increaseKlown, increaseHuman } from '../actions'

const AllScores = (props) => {
    console.log("AllScores props: ", props)
    return (
        <div>
            <h3>All Scores</h3>
            Klown Score: {props.klownScore}
            <br />
            <button onClick={props.increaseKlown}>Increase Klown Score</button>
            <br />
            Human Score: {props.humanScore}
            <br />
            <button onClick={props.increaseHuman}>Increase Human Score</button>

        </div>
    )
}

function msp(state) {
    return { klownScore: state.klown, humanScore: state.human }
}
function mdp(dispatch) {
    return { increaseKlown: () => dispatch(increaseKlown()), increaseHuman: () => dispatch(increaseHuman()) }
}
export default connect(msp, mdp)(AllScores)