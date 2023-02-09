import React from 'react';
import './Leetcode.css';
import googleLogo from './img/googlelogo.svg';
import microLogo from './img/microsoftlogo.svg';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

import AmazonList from "./AmazonList";

function Leetcode() {
    const [{},dispatch] = useStateValue();
    const addAmazon = () =>{
        dispatch({
            type:'ADD_TO_IMP_QSTN',
            item : AmazonList,
        })
    }

    const addGoogle = () =>{
        dispatch({
            type:'ADD_TO_IMP_QSTN',
            item : AmazonList,
        })
    }

    const addMicrosoft = () =>{
        dispatch({
            type:'ADD_TO_IMP_QSTN',
            item : AmazonList,
        })
    }

  return (
    <div className='leetcodeqstns'>
        <div className='title__leet'>Top LeetCode Questions Asked By Companies</div>
        
        <div className="grid">
            <Link to="/amazon/topquestions" className='styleLink'>
                <div className = "item" onClick={addAmazon}>
                    <div className="card-service">
                        <div className="header">
                            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                        </div>
                        
                    </div>
                </div>
            </Link>
            
            <Link to="/google/topquestions" className='styleLink' >
                <div className = "item" onClick={addGoogle}>
                    <div className="card-service">
                        <div className="header">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
                        </div>
                        
                    </div>
                </div>
            </Link>
            
            <Link to="/microsoft/topquestions" className='styleLink'>
                <div className = "item" onClick={addMicrosoft}>
                    <div className="card-service">
                        <div className="header">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlJ6No3s5MBB3r7JyNzE7_fIR_24RYS_FcXC8qoiL4lvtuSghgUzYC7jBmGflwLWTfZg&usqp=CAU" />
                        </div>
                        
                    </div>
                </div>
            </Link>
        </div>
    </div>
    
  )
}

export default Leetcode;