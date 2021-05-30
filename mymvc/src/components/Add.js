import './todo.css'
// import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';
import { Link } from "react-router-dom";


import React, {   useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {newTodo } from '../Actions';


 function Modal1({newTodo}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        // if (!value) return;
        newTodo({name:name, email:email, comment:comment });
        setEmail("");
        setComment("");
        setName("");
    };
    return (        <>
            <Link to="/feedbacks">

    <button>Feedbacks</button></Link>
        {/* // <form onSubmit={handleSubmit}> */}
            <span className='forms' >
                <input
                type="text"
                value={name}
                autoFocus={true}
                className='input'
                placeholder="Enter Name"
                onChange={e => setName(e.target.value)}
            /> 
                <input
                type="text"
                value={email}
                autoFocus={true}
                className='input'
                placeholder="Enter Email"
                onChange={e => setEmail(e.target.value)}
            /> 
                <input
                type="text"
                value={comment}
                autoFocus={true}
                className='input'
                placeholder="Enter Your Feedback"
                onChange={e => setComment(e.target.value)}
            />  <button className='sbtbtn' onClick={handleSubmit}> submit</button>
            </span>
           
        {/* // </form> */}
        </>
    )
}
// const mapStateToProps= state =>{
//     const {items} =state.todo
//     return{
//      items   
//     }
// }
const mapDispatchToProps = (dispatch) =>{
    return{
      
        newTodo:(payload) =>dispatch(newTodo(payload)),
    }
}
export default connect(null,mapDispatchToProps)(Modal1)
