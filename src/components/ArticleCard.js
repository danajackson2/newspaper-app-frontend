import React from 'react'
import ViewArticleChoice from './ViewArticleChoice'

class ArticleCard extends React.Component {

  state = {
    articles: [],
    currentView: 0
  }

  componentDidMount() {
    fetch(`http://content.guardianapis.com/search?q="${this.props.topic}"&order-by=newest&lang=en&show-fields=bodyText,byline,thumbnail&page-size=20&api-key=7709e833-ae7b-42e8-a90f-6ffd2d974086`)   
    .then(resp => resp.json())
    .then(data => this.setState({articles: data.response.results.splice(0, 10)}))
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
        {this.state.articles[0] 
        ? 
        <>
        <ViewArticleChoice changeCurrent={this.changeCurrent} currentView={this.state.currentView} articles={this.state.articles}/> 
        <button style={{position: 'absolute', bottom: '5px', margin:'5px', left:'25%', width:'50%'}} className="btn btn-outline-secondary" onClick={() => this.props.handleArticle(this.state.articles[this.state.currentView])}>Add Article To Paper</button> 
        </>
        : <h4>No articles are available for this topic!</h4>}
      </div>
    )
  }

  }
export default ArticleCard