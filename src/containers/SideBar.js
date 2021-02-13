import React from 'react'

class SideBar extends React.Component {
    render () {
      return (
        <div className="sideBar">
            Side Bar
            {/* Code for Searchbox*/}
            {this.props.papers.map(paper => <li>{paper.user_id}</li>)}
        </div>
      )
    }
  }
  
export default SideBar