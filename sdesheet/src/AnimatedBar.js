import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './AnimatedBar.css';

function AnimatedBar({percentage}) {
  return (
    <div className='progress-bar'>
        <ProgressBar animated now={percentage}/>
    </div>
    
  )
}

export default AnimatedBar