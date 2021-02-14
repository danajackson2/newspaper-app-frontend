import React from 'react'
import ViewArticleChoice from './ViewArticleChoice'

class ArticleCard extends React.Component {

  state = {
    articles: [],
    currentView: 0
  }

  componentDidMount() {
    fetch(`http://newsapi.org/v2/everything?q=${this.props.topic}&sortBy=relevancy&sortB[…]=popularity&language=en&apiKey=2cb9ebfb65744b58ba65671c72708d72`)
    .then(resp => resp.json())
    .then(data => this.setState({articles: data.articles.splice(0, 10)}))
  }

  changeCurrent = (direction) => {
    if (direction === 'up') {
      this.state.currentView === this.state.articles.length - 1
      ? this.setState({currentView: 0})
      : this.setState(prevState => ({currentView: prevState.currentView + 1}))
    } else {
      this.state.currentView === 0
      ? this.setState({currentView: this.state.articles.length - 1})
      : this.setState(prevState => ({currentView: prevState.currentView - 1}))
    }
  }

  render() {
    return (
      <div className="article-card card">
        {this.props.topic}
        {this.state.articles[0] && <ViewArticleChoice changeCurrent={this.changeCurrent} currentView={this.state.currentView} articles={this.state.articles}/>}
        <button onClick={() => this.props.handleArticle(this.state.articles[this.state.currentView])}>Add Article To Your Paper</button>  
        {/* <ul>{this.state.articles.map(article => <li onClick={() => this.props.handleArticle(article)}>{article.title}</li>)}</ul> */}
      </div>
    )
  }

  }
export default ArticleCard