import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {

    render() {
        return (
            <div className="ui secondary  menu" style={{backgroundColor: '#eee2d6', padding:'10px', marginBottom:'30px', marginTop:'0px'}}>
                <NavLink className="item" to="/" >Home</NavLink>
                <NavLink className="item" to={localStorage.token ? "/papers" : '/'}>Read Paper</NavLink>
                <div className="right menu">
                    {this.props.user.name 
                    ? <NavLink className="item" to="/profile">Profile</NavLink>
                    : <NavLink className="item" to="/signup">Signup</NavLink> }

                    {this.props.user.name 
                    ? <NavLink className="item" to='/' onClick={this.props.logOut}>Logout</NavLink> 
                    : <NavLink className="item"to="/login">Login</NavLink>}
                </div>
            </div>
        )
    }
}
export default Navbar