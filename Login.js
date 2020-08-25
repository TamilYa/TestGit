import React,{Component, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import login from '../Actions/LoginAction'
import { Link } from 'react-router-dom';
class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        if(this.state.email && this.state.password){
            this.props.login(this.state)
        }
        e.preventDefault()
    }
    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder="Enter the email*"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                    /><br/>
                    <input
                    placeholder="Enter the password*"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"/><br/>
                    <button
                    type="submit">
                        Login
                        </button>
                        <Link to ="/">Register</Link>
                </form>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        userdata:state.userdata
    }
}
const mapDispatchToProps={
        login:login
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)