import React from 'react'
import PaperArticleCard from '../components/PaperArticleCard'
import {Route} from 'react-router-dom'

class PaperContainer extends React.Component {

  state = {
    selectedArticle: false
  }

  handleLogic = () => {
    return this.state.selectedArticle === false 
    ? this.renderPaper() 
    : this.showArticle()
  }

  setArticle = (article) => {
    this.setState({selectedArticle: article})
  }

  showArticle = () => {
    return (
      <div>
        <div id="fullArticle">
          {this.state.selectedArticle.content}
        </div>
        <button onClick={() => this.setState({selectedArticle: false})}>All Articles</button>
      </div>
    )
  }

  renderPaper = () => {
    return (
      <div>
        <h2 style={{fontFamily: "Pirata One, cursive", fontSize: "60px"}}>{this.props.paper.title}</h2>
        <div className="row" >
          {this.props.paper.articles.map(article => < PaperArticleCard article={article} setArticle={this.setArticle}/>)}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="col-sm-9" id="paperContainer">
        <div className="col-sm-12" id="paperShow">
        {!this.props.paper.title && <h2>Choose a paper!</h2>}
        <Route path={`${this.props.routerProps.match.url}/${this.props.paper.id}`} render={this.handleLogic}/>
        </div>
      </div>
    );
  }
}
export default PaperContainer;