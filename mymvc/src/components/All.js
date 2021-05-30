import { Card, Col, Row } from 'antd';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
class All extends Component {
  render() {
    const { Meta } = Card;
    return (
      <div className="site-card-wrapper" 
      style={{padding: '30px', background: '#ececec'}}
      >{this.props.items.map((item,index)=>(
        
        <Col
        className="item"
       
        // onClick={() => this.naming(index)}
      >
        <Card 
          hoverable
          key={index}
          style={{ width: 250 }}
          // cover={<img alt="example"  />}
        >
          <Meta title={item.name}  />
        </Card>
      </Col>))}
    {/* // <Card key={index} title={item.name} extra={<a href="#">More</a>}  bordered={false}>
    //   <p>{item.comment}</p>
    //   <p>Card content</p>
    //   <p>Card content</p>
    // </Card> */}
   
  </div>
    )
  }
}
const mapStateToProps= state =>{
      const items =state.todo.items
      console.log("at display1",items )
      return{
       items   
      }
  }
  // const mapDispatchToProps = (dispatch) =>{
  //     return{
  //         statusChange: (payload, index) => dispatch(statusChange(payload,index)),
  //         myTodo : (payload)=> dispatch(myTodo(payload)),
  //         changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
  //         removeIndex: (index)=> dispatch(removeIndex(index)),
  //         isEdit: (index) => dispatch(isEdit(index)),
  //         changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
  //         changeSelect:(index) => dispatch(changeSelect(index)),
  //     }
  // }
  
  export default connect(mapStateToProps,null)(All)
  
  
// ReactDOM.render(
//   <div className="site-card-border-less-wrapper">
//     <Card title="Card title" bordered={false} style={{ width: 300 }}>
//       <p>Card content</p>
//       <p>Card content</p>
//       <p>Card content</p>
//     </Card>
//   </div>,
//   mountNode,
// );