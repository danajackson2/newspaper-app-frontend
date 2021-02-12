import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="ui secondary  menu">
                <NavLink className="item" to="/" onClick={this.props.createPage}>Home</NavLink>
                <NavLink className="item" to="/papers" onClick={this.props.showPage}>Read Paper</NavLink>
                <div className="right menu">
                    <NavLink className="item" to="/signup">Signup</NavLink>
                    <NavLink className="item"to="/login">Login</NavLink>
                </div>
            </div>
        )
    }
}
export default Navbar