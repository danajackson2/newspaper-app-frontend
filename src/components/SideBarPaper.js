import React from 'react'

class SideBarPaper extends React.Component {
  
  render() {
    return (
      <div className="allPapers" onClick={() => this.props.setSelectedPaper(this.props.paper)}>
        <li>{`${this.props.paper.date} ${this.props.paper.user.username}`}</li>
      </div>
    )
  }
}
export default SideBarPaper