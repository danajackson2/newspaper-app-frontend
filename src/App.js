import './App.css'
import Navbar from './components/Navbar'
import React from 'react'
import ShowContainer from './containers/ShowContainer'
import CreateContainer from './containers/CreateContainer'
import Footer from './components/Footer'
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
        <h1 id='header'>My Daily News</h1>
        <Navbar />
        <Route exact path="/" render={() => <CreateContainer setSelectedPaper={this.setSelectedPaper}/>} /> 
        <Route path="/papers" render={(routerProps) => <ShowContainer routerProps={routerProps} paper={this.state.selectedPaper}/>} />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App