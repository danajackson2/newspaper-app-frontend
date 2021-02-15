import React from 'react'
import ViewArticleChoice from './ViewArticleChoice'

class ArticleCard extends React.Component {

  state = {
    articles: [],
    currentView: 0
  }

  componentDidMount() {
    fetch(`http://newsapi.org/v2/everything?q=("${this.props.topic}")&sortBy=relevancy&sortB[…]=popularity&language=en&apiKey=2cb9ebfb65744b58ba65671c72708d72`)
    // fetch('http://localhost:3000/articles')    
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
      <div className="col card" style={{margin: '5px', padding: '5px', height: '370px', width:'400px'}}>
        <h3 style={{padding:'5px', margin:'0px'}}>{this.props.topic}</h3>
        {this.state.articles[0] && <ViewArticleChoice changeCurrent={this.changeCurrent} currentView={this.state.currentView} articles={this.state.articles}/>}
        <button style={{position: 'absolute', bottom: '5px', margin:'5px', left:'25%', width:'50%'}} className="btn btn-outline-secondary" onClick={() => this.props.handleArticle(this.state.articles[this.state.currentView])}>Add Article To Paper</button> 
      </div>
    )
  }

  }
export default ArticleCard