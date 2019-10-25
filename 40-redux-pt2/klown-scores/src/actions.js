


function increaseKlown() {
    return { type: "INCREASE KLOWN" }
}
function increaseHuman() {
    return { type: "INCREASE HUMAN" }
}

function fetchHumans() {

    return function (dispatch) {
        console.log("dispatch", dispatch)
        fetch("http://localhost:4001/humans")
            .then(resp => resp.json())
            .then((data) => {
                console.log("fetch response: ", data)
                dispatch({ type: "FETCH HUMANS", payload: data })
            }
            )
    }


}

function addHuman(human, currentArray, history) {
    console.log("history ", history)
    return function (dispatch) {
        console.log("dispatch", dispatch)
        fetch("http://localhost:4001/humans", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(human)
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log("fetch response: ", data)
                let newArray = [...currentArray, data]
                dispatch({ type: "ADD HUMAN", payload: newArray })
                history.push('/humans')
            }
            )
    }


}


export { increaseHuman, increaseKlown, fetchHumans, addHuman }