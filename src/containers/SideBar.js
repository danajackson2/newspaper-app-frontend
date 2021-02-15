import React from 'react'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
  // renderPapers = (papers) => {
  //   Object.keys(papers).map(paperId => <Link key={paperId} to={`/papers/${paperId}`}><li>{papers[paperId].title}</li></Link>)
  // }

  render () {
    return (
      <div className="sideBar">
          Side Bar
          {/* Code for Searchbox*/}
          {/* {this.renderPapers(this.props.papers)} */}
          {this.props.papers.map(paper => <li>{paper.title}</li>)}
      </div>
    )
  }
}
  
export default SideBar