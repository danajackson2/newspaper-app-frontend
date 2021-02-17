import React from 'react'

class PaperArticleCard extends React.Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card" >
            <div className="card-body" onClick={() => this.props.setArticle(this.props.article)}>
                <h4 className="card-title">{this.props.article.title}</h4>
                <h5 className="card-subtitle">{this.props.article.author}</h5>
                <img className='card-img' src={this.props.article.img_url}></img>
                <p className="card-text" style={{overflow:'hidden'}}>{this.props.article.content}</p>
            </div>
        </div>
      </div>
    )
  }

  }
export default PaperArticleCard