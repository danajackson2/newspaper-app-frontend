import React from 'react'
import SideBarDate from '../components/SideBarDate'
import Search from '../components/Search'

class SideBar extends React.Component {
  render () {
    const unique = [...new Set(this.props.papers.map(paper => paper.date))]
    return (
      <div className="col-sm-3" id="sideBar" >
          <h2 style={{textAlign: "center"}}>All Papers</h2>
          {< Search searchUsers={this.props.searchUsers}/>}
          <div className="allPapers">
            {unique.map(date => < SideBarDate date={date} setSelectedPaper={this.props.setSelectedPaper} resetArticle={this.props.resetArticle} papers={this.props.papers}/>)}
          </div>
      </div>
    )
  }
}
  
export default SideBar