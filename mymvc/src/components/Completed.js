import { Card, Col,Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React from 'react'
import {connect,  useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export default function Completed()  {
    const items = useSelector(state => state.todo.items)
    console.log("at display", items)
    return (
            <div>
                <Link to="/feedbacks/new">
                <button>New</button></Link>
                 <List
    className="comment-list"
    itemLayout="horizontal"
    dataSource={items}
    renderItem={item => (
      <li className='list-item'>
        <Comment
        hoverable
          author={item.name}
          content={`Comment is ${item.comment}`}
        />
      </li>
    )}
  />
            </div>
        )
    
}
// const mapStateToProps= state =>{
//     const items =state.todo.items
//     console.log("at display1",items )
//     return{
//      items   
//     }
// }
// export default connect(mapStateToProps,null)(Completed)


// ReactDOM.render(
//  ,
//   mountNode,
// );