import React from 'react'
import PaperArticleCard from '../components/PaperArticleCard'

class PaperContainer extends React.Component {

  state = {
    selectedArticle: false
  }

  handleLogic = () => {
    if (this.props.paper.title === undefined) {
      return "Choose a paper"
    } else if (this.state.selectedArticle === false) {
      return this.renderPaper()
    } else {
      return this.showArticle()
    }
  }

  setArticle = (article) => {
    let articleIndex = this.props.paper.articles.findIndex(art => art.id === article.id)
    this.setState({selectedArticle: articleIndex})
  }

  showArticle = () => {
    return (
      <div className="card card-block" style={{}}>
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
          {this.handleLogic()}
        </div>
      </div>
    );
  }
}
export default PaperContainer;