import React from 'react'

class PaperContainer extends React.Component {
    render () {
      return (
        <div>
            Paper Container
            {this.props.paper.title}
        </div>
      );
    }
  }
export default PaperContainer;