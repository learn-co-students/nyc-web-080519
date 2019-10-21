import React from 'react'

const KlownSearch = (props) => {
    return (
        <>
            <br />
            Search for Klown:
        <form>
                <input type="text" placeholder="search klowns" value={props.searchTerm} onChange={props.searchChangeHandler} />
            </form>
        </>


    )
}

export default KlownSearch