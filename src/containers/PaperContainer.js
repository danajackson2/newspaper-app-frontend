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
    let articleIndex = this.props.paper.articles.findIndex(art => art.id === article.id)
    this.setState({selectedArticle: articleIndex})
  }

  showArticle = () => {
    return (
      <div className="card card-block" >
        <div id="fullArticle" className="card-body align-items-center justify-content-center">
          <h2 className="card-title">{this.props.paper.articles[this.state.selectedArticle].title}</h2>
          <img className='card-img' style={{width: "50%", height: "50%", alignContent: "center"}} src={this.props.paper.articles[this.state.selectedArticle].img_url}/>
          <p className='card-text' style={{overflow:'scroll', height: "500px", width: "100", alignContent: "center"}}>{this.props.paper.articles[this.state.selectedArticle].content}</p>
        </div>
        <div className="btn-group">
          <button className="col-1 btn-outline-secondary btn btn-sm" onClick={() => this.state.selectedArticle > 0 && this.setState({selectedArticle: this.state.selectedArticle - 1})}>Previous</button>
          <button className="col-1 btn-outline-secondary btn btn-sm" onClick={() => this.setState({selectedArticle: false})}>All Articles</button>
          <button className="col-1 btn-outline-secondary btn btn-sm" onClick={() => this.state.selectedArticle < this.props.paper.articles.last && this.setState({selectedArticle: this.state.selectedArticle + 1})}>Next</button>
        </div>
      </div>
    )
  }

  renderPaper = () => {
    return (
      <div>
        <h2 style={{fontFamily: "Pirata One, cursive", fontSize: "60px"}}>{this.props.paper.title}</h2>
        <h2>{this.props.paper.date}</h2>
        <div className="row" >
          {this.props.paper.articles.map(article => < PaperArticleCard article={article} setArticle={this.setArticle}/>)}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="col-sm-9" id="paperContainer">
        <div className="col-sm-12" id="paperShow" style={{padding:'10px'}}>
        {!this.props.paper.title && <h2>Choose a paper to read</h2>}
        <Route path={`${this.props.routerProps.match.url}/${this.props.paper.id}`} render={this.handleLogic}/>
        </div>
      </div>
    );
  }
}
export default PaperContainer;