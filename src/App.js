import React,{Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initialThunk} from './component/redux/appReducer';
import {Route, withRouter } from 'react-router-dom';
import LoginPage from './component/Login/Login';
import store from './component/redux/redux-store'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './component/Header/headerContainer';
import Music from './component/Music/Music';
import Navbar from './component/Navbar/Navbar';
import UsersContainer from './component/Profile/Friend/UsersContainer';
import Setting from './component/Setting/Setting';
import Preloader from './component/common/preloader/Preloader';
import { withSuspense } from './component/HOC/withSuspense';


const  DialogContainer = React.lazy (()=>import ('./component/Diologs/DialogContainer'));
const ProfileContainer = React.lazy(()=>import('./component/Profile/profileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initialThunk()
  }
  render() {
    if (!this.props.initialized){
      return <Preloader/>
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-dialog'>
            <Route path='/dialogs' render={withSuspense(DialogContainer)}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/music' render={() => <Music />} />
            <Route path='/setting' render={() => <Setting />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </div>
    );
  }
}

let mapStateToProps=(state)=>({
  initialized: state.app.initialized
})


let AppContainer = compose(withRouter,connect(mapStateToProps, { initialThunk }))(App);

const JsReactApp =(props)=>{
  return(<HashRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>)
}

export default JsReactApp;