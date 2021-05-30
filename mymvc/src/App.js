// import logo from './logo.svg';
import './components/todo.css';
import Nav from './components/nav';
import All from './components/All';
import Completed from './components/Completed'
import Pending from './components/Pending';
import Todo from './components/Top';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sample from './components/count';
// import {myTodo} from './Actions/index';
import {useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';
import  AllDel  from './components/AllDel';
import { Footer } from './components/footer';
import { render } from '@testing-library/react';
import Add from './components/Add';

class App extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render(){
      // let look = 'footer'
      // const items = this.props.items
      // if(items.length ===0){
      //     look= 'footer1'
      // }
    return (<div style={{backgroundColor: '#f5f5f5'}} className='sample'>

   
    {/* <Completed/> */}
      
              
    <Router>
        <Switch>
        <Route path='/' exact component={Completed}/>
        <Route path='/feedbacks' exact component={Completed}/>
        <Route path='/feedbacks/new' exact component={Add}/>
        {/* <Route path='/cart/' exact component={checkout}/> */}



        </Switch>
      </Router>  
                      
        

        </div>
  );
  }
  
}

// const mapStateToProps= state =>{
//   const {items} =state.todo
//   return{
//    items   
//   }
// }
// const mapDispatchToProps = (dispatch) =>{
//   return{
//       myTodo : (payload)=> dispatch(myTodo(payload)),
//       // changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
//       // removeIndex: (index)=> dispatch(removeIndex(index)),
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)

export default App;
