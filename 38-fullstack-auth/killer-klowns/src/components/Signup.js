import React from 'react'

class Signup extends React.Component {
    state = {
        name: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            password: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.username} placeholder="enter username" onChange={this.changeHandler} />
                <input type="text" name="password" value={this.state.password} placeholder="enter password" onChange={this.changeHandler} />
                <input type="submit" value="submit" />

            </form>
        )
    }
}

export default Signup