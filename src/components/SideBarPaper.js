import React from 'react'
import {Link} from 'react-router-dom'

class SideBarPaper extends React.Component {

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