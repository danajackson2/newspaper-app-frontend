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

    render () {
      return (
        <div className="show">
            Show Container
            <SideBar {...this.props.routerProps} papers={this.state.papers}/>
            <PaperContainer paper={this.props.paper}/>
        </div>
      );
    }
  }
  export default ShowContainer;