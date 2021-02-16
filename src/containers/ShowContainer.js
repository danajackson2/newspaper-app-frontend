import React from 'react'
import SideBar from './SideBar'
import PaperContainer from './PaperContainer'

class ShowContainer extends React.Component {

  state = {
    papers: [],
    filter: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/papers')
    .then(resp => resp.json())
    .then(json => this.setState({papers: json, filter: json}))
    .catch(() => alert('Please log in.'))
  }

  searchUsers = (e, papers) => {
    let target = e.target.value
    let length = e.target.value.length
    if (length < 1) {
      this.setState({filter: this.state.papers})
    } else {
      let searchResults = papers.filter(paper => paper.user.username.substring(0, length) === target)
      this.setState({filter: searchResults})
    }
  }

  render () {
    return (
      <div className="row" id="showPageContainer">
          <SideBar {...this.props.routerProps} papers={this.state.filter} setSelectedPaper={this.props.setSelectedPaper} searchUsers={this.searchUsers}/>
          <PaperContainer paper={this.props.paper} />
      </div>
    );
  }
}
export default ShowContainer;