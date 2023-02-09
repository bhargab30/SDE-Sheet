import React , {useState,useEffect} from 'react';
import './QstnList.css';
import { useStateValue } from './StateProvider';
import { db } from './firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from 'react-bootstrap/Spinner';
import './BabbarList.css';

import notesLogo from './img/note.png';
import webLogo from './img/weblogo.png';
import { useLocation } from 'react-router-dom';







function QstnList({id}) {

  const path = useLocation();
  const pathName = path.pathname;
  console.log("sheet no>>",pathName[6])

  const [loading,setLoading] = useState(false);

  const [{user,list},dispatch] = useStateValue();

  const [currTitle,setCurrTitle] = useState("");
  const [currNotes,setCurrNotes] = useState("");
  const [newNotes,setNewNotes] = useState("");


  
  const [currId,setCurrId] = useState(0);



  const [gArray, setGArray] = useState([]);

 

  
  const showToastMessage = () => {
    toast.success('Updating !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        
    });
};

  

  useEffect(() => {
    const previousUrl = window.location.referrer;
    if (user) {
      db.collection("users")
      .doc(user?.uid)
      .get()
      .then(doc => {
          if (doc.exists) {
            const babbarList = doc.data().babbarList;
            const striverList = doc.data().striverList;
            const amazonList = doc.data().amazonList;
            console.log(list);
            setGArray(pathName[6]==='1' ? babbarList : striverList);
            
            
          } else {
            console.log("No such document!");
          }
        });
    }
  }, [user]);

  function showNotes(ind) {

    setCurrId(ind);
    gArray[id].questions.map((basketItem,i) => {
      if (i === ind) {
        
        setCurrNotes(basketItem.Notes);
        console.log("curr_note=",basketItem.Notes);
        setCurrTitle(basketItem.Problem);
        document.getElementsByClassName('note-section')[0].value = basketItem.Notes;
        console.log("curr_title=",currTitle);
      }
      return basketItem;
    });
    
    
		document.getElementsByClassName('note-area')[0].style.display = 'flex';
	}


  function saveAndExitNotes() {
		document.getElementsByClassName('note-area')[0].style.display = 'none';
		
	}

  function close() {
		document.getElementsByClassName('note-area')[0].style.display = 'none';
		
	}





  async function onAdd (){
    const note = document.getElementsByClassName('note-section')[0].value;
    
    
    gArray[id].questions[currId].Notes = note;

    
    const updatedArray = gArray;
    
    setGArray(updatedArray);
    
    console.log("curr=",newNotes);

    document.getElementsByClassName('note-area')[0].style.display = 'none';
    
    
    if(pathName[6]==='1'){
      await db.collection("users")
        .doc(user?.uid)
        .update({babbarList: gArray});
    }
    else {
      await db.collection("users")
        .doc(user?.uid)
        .update({striverList: gArray});
    }

    
  };

  
  async function handleCheckboxChange(selectedId) {

    gArray[id].questions.map((basketItem,i) => {
      if (i === selectedId) {
        basketItem.Done = !basketItem.Done;
        gArray[id].doneQuestions = (basketItem.Done ? gArray[id].doneQuestions + 1 : gArray[id].doneQuestions - 1);
        gArray[0].totQuestion = (basketItem.Done ? gArray[0].totQuestion + 1 : gArray[0].totQuestion - 1);

      }
      return basketItem;
    });

    const updatedArray = gArray;
    
    setGArray(updatedArray);
    setLoading(true);
    
    if(pathName[6]==='1'){
      await db.collection("users")
        .doc(user?.uid)
        .update({babbarList: updatedArray});
    }
    else {
      await db.collection("users")
        .doc(user?.uid)
        .update({striverList: updatedArray});
    }
    setLoading(false);
  }
  

  
  return (
    <div className='qstnList'>
      
      <div className='qstnListHead'>Master <span>{gArray[id]?.topicName}</span> By Solving These Questions</div>
      <div className='qstnListHead'>
        {gArray.length > 0 ? (
          <div> {gArray[id].doneQuestions}/{gArray[id].questions.length} Done</div>
          ) : (<div> 0/0 Done</div>)}
        
        </div>
        <>
          <div className='note-area'>
            <div className='note-container'>
            <button class="btn--close-modal" onClick={saveAndExitNotes}>&times;</button>
              <div className='question-title' style={{ color: 'black' }}>{currTitle}</div>
              <textarea maxLength='9432' className='note-section' placeholder='Add your notes'></textarea>
              <div className='button-container'>
                <button className='note-save' onClick={onAdd}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
        
      
      
      {loading && <ToastContainer/>}

      
      { gArray.length > 0 ?(<table className='table'>
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Link</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
        {gArray[id].questions.map((item,i) =>(
          <tr >
            <td style={{backgroundImage: item.Done ? "linear-gradient(to top left, #39b385, #9be15d)" : ""}}>
              <input type="checkbox"  checked = {item.Done} onChange={() => handleCheckboxChange(i)} onClick={showToastMessage}/>
            </td>
            <td style={{backgroundImage: item.Done ? "linear-gradient(to top left, #39b385, #9be15d)" : ""}}>{item.Problem}</td>
            <td style={{backgroundImage: item.Done ? "linear-gradient(to top left, #39b385, #9be15d)" : ""}}>
              <div className = 'urlLink'>
                <a href={item.URL} target="_blank"><img src={webLogo}></img></a>
              </div>
            </td>
            <td style={{backgroundImage: item.Done ? "linear-gradient(to top left, #39b385, #9be15d)" : ""}}>
              
              <div onClick={() => showNotes(i)} className = 'notesLogo'>
                <img src={notesLogo}></img>
              </div>
                
            </td>
            
          </tr>

        ))}


        
        </tbody>
      </table>) : (<div className="intro">
                <Spinner animation="border" role="status"></Spinner>
                <span className="visually-hidden">Loading...</span>
              </div>)}
    </div>
  
)
};



export default QstnList