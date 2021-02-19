import React from 'react'
import {Link} from 'react-router-dom'

class SideBarUser extends React.Component {

  state = {
      nameClicked: false,
      name: null
  }

  showUserPapers = () => {
    let userPapers = this.props.filteredPapers.filter(paper => paper.user.username === this.props.user)
    return (
      userPapers.map(paper => 
        <Link key={paper.id} to={`/papers/${paper.id}`}>
          <h4 className="links" onClick={() => {
            this.props.setSelectedPaper(paper)
            this.props.resetArticle()}
            }>{paper.title}</h4>
        </Link>)
    )
  }

  render() {
    return (
        <div style={{marginBottom: "5px"}}>
            <h4 className="sidebarUsers" onClick={(e) => this.setState({nameClicked: !this.state.nameClicked, name: e.target.innerText})}>{this.props.user}</h4>
            {this.state.nameClicked && this.showUserPapers()}
        </div>
    )
  }
}
export default SideBarUser