import React from 'react'
import SideBarPaper from '../components/SideBarPaper'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {

    // renderPapers = (papers) => {
    //   Object.keys(papers).map(paperId => <Link key={paperId} to={`/papers/${paperId}`}><li>{papers[paperId].title}</li></Link>)
    // }

  render () {
    return (
      <div className="col-sm-3" id="sideBar">
          <h2>All Papers</h2>
            <div className="form-inline">
              <input className="form-control mr-sm-2" type="text" placeholder="Search friends/papers..."/>
              <i className="search icon" onClick={this.props.searchPapers}></i>
            </div>
          <div className="allPapers">
            {this.props.papers.map(paper => < SideBarPaper paper={paper} setSelectedPaper={this.props.setSelectedPaper}/>)}
          </div>
      </div>
    )
  }
}
  
export default SideBar