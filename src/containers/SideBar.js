import React from 'react'
import SideBarPaper from '../components/SideBarPaper'
import Search from '../components/Search'

class SideBar extends React.Component {
  render () {
    const unique = [...new Set(this.props.papers.map(paper => paper.date))]
    return (
      <div className="col-sm-3" id="sideBar" >
          <h2 style={{textAlign: "center"}}>All Papers</h2>
          {< Search searchUsers={this.props.searchUsers} papers={this.props.papers}/>}
          <div className="allPapers">
            {/* {unique.map(date => < SideBarPaper date={date} setSelectedPaper={this.props.setSelectedPaper} resetArticle={this.props.resetArticle} papers={this.props.papers}/>)} */}
            {this.props.papers.map(paper => < SideBarPaper paper={paper} setSelectedPaper={this.props.setSelectedPaper} resetArticle={this.props.resetArticle}/>)}
          </div>
      </div>
    )
  }
}
  
export default SideBar