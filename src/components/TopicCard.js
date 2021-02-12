import React from 'react'

function TopicCard({topic, selectTopic}) {
      return (
        <div className="topic-card card" onClick={() => selectTopic(topic)}>
            {topic}
            {/* each topic needs onClick that adds it to state in create container*/}
        </div>
      )
  }
export default TopicCard