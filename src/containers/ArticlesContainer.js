import React from 'react'
import ArticleCard from '../components/ArticleCard'
import {Link} from 'react-router-dom'

class ArticlesContainer extends React.Component {

  fillPaper = () =>{
    let num = this.props.selectedArticles.length
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=21f142801a5e4b6d937cd534c4b4a06d')
    .then(res => res.json())
    .then(data => {data.articles.slice(0, 10-num).forEach(a => this.props.handleArticle(a))})
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <input id='title-input' onChange={(e) => this.props.handleTitle(e.target.value)}></input>
          <h2 style={{paddingTop:'10px'}}>Give Your Paper a Title</h2><br/>
        </div>
        <hr></hr>
        <div className={'row justify-content-md-center'} style={{margin:'10px'}}>
          <h2>Selected Articles</h2>
          <div className='card' style={{width:'70%', padding:'10px'}}>
            {this.props.selectedArticles[0] 
            ? this.props.selectedArticles.map(a => <p style={{textAlign:'left'}}>{a.title}<button className={'btn'} onClick={() => this.props.removeArticle(a)}>❌</button> </p>)
            : <h4 >See articles organized by topic below</h4>  
            }
          </div>
        </div><br/>
        <hr></hr>
        <h2 className={"row justify-content-md-center"}>Choose up to 10 Articles</h2>
        <div className={"row row-cols-4 justify-content-md-center"} style={{alignSelf: 'center'}}>
          {this.props.selectedTopics.map(t => < ArticleCard topic={t} handleArticle={this.props.handleArticle}/>)}
        </div>
            <h3>Need some help choosing articles? Click below to fill out your paper with randomly generated articles.</h3>
            <button onClick={this.fillPaper} className={"btn btn-outline-secondary"}>Random Articles</button>
        <hr></hr>
        <Link to={this.props.newPaper.title === '' || this.props.newPaper.articles === [] ? '/' : "/papers"} className={'row justify-content-md-center'}>
          <button className={"btn btn-outline-secondary btn-lg"} style={{width:'25%'}} onClick={this.props.savePaper}>Create My Paper</button>
        </Link><br/>
      </div>
    )
  }
}

  export default ArticlesContainer;