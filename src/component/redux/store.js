import postReducer from './postReducer';
import dialogReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';


let store ={
    _state : {
        profilePage:{post:[
        {id:0, message: 'Hi', likeCounter: 25},
        {id:1, message: 'Hello MZFk', likeCounter:56},
        {id:2, message: 'Whatsup MZFK' ,likeCounter: 31},
        {id:3, message: 'whatsup MZFK ',likeCounter:22}],
        newPostText:"Jedipower",
    },
    
        messagePage:{dialogs:[
            {id:1, name: 'User1'},
            {id:2, name: 'User2'},
            {id:3, name: 'User3'},
            {id:3.5, name: 'User3.5'}
          ],
          messages:[
          {id:1, message: 'Hi'},
          {id:2, message: 'Hello MZFk'},
          {id:3, message: 'Whatsup MZFK'},
          {id:3.5, message: 'whatsup MZFK '},
        ],
        newMessageText:""
    
    },
        sidebar:{friends:[
            {id:0, name:'Alex'},
            {id:1, name:'Mark'},
            {id:2, name:'Chester'}]
        },
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    _callSubscriber(){
        console.log('Sup')
    },
  
   
    dispatch(action){
        this._state.profilePage = postReducer(this._state.profilePage,action);
        this._state.messagePage = dialogReducer(this._state.messagePage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);


        
    }

}




window.state = store;


    export default store;