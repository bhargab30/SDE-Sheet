import React , {useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import QstnList from './QstnList';

function ListTable(sheet) {
  

  return (
    <div>
      <Route path='/sheet1/array' children={<QstnList id={0}/>} />
      <Route path='/sheet1/matrix' children={<QstnList id={1}/>} />
      <Route path='/sheet1/string' children={<QstnList id={2}/>} />
      <Route path='/sheet1/search' children={<QstnList id={3}/>} />
      <Route path='/sheet1/linked' children={<QstnList id={4}/>} />
      <Route path='/sheet1/binary' children={<QstnList id={5}/>} />
      <Route path='/sheet1/bst' children={<QstnList id={6}/>} />
      <Route path='/sheet1/greedy' children={<QstnList id={7}/>} />
      <Route path='/sheet1/backtracking' children={<QstnList id={8}/>} />
      <Route path='/sheet1/stacks' children={<QstnList id={9}/>} />
      <Route path='/sheet1/heap' children={<QstnList id={10}/>} />
      <Route path='/sheet1/graph' children={<QstnList id={11}/>} />
      <Route path='/sheet1/trie' children={<QstnList id={12}/>} />
      <Route path='/sheet1/dynamic' children={<QstnList id={13}/>} />
      <Route path='/sheet1/bit' children={<QstnList id={14}/>} />


      <Route path='/sheet2/array' children={<QstnList id={0}/>} />
      <Route path='/sheet2/matrix' children={<QstnList id={1}/>} />
      <Route path='/sheet2/string' children={<QstnList id={2}/>} />
      <Route path='/sheet2/search' children={<QstnList id={3}/>} />
      <Route path='/sheet2/linked' children={<QstnList id={4}/>} />
      <Route path='/sheet2/binary' children={<QstnList id={5}/>} />
      <Route path='/sheet2/bst' children={<QstnList id={6}/>} />
      <Route path='/sheet2/greedy' children={<QstnList id={7}/>} />
      <Route path='/sheet2/backtracking' children={<QstnList id={8}/>} />
      <Route path='/sheet2/stacks' children={<QstnList id={9}/>} />
      <Route path='/sheet2/heap' children={<QstnList id={10}/>} />
      <Route path='/sheet2/graph' children={<QstnList id={11}/>} />
      <Route path='/sheet2/trie' children={<QstnList id={12}/>} />
      <Route path='/sheet2/dynamic' children={<QstnList id={13}/>} />
      <Route path='/sheet2/bit' children={<QstnList id={14}/>} />
    </div>

  )
}

export default ListTable