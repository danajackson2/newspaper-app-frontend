import './App.css';
import Navbar from './components/Navbar'
import React from 'react'
import ShowContainer from './containers/ShowContainer'
import CreateContainer from './containers/CreateContainer'
import { Route } from 'react-router-dom'
class App extends React.Component {
  state = {
    page: "create"
  }

  showComponent = () => {
    return this.state.page === "create" ?  <Route exact path="/" component={CreateContainer} /> : <Route exact path="/papers" component={ShowContainer} />
  }

  showPage = () => {
    this.setState({page: "show"})
  }

  createPage = () => {
    this.setState({page: "create"})
  }

  render () {
    return (
      <div className="App">
        < Navbar showPage={this.showPage} createPage={this.createPage}/>
        {this.showComponent()}
      </div>
    )
  }
}

export default App;