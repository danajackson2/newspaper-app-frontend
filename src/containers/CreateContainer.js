import React from 'react'
import TopicsContainer from './TopicsContainer'
import ArticlesContainer from './ArticlesContainer'

const topicsArray = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Movies', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Technology', 'Theater', 'Travel', 'America', 'World']
const NEW_PAPER_URL = 'http://localhost:3000/papers'
class CreateContainer extends React.Component {

    state={
        topicShow: true,
        topics: topicsArray,
        selectedTopics: [],
        custom: "",
        paper: {title: '', date: '', articles: []
      }
    }

    selectTopic = (topic) => {
      if (this.state.selectedTopics.includes(topic)) {
        this.setState(prevState => {
          return {
           selectedTopics: prevState.selectedTopics.filter(stateTopic => stateTopic !== topic)
          }
        })
      } else {
        this.setState({selectedTopics: [topic, ...this.state.selectedTopics]})
      }
    }
  
    addToTopics = () => {
      if (!this.state.topics.includes(this.state.custom)){
        this.setState({topics: [this.state.custom, ...this.state.topics]})
      }
      this.selectTopic(this.state.custom)
    }
    
    setCustom = (word) => {
      this.setState({custom: word})
    }

    articleShow = () => {
      this.setState(prevState => ({topicShow: !prevState.topicShow}))
    }

    handleArticle = (article) => {
      // this.setState({paper: {...this.state.paper, articles:[...this.state.paper.articles, article]}})
      if (this.state.paper.articles.length < 10 && !this.state.paper.articles.includes(article)) {
        this.setState(prevState => {
          return {
            paper: {...prevState.paper, articles: prevState.paper.articles.concat(article)}
          }
        })
      }
    }

    handleTitle = (text) => {
      this.setState(prevState => ({paper: {...prevState.paper, title: text}}))
    }

    savePaper = () => {
      fetch(NEW_PAPER_URL,{
        method: 'POST',
        headers : {'content-type':'application/json'},
        body: JSON.stringify({paper: this.state.paper})
      })
      .then(res => res.json())
      .then(data => this.props.setSelectedPaper(data))
    }
    
    render () {
      return (
        <div className="create">
            {this.state.topicShow 
              ? <TopicsContainer addToTopics={this.addToTopics} selectTopic={this.selectTopic} setCustom={this.setCustom} topics={this.state.topics} articleShow={this.articleShow}/> 
              : <ArticlesContainer selectedTopics={this.state.selectedTopics} handleArticle={this.handleArticle} savePaper={this.savePaper} handleTitle={this.handleTitle}/>}
        </div>
      );
    }
  }

export default CreateContainer;
