import React from 'react'
import SideBarPaper from '../components/SideBarPaper'

class SideBar extends React.Component {
    render () {
      return (
        <div className="col-sm-3" id="sideBar">
            <h2>All Papers</h2>
              <div class="form-inline">
                <input class="form-control mr-sm-2" type="text" placeholder="Search friends/papers..."/>
                <i class="search icon" onClick={this.props.searchPapers}></i>
              </div>
            <div className="allPapers">
              {this.props.papers.map(paper => < SideBarPaper paper={paper} setSelectedPaper={this.props.setSelectedPaper}/>)}
            </div>
        </div>
      )
    }
  }
  
export default SideBar