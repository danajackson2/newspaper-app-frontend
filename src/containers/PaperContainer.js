import React from 'react'
import PaperArticleCard from '../components/PaperArticleCard'
import {Route} from 'react-router-dom'

class PaperContainer extends React.Component {

  handleLogic = () => {
    return this.props.selectedArticle === false 
    ? this.renderPaper() 
    : this.showArticle()
  }

  showArticle = () => {
    return (
      <div className="card card-block" >
        <div id="fullArticle" className="card-body align-items-center justify-content-center">
          <h2 className="card-title">{this.props.paper.articles[this.props.selectedArticle].title}</h2>
          <h4 className="card-subtitle">{this.props.paper.articles[this.props.selectedArticle].author}</h4>
          <img className='card-img' style={{width: "50%", height: "50%", alignContent: "center"}} src={this.props.paper.articles[this.props.selectedArticle].img_url}/>
          <p className='card-text' style={{overflow:'scroll', height: "500px", width: "100", alignContent: "center"}}>{this.props.paper.articles[this.props.selectedArticle].content}</p>
        </div>
        <div className="btn-group">
          <button className="col-1 btn-outline-secondary btn btn-sm" onClick={this.props.handleArticle}>Previous</button>
          <button className="col-1 btn-outline-secondary btn btn-sm" onClick={this.props.handleArticle}>All Articles</button>
          <button className="col-1 btn-outline-secondary btn btn-sm" onClick={this.props.handleArticle}>Next</button>
        </div>
      </div>
    )
  }

  renderPaper = () => {
    return (
      <div>
        <h2 style={{fontFamily: "Pirata One, cursive", fontSize: "50px", marginBottom: "0px"}}>{this.props.paper.title}</h2>
        <h3 style={{fontSize: "30px", margin: "0px"}}>{this.props.paper.date}</h3>
        <div className="row" >
          {this.props.paper.articles.map(article => < PaperArticleCard article={article} setArticle={this.props.setArticle}/>)}
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
    )
  }
}

export default PaperContainer;