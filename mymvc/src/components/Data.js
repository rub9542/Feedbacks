// import React, { Component } from 'react'
// import './todo.css'
// import {myTodo,isEdit } from '../Actions';
// import {connect} from 'react-redux';
// class Data extends Component {
//     edited = (index) => {
//         this.props.isEdit(index)
//     }
//     render(){
//         if(this.props.status ==='Complete'){
//             return (
//                 <div className='title' onClick={()=>this.edited(this.props.index)} style={{opacity:0.5}} ><strike>{this.props.title}
//                     </strike></div>  )  
//         }
//         else{
//             return (
//                 <div className='title1' onClick={()=>this.edited(this.props.index)}>{this.props.title}</div>)
//         }
//     }
// }
// const mapStateToProps= state =>{
//     const {items} =state.todo
//     return{
//      items   
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         // myTodo : (payload)=> dispatch(myTodo(payload)),
//         isEdit: (index) => dispatch(isEdit(index)),
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Data)

