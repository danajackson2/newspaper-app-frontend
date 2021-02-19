import React from 'react'

class Signup extends React.Component {
    state = {
      username: "",
      password: "",
      name: "",
    };
  
    handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
  
    render() {
      return (
        <div className='container' style={{paddingBottom: "40px"}}>
            <h1 className='row justify-content-center'>Sign up</h1>
            <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
                <div className="row justify-content-center">
                    <input className='col-3' style={{height:'33.5px', borderWidth:'1px', borderRadius:'3px'}} type="text"  name="name" placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
                </div><br/>
                <div className="row justify-content-center">
                    <input className='col-3' style={{height:'33.5px', borderWidth:'1px', borderRadius:'3px'}} type="text"  name="username" placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                </div><br/>
                <div className="row justify-content-center">
                    <input className='col-3' style={{height:'33.5px', borderWidth:'1px'}} type="password" style={{height:'33.5px'}} name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                </div><br />
                <div className="row justify-content-center">
                    <button className='col-2 btn-outline-secondary btn btn-lg' type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
      )
    }
  }
  
  export default Signup;