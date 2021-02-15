import React from 'react'
import SideBar from './SideBar'
import PaperContainer from './PaperContainer'

class ShowContainer extends React.Component {

  state = {
    papers: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/papers')
    .then(resp => resp.json())
    .then(json => this.setState({papers: json}))
  }

  searchPapers = (e) => {
    // Set state papers to be a filtered papers based on event
    console.log(e)
  }

  render () {
    return (
      <div className="row" id="showPageContainer">
          <SideBar {...this.props.routerProps} papers={this.state.papers} setSelectedPaper={this.props.setSelectedPaper} searchPapers={this.searchPapers}/>
          <PaperContainer paper={this.props.paper} />
      </div>
    );
  }
}
export default ShowContainer;