import React from 'react'
import SideBar from './SideBar'
import PaperContainer from './PaperContainer'

class ShowContainer extends React.Component {

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