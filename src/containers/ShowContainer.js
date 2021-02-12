import React from 'react'
import SideBar from './SideBar'
import PaperContainer from './PaperContainer'

class ShowContainer extends React.Component {

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