import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { Link } from 'react-router-dom'

class ArticlesContainer extends React.Component {

    render () {
      return (
        <div className=".container-fluid">
          <div className="row justify-content-md-center">
            <input onChange={(e) => this.props.handleTitle(e.target.value)} style={{width:'20%'}}></input>
            <h2>Paper Title</h2>
          </div>
          <hr></hr>
          <h2 className="row justify-content-md-center">Choose up to 10 Articles</h2>
          <div className="row row-cols-4 justify-content-md-center" style={{alignSelf: 'center'}}>
            {this.props.selectedTopics.map(t => < ArticleCard topic={t} handleArticle={this.props.handleArticle}/>)}
          </div>
          <hr></hr>
          <div className='row justify-content-md-center'>
              <h2>Selected Articles</h2>
              <div className='card' style={{width:'50%'}}>
                {this.props.selectedArticles[0] 
                ? this.props.selectedArticles.map(a => <p>{a.title} <span onClick={() => this.props.removeArticle(a)}>❌</span> </p>)
                : <h4>Choose some articles to add to your paper.</h4>  
                }
              
                </div>
          </div>
          <Link to="/papers" className='row justify-content-md-center'>
            <button class="btn btn-outline-primary" onClick={this.props.savePaper}>Create My Paper</button>
          </Link>
        </div>
      );
    }
  }

  export default ArticlesContainer;