import React from 'react'

function TopicCard({topic}) {
      return (
        <div className="topic-card card">
            {topic}
            {/* each topic needs onClick that adds it to state in create container*/}
        </div>
      )
  }
export default TopicCard