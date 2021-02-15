import React from 'react'

class PaperArticleCard extends React.Component {
  render() {
    return (
      <div className="card">
          <div className="card-body" onClick={() => this.props.setArticle(this.props.article)}>
            <h5 className="card-title">{this.props.article.title}</h5>
            <p className="card-text">{this.props.article.content}</p>
          </div>
      </div>
    )
  }

  }
export default PaperArticleCard