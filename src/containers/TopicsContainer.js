import React from 'react'
import TopicCard from '../components/TopicCard'



class TopicsContainer extends React.Component {

    render () {
      return (
        <div className="ui cards">
            <h2>Select Your Topics</h2>
            {this.props.topics.map(t => <TopicCard topic={t} selectTopic={this.props.selectTopic}/>)}
            <input placeholder='Custom Topic' onChange={(e) => this.props.setCustom(e.target.value)}></input>
            <button onClick={this.props.addToTopics}
            >Submit</button>
            <button onClick={this.props.articleShow}>Submit Topics</button>
        </div>
      )
    }
  }
export default TopicsContainer;