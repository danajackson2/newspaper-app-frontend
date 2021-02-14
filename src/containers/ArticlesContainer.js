import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { Link } from 'react-router-dom'

class ArticlesContainer extends React.Component {

    render () {
      return (
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <input onChange={(e) => this.props.handleTitle(e.target.value)} style={{width:'60%', fontSize:'60px', fontFamily:'Pirata One, cursive', textAlign:'center'}}></input>
            <h2 style={{paddingTop:'10px'}}>Give Your Paper a Title</h2><br/>
          </div>
          <hr></hr>
          <div className={'row justify-content-md-center'} style={{margin:'10px'}}>
            <h2>Selected Articles</h2>
            <div className='card' style={{width:'70%', padding:'10px'}}>
              {this.props.selectedArticles[0] 
              ? this.props.selectedArticles.map(a => <p style={{textAlign:'left'}}>{a.title}<button className={'btn'} onClick={() => this.props.removeArticle(a)}>❌</button> </p>)
              : <p >See articles organized by topics below</p>  
              }
            </div>
          </div><br/>
          <hr></hr>
          <h2 className={"row justify-content-md-center"}>Choose up to 10 Articles</h2>
          <div className={"row row-cols-4 justify-content-md-center"} style={{alignSelf: 'center'}}>
            {this.props.selectedTopics.map(t => < ArticleCard topic={t} handleArticle={this.props.handleArticle}/>)}
          </div>
          <hr></hr><br/>
          <Link to="/papers" className={'row justify-content-md-center'}>
            <button className={"btn btn-outline-primary"} style={{width:'25%'}} onClick={this.props.savePaper}>Create My Paper</button>
          </Link><br/>
        </div>
      );
    }
  }

  export default ArticlesContainer;