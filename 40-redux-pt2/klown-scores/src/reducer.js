import { combineReducers } from 'redux'

let defaultState = {
    klown: 0,
    human: 0,
    humansArray: [],
    klownsArray: []
}

function newReducer(state = defaultState, action) {

    switch (action.type) {
        case "INCREASE KLOWN":
            return { ...state, klown: state.klown + 1 }
        case "INCREASE HUMAN":
            return { ...state, human: state.human + 1 }
        default:
            return state
    }

}

function humansScoreReducer(state = defaultState.human, action) {
    switch (action.type) {
        case "INCREASE HUMAN":
            return state + 1
        default:
            return state
    }
}

function humansFetchReducer(state = defaultState.humansArray, action) {
    switch (action.type) {
        case "FETCH HUMANS":
            return action.payload
        case "ADD HUMAN":
            return action.payload
        default:
            return state
    }

}

let reducer = combineReducers({
    klown: 0,
    human: humansScoreReducer,
    humansArray: humansFetchReducer,
    klownsArray: []
})

export default reducer