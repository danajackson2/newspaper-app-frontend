import React from 'react'
import ArticleCard from '../components/ArticleCard'

class ArticlesContainer extends React.Component {



    render () {
      return (
        <div className="ui cards">
            Choose 10 Articles
            {this.props.selectedTopics.map(t => < ArticleCard topic={t} handleArticle={this.props.handleArticle}/>)}
            
        </div>
      );
    }
  }

  export default ArticlesContainer;