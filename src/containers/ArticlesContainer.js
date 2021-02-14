import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { Link } from 'react-router-dom'

class ArticlesContainer extends React.Component {

    render () {
      return (
        <div className="ui cards">
            Choose 10 Articles
            <label>Paper Title</label>
            <input onChange={(e) => this.props.handleTitle(e.target.value)}></input>
            {this.props.selectedTopics.map(t => < ArticleCard topic={t} handleArticle={this.props.handleArticle}/>)}
            <div>
              Selected Articles
              <ul>
                {this.props.selectedArticles.map(a => <li>{a.title} <span onClick={() => this.props.removeArticle(a)}>❌</span> </li>)}
              </ul>
            </div>
            <Link to="/papers">
              <button onClick={this.props.savePaper}>Create My Paper</button>
            </Link>
        </div>
      );
    }
  }

  export default ArticlesContainer;