import React from 'react'

class TopicCard extends React.Component{

  render(){
    const {topic, selectTopic, selectedTopics} = this.props 
    return (
      <div id={selectedTopics.includes(topic) ? 'topic-card-sel' : 'topic-card'} className="card col" onClick={() => {selectTopic(topic)}}>
          <h3 style={{lineHeight: "100px"}}>{topic}</h3>
      </div>
    )
  }
}
export default TopicCard