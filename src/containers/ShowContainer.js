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
            ShowContainer
            <SideBar />
            <PaperContainer />
            {/* Render today's paper that was created */}
        </div>
      );
    }
  }
  export default ShowContainer;