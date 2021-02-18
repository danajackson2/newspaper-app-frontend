import React from 'react'
import {Link} from 'react-router-dom'

class SideBarPaper extends React.Component {

  state = {
    dateClicked: false, 
    date: null,
    nameClicked: false,
    name: null
  }

  // render() {
  //   let filteredPapers = this.props.papers.filter(paper => paper.date === this.state.date)
  //   const unique = [...new Set(filteredPapers.map(paper => paper.user.username))]
  //   let userPapers = this.props.papers.filter(paper => paper.date === this.state.date && paper.user.username === this.state.name)
  //   return (
  //     <div className="card">
  //       <ul onClick={(e) => this.setState({dateClicked: !this.state.dateClicked, date: e.target.innerText})}>{this.props.date}</ul>
  //         {this.state.dateClicked 
  //         ? unique.map(user => <li className="sidebarUsers"onClick={(e) => this.setState({nameClicked: !this.state.nameClicked, name: e.target.innerText})}>{user}</li>)
  //         : null}
          
  //         {this.state.nameClicked
  //         ? userPapers.map(paper => 
  //           <Link key={paper.id} to={`/papers/${paper.id}`}>
  //             <li className="links" onClick={() => {
  //               this.props.setSelectedPaper(paper)
  //               this.props.resetArticle()}
  //               }>{paper.title}</li>
  //           </Link>)
  //         : null}
  //     </div>
  //   )
  // }

  render() {
    const {id, date, user} = this.props.paper
    return (
      <div className="allPapers" onClick={() => {
        this.props.setSelectedPaper(this.props.paper)
        this.props.resetArticle()}
      }>
        <Link key={id} to={`/papers/${id}`}>
          <li style={{color: 'black'}}>{`${date} ${user.username}`}</li>
        </Link>
      </div>
    )
  }
}
export default SideBarPaper