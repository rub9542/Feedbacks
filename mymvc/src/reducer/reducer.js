import { combineReducers } from 'redux';



const INITIAL_STATE ={
    items:[
        
    ]
}

const todoReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
       
        case 'ITEM_ADDED':
            const newtemp=action.payload
            console.log("new data", newtemp)
            console.log("existing data",state.items )
            const list=[...state.items]
            const newlist=[newtemp, ...list]
            console.log("final", newlist)
            return{
                ...state,
                items:newlist
            }
        
      
        
     
       
        
        
        default: return state;
    }
}
export default combineReducers({
    todo: todoReducer,
})