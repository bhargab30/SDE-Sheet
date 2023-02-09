import React, { useState, useEffect } from "react";
import './BabbarList.css';
import { useStateValue } from './StateProvider';
import Topics from './Topics';
import { db } from './firebase';
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

import AnimatedBar from './AnimatedBar';

import Login from "./Login";




const BabbarList = () => {
  
  const [{list,user},dispatch] = useStateValue();
  const location = useLocation();

  const pathName = location.pathname;

  const [globalArray, setGlobalArray] = useState([]);


  useEffect(() => {
    if (user) {
      db.collection("users")
      .doc(user?.uid)
      .get()
      .then(doc => {
          if (doc.exists) {
            const babbarList = doc.data().babbarList;
            const striverList = doc.data().striverList;
            const amazonList = doc.data().amazonList;
            console.log(babbarList);
            
            setGlobalArray(pathName ==='/sheet1' ? babbarList : striverList);
          } else {
            console.log("No such document!");
          }
        });
    }
  }, [user]);
  

  const divisor = pathName ==='/sheet1' ? 470 : 180;

  const percent = ((globalArray[0]?.totQuestion)/divisor)*100;
  const percentTwoPlaces = parseFloat(percent.toFixed(2));

  console.log(globalArray)
  return (
    <div className="intro">
      <h1>Let's Prepare For Placements</h1>
      <h1>Start By Solving These Topics First</h1>
      
      {globalArray.length > 0 ? 
      (<h2>Total Questions Solved : {globalArray[0]?.totQuestion} (<span style={{color:'rgb(18, 230, 53)'}}>{percentTwoPlaces}% Done</span>)</h2>)
      : null
      }
      
      {(globalArray.length > 0 && globalArray[0].totQuestion > 0) ? 
      (<div style={{width: '70%'}}>
        <AnimatedBar percentage={percentTwoPlaces}/>
      </div>
      ) : null}
      
      
      

      {globalArray.length > 0 ? (
        <div className="grid1">
        {globalArray.map((item) => (
          <div className="item1">
            <div className="card-service1">
              <Topics
                topicName={item.topicName}
                doneQuestions={item.doneQuestions}
                questions={item.questions}
                sheet = {pathName[6]}
              />
            </div>
          </div>
        ))}
      </div>
      ) : (<div className="intro">
      <Spinner animation="border" role="status"></Spinner>
      <span className="visually-hidden">Loading...</span>
      
    </div>)}

    {!user ? 
    (
      <div className="not_user">
        Please Log In First
      </div>
    ):null}
      
    </div>
  )
};

export default BabbarList;