import React from 'react'
import SideBar from './SideBar'
import PaperContainer from './PaperContainer'

class ShowContainer extends React.Component {

  state = {
    papers: [],
    filter: [],
    searchInput: "",
    selectedArticle: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/papers',{
      method: "GET",
      headers: {Authorization: `Bearer ${localStorage.token}`}
    })
    .then(resp => resp.json())
    .then(json => this.setState({papers: json, filter: json}))
    .catch(() => alert('catch fired ShowContainer'))
  }

  searchUsers = (e) => {
    // this.setState({searchInput: e.target.value.toLowerCase()})
    // let target = e.target.value.toLowerCase()
    // let length = e.target.value.length
    // if (length < 1) {
    //   this.setState({filter: this.state.papers})
    // } else {
      let searchResults = this.state.papers.filter(paper => paper.user.username.toLowerCase().includes(e.target.value))
      this.setState({filter: searchResults})
    // }
  }

  setArticle = (article) => {
    let articleIndex = this.props.paper.articles.findIndex(art => art.id === article.id)
    this.setState({selectedArticle: articleIndex})
  }

  handleArticle = (e) => {
    if (e.target.innerText === "All Articles") {
      this.setState({selectedArticle: false})
    } else if (e.target.innerText === "Previous") {
      this.state.selectedArticle > 0 && this.setState({selectedArticle: this.state.selectedArticle - 1})
    } else if (e.target.innerText === "Next") {
      this.state.selectedArticle < this.props.paper.articles.length-1 && this.setState({selectedArticle: this.state.selectedArticle + 1})
    }
    // switch (e.target.innerText) {
    //   case "All Articles":
    //     this.setState({selectedArticle: false})
    //   case "Previous":
    //     this.state.selectedArticle > 0 && this.setState({selectedArticle: this.state.selectedArticle - 1})
    //   case "Next":
    //     this.state.selectedArticle < this.props.paper.articles.length-1 && this.setState({selectedArticle: this.state.selectedArticle + 1})
    // }
  }

  resetArticle = () => {
    this.setState({selectedArticle: false})
  }

  render () {
    return (
      <div className="container-fluid" id="showPageContainer">
        <div className="row">
            <SideBar papers={this.state.filter} setSelectedPaper={this.props.setSelectedPaper} searchUsers={this.searchUsers} resetArticle={this.resetArticle}/>
            <PaperContainer paper={this.props.paper} routerProps={this.props.routerProps} selectedArticle={this.state.selectedArticle} setArticle={this.setArticle} handleArticle={this.handleArticle}/>
        </div>
      </div>
    );
  }
}
export default ShowContainer;