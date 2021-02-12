import React from 'react'
import TopicsContainer from './TopicsContainer'
import ArticlesContainer from './ArticlesContainer'

class CreateContainer extends React.Component {

    state={
        topicShow: true,
        topics: [],
        paper: {title: '', articles: [
            
        ]}
    }

    render () {
      return (
        <div className="create">
            {this.state.topicShow ? <TopicsContainer /> : <ArticlesContainer />}
        </div>
      );
    }
  }

export default CreateContainer;
