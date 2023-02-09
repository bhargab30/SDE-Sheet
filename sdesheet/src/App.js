import React from 'react';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Content from './Content';
import Leetcode from './Leetcode';
import './App.css';
import BabbarList from './BabbarList';
import ListTable from './ListTable';
import ListImp from './ListImp';

import Login from './Login';
import { useEffect } from 'react';
import { auth,db } from './firebase';
import { useStateValue } from './StateProvider';








function App() {
  const [{user},dispatch] = useStateValue();
  
  useEffect(() =>{
    
    //will only run once when the app loads
    auth.onAuthStateChanged(authUser =>{
      
      if(authUser){
        //the user just logged in/ user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
              <Login/>
          </Route>
          

          
          <Route path='/sheet1/array'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/matrix'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/string'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/search'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/linked'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/binary'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/bst'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/greedy'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/backtracking'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/stacks'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/heap'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/graph'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/trie'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/dynamic'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet1/bit'>
            <Header/>
            <ListTable/>
          </Route>


          <Route path='/sheet2/array'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/matrix'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/string'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/search'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/linked'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/binary'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/bst'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/greedy'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/backtracking'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/stacks'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/heap'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/graph'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/trie'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/dynamic'>
            <Header/>
            <ListTable/>
          </Route>
          <Route path='/sheet2/bit'>
            <Header/>
            <ListTable/>
          </Route>



          <Route path="/sheet1">
              <Header/>
              <BabbarList/>
              
          </Route>

          <Route path="/sheet2">
              <Header/>
              <BabbarList/>
          </Route>





          <Route path="/amazon/topquestions">
            <Header/>
            <ListImp/>
          </Route>

          <Route path="/google/topquestions">
            <Header/>
            <ListImp/>
          </Route>
          <Route path="/microsoft/topquestions">
            <Header/>
            <ListImp/>
          </Route>
          

          {/*default page always at last*/}
          <Route path="/">
            <Header/>
            <Content/>
            <Leetcode/>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App