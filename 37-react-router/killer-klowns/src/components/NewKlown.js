import React from 'react'

class NewKlown extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state={}
    //     this.changeHandler = this.changeHandler.bind(this)
    // }


    state = {
        name: "",
        image: "",
        health: 100
    }

    changeHandler = (e) => {
        // console.log("form event: ", e.target.value)
        // capture the value that the user typed in 
        // update our state with that value/or whatever version of that value we choose 
        let value = e.target.value

        this.setState({
            //grab the name of the input that the change is happening to
            // find the key in state by that name
            //update that key in state
            [e.target.name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            image: ""
        })
    }

    render() {

        return (
            <form onSubmit={this.submitHandler} >
                <input type="text" name="name" placeholder="enter name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="image" placeholder="enter image link" value={this.state.image} onChange={this.changeHandler} />
                <input type="submit" />

            </form>

        )
    }
}
export default NewKlown