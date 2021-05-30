import { Comment, List } from 'antd';
import React from 'react'
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export default function Completed()  {
  const items = useSelector(state => state.todo.items)
  console.log("at display", items)
  return (
    <div>
      <Link to="/feedbacks/new">
        <button>New</button>
      </Link>
      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item => (
          <li className='list-item'>              
            <Comment
              author={<h3>{item.name}</h3>}
              content={item.comment}
            />
          </li>
        )}
      />
    </div>
  )    
}