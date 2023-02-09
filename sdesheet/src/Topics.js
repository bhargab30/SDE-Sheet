import React, {useState} from 'react';
import './Topics.css';
import { Link } from 'react-router-dom';

import AnimatedBar from './AnimatedBar';

function Topics({topicName,doneQuestions,questions,sheet}) {
  const topicNameUrl = topicName.split(" ").shift().toLowerCase(); 

  const percent = (doneQuestions/questions.length)*100;
  const percentint = Math.floor(percent);

  return (
    <Link to={`sheet${sheet}/${topicNameUrl}`} style={{ textDecoration: 'none' }}>
      <div className='topic'>
        <div className='topic_head'>
            <span className='topicName'>{topicName}</span>
            <span className='solve'>{doneQuestions===questions.length ? 'Done!' : 'Solve It!'}</span>
        </div>
        <div className='topic_qstn'>
            Total Questions {questions.length}
        </div>

        {doneQuestions===0 ? 
        null
        :
        <div className='topic_remain'>
        {questions.length - doneQuestions} More to go
        </div>
        }

        
        {doneQuestions===0 ? 
        <div className='topic_remain1'>
          Start Now!
        </div>
        :
        <div>
          <div className='topic_remain'>{percentint}% Done</div>
          <AnimatedBar percentage={percent}/>
        </div>
        
        }
        
    </div>
    </Link>
    
  )
}

export default Topics