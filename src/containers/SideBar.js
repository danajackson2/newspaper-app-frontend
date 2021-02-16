import React from 'react'
import SideBarPaper from '../components/SideBarPaper'
import Search from '../components/Search'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {

    // renderPapers = (papers) => {
    //   Object.keys(papers).map(paperId => <Link key={paperId} to={`/papers/${paperId}`}><li>{papers[paperId].title}</li></Link>)
    // }

  render () {
    return (
      <div className="col-sm-3" id="sideBar">
          <h2>All Papers</h2>
          {< Search searchUsers={this.props.searchUsers} papers={this.props.papers}/>}
          <div className="allPapers">
            {this.props.papers.map(paper => < SideBarPaper paper={paper} setSelectedPaper={this.props.setSelectedPaper}/>)}
          </div>
      </div>
    )
  }
}
  
export default SideBar