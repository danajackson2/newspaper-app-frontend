import React from 'react'
import {Link} from 'react-router-dom'
import SideBarUser from './SideBarUser'

class SideBarDate extends React.Component {

  state = {
    dateClicked: false, 
    date: null,
  }

  showUsers = () => {
    let filteredPapers = this.props.papers.filter(paper => paper.date === this.state.date)
    const unique = [...new Set(filteredPapers.map(paper => paper.user.username))]
    return (
      unique.map(user => <SideBarUser user={user} filteredPapers={filteredPapers} setSelectedPaper={this.props.setSelectedPaper} resetArticle={this.props.resetArticle}/>
      )
    )
  }

  render() {
    return (
      <div className="card">
        <h4 style={{margin: "5px"}} onClick={(e) => this.setState({dateClicked: !this.state.dateClicked, date: e.target.innerText})}>{this.props.date}</h4>
          {this.state.dateClicked && this.showUsers()}
      </div>
    )
  }
}
export default SideBarDate