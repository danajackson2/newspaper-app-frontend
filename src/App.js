import './App.css';
import Navbar from './components/Navbar'
import React from 'react'
import ShowContainer from './containers/ShowContainer'
import CreateContainer from './containers/CreateContainer'
import { Route } from 'react-router-dom'
class App extends React.Component {
  state = {
    createPage: true
  }

  showComponent = () => {
    return this.state.createPage ?  <Route exact path="/" component={CreateContainer} /> : <Route exact path="/papers" component={ShowContainer} />
  }

  changeShowOrCreate = () => {
    this.setState(prevState => {return {createPage: !prevState.createPage}})
  }

  render () {
    return (
      <div className="App">
        < Navbar changeShowOrCreate={this.changeShowOrCreate}/>
        {this.showComponent()}
      </div>
    )
  }
}

export default App;