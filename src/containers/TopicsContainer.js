import React from 'react'
import TopicCard from '../components/TopicCard'

class TopicsContainer extends React.Component {

    render () {
      return (
        <div className="container" style={{paddingBottom: "40px"}}>
            <h1 className='row justify-content-center'>Select Your Topics</h1>
            <div className='row row-cols-6 justify-content-center'>
              {this.props.topics.map(t => <TopicCard topic={t} selectTopic={this.props.selectTopic} selectedTopics={this.props.selectedTopics}/>)}
            </div>
            <div className='row justify-content-center' style={{margin:'20px'}}>
                <input id='customInput' className='col-4' placeholder='Custom Topic' onChange={(e) => this.props.setCustom(e.target.value)}></input>
                <button className='btn-outline-secondary btn col-2' onClick={this.props.addToTopics}>Submit</button>
            </div>
            <div className='row justify-content-center' style={{margin:'20px'}}>
              <button className='btn-outline-secondary btn btn-lg col-3' onClick={this.props.articleShow}>Submit Topics</button>
            </div>
        </div>
      )
    }
  }
export default TopicsContainer;