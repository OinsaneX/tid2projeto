import React, {useState, useEffect} from 'react';
import './App.css';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import LatestNotices from './components/LatestNotices/LatestNotices';
import Notices from './components/Notices/Notices';
import Profile from './components/Profile/Profile';

function App() {

const [covidList, setcovidList] = useState([])
const [token, settoken] = useState("")
 

const login =async()=>{
  verifyLogin()
  window.location.href= process.env.PUBLIC_URL +'/app'
}
const verifyLogin =async()=>{
 
   localStorage.setItem('token','1234')
   if(localStorage.getItem('token')==='1234'){
    
   }
  

}

  return (
    
    <div className="app">
      <h2>asd</h2>
    <Router basename={process.env.PUBLIC_URL}>
    <Route  path= '/app'>
      <Navigation/>
      </Route>
      <Route  path='/app/Home'>
      <Header/>
      </Route>
      <Route exact path='/app/worldInfo'>
      <Home list={covidList} token={token}/>
      </Route>
      <Route exact path='/'>
      <Login  login={login}/>
      </Route>

      <Route path="/app/home">
        <LatestNotices/>
      </Route>
      <Route path="/app/notices">
        <Notices/>
      </Route>
      <Route path="/app/profile">
        <Profile/>
      </Route>
    </Router>
    </div>
  );
}

export default App;
