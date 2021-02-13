import './App.css'
import Navbar from './components/Navbar'
import React from 'react'
import ShowContainer from './containers/ShowContainer'
import CreateContainer from './containers/CreateContainer'
import { Route } from 'react-router-dom'
class App extends React.Component {
  state = {
    selectedPaper: {}
  }

  setSelectedPaper = (paper) => {
    this.setState({selectedPaper: paper})
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={() => <CreateContainer setSelectedPaper={this.setSelectedPaper}/>} /> 
        <Route exact path="/papers" render={() => <ShowContainer paper={this.state.selectedPaper}/>} />
      </div>
    )
  }
}

export default App