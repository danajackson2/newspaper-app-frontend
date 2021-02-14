import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="ui secondary  menu" style={{backgroundColor: '#eee2d6', padding:'10px'}}>
                <NavLink className="item" to="/" >Home</NavLink>
                <NavLink className="item" to="/papers" >Read Paper</NavLink>
                <div className="right menu">
                    <NavLink className="item" to="/signup">Signup</NavLink>
                    <NavLink className="item"to="/login">Login</NavLink>
                </div>
            </div>
        )
    }
}
export default Navbar