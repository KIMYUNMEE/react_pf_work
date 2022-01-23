import { combineReducers } from "redux";
//초기상태로 들어갈 값

const initMember = {
  
  members: [
  
    {image:"process.env.PUBLIC_URL/img/21dcee5f3518b517dd549d33ca245755.jpeg", name:'David', position:'CEO'},
    
    {image:"process.env.PUBLIC_URL/img/21dcee5f3518b517dd549d33ca245755.jpeg", name:'Michael', position:'Developer'}
  ]
}
const memberReducer=(state=initMember, action)=>{
  switch (action.type){  
    case 'SET_MEMBERS' :
      return {...state, members: action.payload}
    default:
      return state;
  }
}

const youtubeReducer=(state={youtube:[]}, action)=>{
  switch (action.type){
    case 'SET_YOUTUBE' : 
      return {...state, youtube: action.payload}
    default: 
      return state;
  }
}

const reducers = combineReducers({ 
  memberReducer, youtubeReducer
})

export default reducers;