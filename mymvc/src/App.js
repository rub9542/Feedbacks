import Completed from './components/Completed'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Add from './components/Add';

function App() {
 
 
     
    return (<div style={{backgroundColor: '#f5f5f5'}} className='sample'>

   
      
              
    <Router>
        <Switch>
        <Route path='/' exact component={Completed}/>
        <Route path='/feedbacks' exact component={Completed}/>
        <Route path='/feedbacks/new' exact component={Add}/>



        </Switch>
      </Router>  
                      
        

        </div>
  );
  
  
}

export default App;
