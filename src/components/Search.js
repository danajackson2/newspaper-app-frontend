import React from 'react'

const Search = props => {
    return (
        <div className="ui search" onChange={(e) => props.searchUsers(e, props.papers)}>
            <div className="ui icon input">
                <input className="prompt" placeholder="Search friends' papers"/>
                <i className="search icon" />
            </div>
        </div>
    )
}
  
export default Search

