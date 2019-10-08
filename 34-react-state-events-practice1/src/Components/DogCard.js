import React from "react";

class DogCard extends React.Component {
  state = {
    bark: false
  }

  clickHandler = () => {
    console.log("clicking!")
    this.setState({ bark: !this.state.bark })
  }


  render() {
    return (
      <div>
        <h2 className="bark">{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.clickHandler}>Bark</button>
        {this.state.bark ? (<h2>Ruff</h2>) : null}

      </div>
    );
  }
}

export default DogCard;
