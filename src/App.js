import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CovidDate from './CovidDate'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import LatestNotices from './components/LatestNotices/LatestNotices';
import Notices from './components/Notices/Notices';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';

function App() {

const [covidList, setcovidList] = useState([])
const [token, settoken] = useState("")
 

const login =async()=>{
  verifyLogin()
  window.location.href='/App'
}
const verifyLogin =async()=>{
 
   localStorage.setItem('token','1234')
   if(localStorage.getItem('token')==='1234'){
    
   }
  

}

  return (
    
    <div className="App">
    <Router>
    <Route  path= {process.env.PUBLIC_URL+ '/App/'}>
      <Navigation/>
      </Route>
      <Route  path={process.env.PUBLIC_URL+ '/App/Home'}>
      <Header/>
      </Route>
      <Route exact path={process.env.PUBLIC_URL+ '/App/WorldInfo'}>
      <Home list={covidList} token={token}/>
      </Route>
      <Route exact path={process.env.PUBLIC_URL+ '/'}>
      <Login  login={login}/>
      </Route>

      <Route path={process.env.PUBLIC_URL+ "/App/Home"}>
        <LatestNotices/>
      </Route>
      <Route path={process.env.PUBLIC_URL+ "/App/Notices"}>
        <Notices/>
      </Route>
      <Route path={process.env.PUBLIC_URL+ "/App/Profile"}>
        <Profile/>
      </Route>
    </Router>
    </div>
  );
}

export default App;
