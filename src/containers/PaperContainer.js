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
        <h2 id='title-input'>{this.props.paper.title}</h2>
        <div className="card-columns">
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