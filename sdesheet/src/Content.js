import React, {useEffect,useState} from 'react';
import CircularLoader from './CircularLoader';
import { Link } from 'react-router-dom';
import './Content.css';
import QuestionData, { version } from "./BABBAR450.js";
import QuestionData1, { version1 } from "./StriverList";
import { useStateValue } from './StateProvider';
import { db } from './firebase';

function Content() {
    const [{user},dispatch] = useStateValue();
    const [babbar,setBabbar] = useState([]);
    const [striver,setStriver] = useState([]);
    
    useEffect(() => {
        if (user) {
          db.collection("users")
          .doc(user?.uid)
          .get()
          .then(doc => {
              if (doc.exists) {
                const babbarList = doc.data().babbarList;
                const striverList = doc.data().striverList;
                
                setBabbar(babbarList);
                setStriver(striverList);
              } else {
                console.log("No such document!");
              }
            });
        }
      }, [user]);

    const addBabbar = () =>{
        dispatch({
            type:'ADD_TO_LIST',
            item : QuestionData,
            sheet : 1,
        })
    }

    const addStriver = () =>{
        dispatch({
            type:'ADD_TO_LIST',
            item : QuestionData1,
            sheet : 2,
        })
    }

    console.log("now",babbar);

    const tot_solved = (babbar.length > 0 ? (babbar[0].totQuestion + striver[0].totQuestion) : (0));

  return (
    <div className="content">
            <div className="content__left">
                <Link to="/sheet1" style={{ textDecoration: 'none' }}>
                    <div onClick={addBabbar} className='babbar'>
                        <span className="topicLineOne">
                            450 DSA
                        </span>
                        <span className="topicLineTwo">
                            Problems
                        </span>
                        <h4>Sheet</h4>
                    </div>
                </Link>
                
                <Link to="/sheet2" style={{ textDecoration: 'none' }}>
                    <div onClick={addStriver} className='striver'>
                        <span className="topicLineOne">
                            191 DSA
                        </span>
                        <span className="topicLineTwo">
                            Problems
                        </span>
                        <h4>Sheet</h4>
                    </div>
                </Link>
                

            </div>

            <div className="content__right">
                <div className='left'>
                    <h5>Solved Problems</h5>
                    <CircularLoader current={tot_solved} total={641} />
                </div>
                <div className='stats'>
                    <h5 className='babbar_stats'>450-Sheet {babbar[0]?.totQuestion}</h5>
                    
                    <h5 className='striver_stats'>191-Sheet {striver[0]?.totQuestion}</h5>
                    
                </div>
            </div>
    </div>
  )
}

export default Content