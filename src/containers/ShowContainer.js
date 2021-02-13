import React from 'react'
import SideBar from './SideBar'
import PaperContainer from './PaperContainer'

class ShowContainer extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/papers')
    .then(resp => resp.json())
    .then(console.log)
  }

    render () {
      return (
        <div className="show">
            Show Container
            <SideBar />
            <PaperContainer paper={this.props.paper}/>
        </div>
      );
    }
  }
  export default ShowContainer;