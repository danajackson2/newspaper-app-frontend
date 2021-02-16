import './App.css'
import Navbar from './components/Navbar'
import React from 'react'
import ShowContainer from './containers/ShowContainer'
import CreateContainer from './containers/CreateContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, withRouter } from 'react-router-dom'
class App extends React.Component {
  state = {
    selectedPaper: {},
    user: {},
    error: ''
  }

  componentDidMount() {
    const token = localStorage.token
    if (token) {
      this.persistUser(token)
    }
  }

  setSelectedPaper = (paper) => {
    this.setState({selectedPaper: paper})
  }

  handleAuthResponse = (data) => {
    if (data.username) {
      const { username, id, name, token } = data;
      this.setState({
        user: {username, id, name},
        error: null,
      })
      localStorage.setItem("token", token)
      this.props.history.push('/')
    } else if (data.error) {
      this.setState({
        error: data.error,
      })
      alert(this.state.error)
    }
  }

  persistUser = (token) => {
    fetch("http://localhost:3000/persist", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.username) {
        const { username, id, name } = data
        this.setState({
          user: {username, id, name}
        })
      }
    })
  }

  handleLogin = (e, userData) => {
    e.preventDefault()
    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => this.handleAuthResponse(data))
  }

  handleSignup = (e, userData) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({user:userData})
    })
    .then(res => res.json())
    .then(data => this.handleAuthResponse(data))
  }

  logOut = () => {
    localStorage.clear()
    this.setState({user:{}})
  }

  render () {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <h2 className='col-3 greeting'>{this.state.user.name ? `Hi, ${this.state.user.name}` : ' '}</h2>
            <h1 className={'col-6'} id='header'>My Daily News</h1>
          </div>
        </div>
        <Navbar user={this.state.user} logOut={this.logOut}/>
        {/* <Switch> */}
          <Route exact path="/" render={() => <CreateContainer setSelectedPaper={this.setSelectedPaper}/>} /> 
          {!localStorage.token ?
          <>
            <Route exact path='/signup' render={() => <Signup handleLoginOrSignup={this.handleSignup}/>}/>
            <Route exact path='/login' render={() => <Login handleLoginOrSignup={this.handleLogin}/>}/>
          </>
          :
          <Route exact path="/papers" render={(routerProps) => <ShowContainer routerProps={routerProps} paper={this.state.selectedPaper} setSelectedPaper={this.setSelectedPaper}/>} />
          }
        {/* </Switch> */}
        <div id={'footer'}></div>
      </div>
    )
  }
}

export default withRouter(App)