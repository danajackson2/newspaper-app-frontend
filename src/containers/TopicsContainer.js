import React from 'react'
import TopicCard from '../components/TopicCard'

const topics = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Movies', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Technology', 'Theater', 'Travel', 'America', 'World']

class TopicsContainer extends React.Component {

    render () {
      return (
        <div className="ui cards">
            <h2>Select Your Topics</h2>
            {topics.map(t => <TopicCard topic={t}/>)}
            <input placeholder='Custom Topic'></input>
            <button>Submit</button>
        </div>
      )
    }
  }
export default TopicsContainer;