import { combineReducers } from "redux";
//초기상태로 들어갈 값

const initMember = {
  members: [
    {
      name: 'Alex',
      position: 'Co-founder',
      image: '/img/21dcee5f3518b517dd549d33ca245755.jpeg',
      alt: 'TEAM1',
    },
    {
      name: 'Jess',
      position: 'Art director',
      image: '/img/0a83df4119de27d5b9833af30d52d16e.jpeg',
      alt: 'TEAM2',
    },
    {
      name: 'Max',
      position: 'Lead architect',
      image: '/img/1c555928970e09d1f70439b7ec4b7c1d.jpeg',
      alt: 'TEAM3',
    },
    {
      name: 'Peter',
      position: 'Graphic designer',
      image: '/img/1e7433a4b487f7fd43a83ca4cb3a02d6.jpeg',
      alt: 'TEAM4',
    },
    {
      name: 'Jim',
      position: 'Project manager',
      image: '/img/0e135fe9e52ab7fcd2260517f6759d6c.jpeg',
      alt: 'TEAM4',
    },
    {
      name: 'Ann',
      position: 'CEO',
      image: '/img/3f8d8f2ab645f6f8a2a0d4d37a423399.jpeg',
      alt: 'TEAM4',
    }
  ],
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