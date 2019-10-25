import React from 'react'
import { connect } from 'react-redux'
import { addHuman } from '../actions'

class NewHuman extends React.Component {
    state = {
        name: "",
        health: 100,
        image: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addHuman(this.state, this.props.humans, this.props.history)
        //send a POST request with state info
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <input type="text" name="name" onChange={this.changeHandler} value={this.state.name} />
                <input type="text" name="image" onChange={this.changeHandler} value={this.state.image} />
                <input type="submit" value="submit" />

            </form>
        )
    }
}

function mdp(dispatch) {
    return { addHuman: (human, humanArray, history) => dispatch(addHuman(human, humanArray, history)) }
}
function msp(state) {
    return { humans: state.humansArray }
}
export default connect(msp, mdp)(NewHuman)