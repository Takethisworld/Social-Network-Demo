import {combineReducers, createStore,compose,applyMiddleware} from 'redux';
import postReducer from './postReducer';
import dialogReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './appReducer';
import { reducer as formReducer} from 'redux-form';



let reducers = combineReducers({
   profilePage: postReducer,
    messagePage: dialogReducer,
    sidebar: sidebarReducer,
    userPage: userReducer,
    auth:authReducer,
    app:appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__=store;

export default store;