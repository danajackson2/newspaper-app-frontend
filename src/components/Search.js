import React from 'react'

const Search = props => {
    return (
        <div className="ui search" onChange={props.searchUsers} >
            <div className="ui icon input" style={{width: "100%"}}>
                <input className="prompt" placeholder="Search friends' papers"/>
                <i className="search icon" />
            </div>
        </div>
    )
}
  
export default Search

