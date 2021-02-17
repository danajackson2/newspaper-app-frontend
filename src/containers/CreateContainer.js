import React from 'react'
import TopicsContainer from './TopicsContainer'
import ArticlesContainer from './ArticlesContainer'
import {Redirect} from 'react-router-dom'

const topicsArray = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Movies', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Technology', 'Theater', 'Travel', 'America', 'World']
const NEW_PAPER_URL = 'http://localhost:3000/papers'
class CreateContainer extends React.Component {

    state={
      topicShow: true,
      topics: topicsArray,
      selectedTopics: [],
      custom: "",
      paper: {title: '', date: '', articles: [], user_id: ''}
    }

    selectTopic = (topic) => {
      if (this.state.selectedTopics.includes(topic)) {
        this.setState(prevState => {
          return {
           selectedTopics: prevState.selectedTopics.filter(stateTopic => stateTopic !== topic)
          }
        })
      } else {
        this.setState({selectedTopics: [...this.state.selectedTopics, topic]})
      }
  }
  
    addToTopics = () => {
      if (!this.state.topics.includes(this.state.custom)){
        this.setState({topics: [this.state.custom, ...this.state.topics].sort((a,b) => a.localeCompare(b))})
      }
      this.selectTopic(this.state.custom)
      document.getElementById('customInput').value = ''
    }
    
    setCustom = (word) => {
      this.setState({custom: word})
    }

    articleShow = () => {
      if (localStorage.token) {
        this.setState(prevState => ({topicShow: !prevState.topicShow}))
      } else {
        this.setState({selectedTopics: []})
        alert('Please log in')
      }
    }

    handleArticle = (article) => {
      let formattedArticle = {title: article.webTitle, img_url: article.fields.thumbnail, content: article.fields.bodyText, author: article.fields.byline}
      // this.setState({paper: {...this.state.paper, articles:[...this.state.paper.articles, article]}})
      if (this.state.paper.articles.length < 10) {
        if (!this.state.paper.articles.map(a => a.title).includes(formattedArticle.title)) {
          this.setState(prevState => {
            return {
              paper: {...prevState.paper, articles: prevState.paper.articles.concat(formattedArticle), user_id: this.props.user}
            }
          })
        } else {
          alert("You've already selected that article, keep perusing!")
        }
      } else{
        alert('Congratulations, you have chosen 10 articles! Scroll to the bottom of the page to create your paper.')
      }
    }

    handleTitle = (text) => {
      this.setState(prevState => ({paper: {...prevState.paper, title: text}}))
    }

    removeArticle = (article) => {
      this.setState(prevState => ({
          paper: {...prevState.paper, articles: prevState.paper.articles.filter(a => a !== article)}
        }))
    }

    savePaper = () => {
      if (this.state.paper.title === '' || this.state.paper.articles[0]===undefined){
        alert('Please give your paper a title, and choose and least one article.')
      } else {
        fetch(NEW_PAPER_URL,{
          method: 'POST',
          headers : {'content-type':'application/json', Authorization: `Bearer ${localStorage.token}`}, 
          body: JSON.stringify({paper: this.state.paper})
        })
        .then(res => res.json())
        .then(data => this.props.setSelectedPaper(data))
      }
    }
    
    render () {
      return (
        <div className="create">
            {this.state.topicShow 
              ? <TopicsContainer addToTopics={this.addToTopics} selectTopic={this.selectTopic} setCustom={this.setCustom} topics={this.state.topics} articleShow={this.articleShow} selectedTopics={this.state.selectedTopics}/> 
              : <ArticlesContainer selectedArticles={this.state.paper.articles} selectedTopics={this.state.selectedTopics} handleArticle={this.handleArticle} savePaper={this.savePaper} handleTitle={this.handleTitle} removeArticle={this.removeArticle} newPaper={this.state.paper}/>}
        </div>
      )
    }
  }

export default CreateContainer;
