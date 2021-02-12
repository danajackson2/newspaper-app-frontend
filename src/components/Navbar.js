import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div class="ui secondary  menu">
                <NavLink class="item" to="/" onClick={this.props.changeShowOrCreate}>Home</NavLink>
                <NavLink class="item" to="/papers" onClick={this.props.changeShowOrCreate}>Read Paper</NavLink>
                <div class="right menu">
                    <NavLink class="item" to="/signup">Signup</NavLink>
                    <NavLink class="item"to="/login">Login</NavLink>
                </div>
            </div>
        )
    }
}
export default Navbar