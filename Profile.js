import React, { Component, Fragment } from 'react';
import profile from '../Actions/ProfileAction';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
class Profile extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
       this.setState({
           
       })
       console.log(this.state)
    }
    componentDidMount(props){
        this.props.data()
        
    }
  
    render(){
        console.log(this.props.userdetail)
        return(
            <Fragment>
                <h1>hi</h1>
                <Link to="/user">UserList</Link>
                <input value={this.props.userdetail.name} onChange={this.handleChange} name="name"/>         
                 <input value={this.props.userdetail.age} onChange={this.handleChange} name="age"/>
                <input value={this.props.userdetail.email} onChange={this.handleChange} name="email"/> 
                <button>Update</button>   
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        userdetail : state.userdata
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        data : () => dispatch(profile())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)