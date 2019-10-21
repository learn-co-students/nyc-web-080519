import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Character from '../components/Character'
import NewKlown from '../components/NewKlown'
import KlownSearch from '../components/KlownSearch'



class KlownContainer extends React.Component {
    state = {
        klowns: [],
        searchTerm: ""

    }
    componentDidMount() {
        this.fetchKlowns()
    }

    fetchKlowns = () => {
        fetch("http://localhost:4001/klowns")
            .then(resp => resp.json())
            .then(data => this.setState({
                klowns: data
            }))
    }

    filterKlowns = () => {
        return this.state.klowns.filter(klownObj => klownObj.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()))

    }
    logout = () => {
        localStorage.removeItem("token")
    }

    render() {
        let klownsArray = this.filterKlowns().map(klownObj => <Character key={klownObj.id} character={klownObj} clickHandler={this.props.increaseKlownScore} attackClickHandler={this.props.attackClickHandler} names={this.props.humans} attackCharacter={this.props.attackHuman} />)

        return (
            <div className="klown-container">
                <h4 onClick={this.logout}>Logout</h4>
                {this.state.klowns.length > 0 ? (<Switch>

                    <Route path="/klowns/:id" render={({ match }) => {
                        let klownId = parseInt(match.params.id)
                        let klownObj = this.state.klowns.find(klown => klown.id === klownId)
                        console.log("klownObj:", klownObj);
                        return <Character character={klownObj} clickHandler={this.props.increaseKlownScore} attackClickHandler={this.props.attackClickHandler} names={this.props.humans} attackCharacter={this.props.attackHuman} />
                    }} />
                    <Route path="/klowns" render={() => {
                        return (
                            <>
                                <h1>Klown Container</h1>
                                <NewKlown submitHandler={this.props.submitHandler} />

                                Score: {this.props.score}
                                <KlownSearch searchChangeHandler={this.props.searchChangeHandler} searchTerm={this.props.searchTerm} />
                                {klownsArray}
                            </>
                        )
                    }} />

                </Switch>
                ) : (<h1>Loading</h1>)}

            </div>

        )
    }


}

export default KlownContainer

