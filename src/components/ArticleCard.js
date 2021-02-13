import React from 'react'

class ArticleCard extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    fetch(`http://newsapi.org/v2/everything?q=${this.props.topic}&sortBy=relevancy&sortB[…]=popularity&language=en&apiKey=2cb9ebfb65744b58ba65671c72708d72`)
    .then(resp => resp.json())
    .then(data => this.setState({articles: data.articles.splice(0, 10)}))
  }

  render() {
    return (
      <div className="article-card card">
        {this.props.topic}
          <ul>{this.state.articles.map(article => <li onClick={() => this.props.handleArticle(article)}>{article.title}</li>)}</ul>
      </div>
    )
  }

  }
export default ArticleCard