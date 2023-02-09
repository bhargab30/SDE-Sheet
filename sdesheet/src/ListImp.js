import React from 'react'
import { useStateValue } from './StateProvider';
import DisplayIQstn from './DisplayImpQstn';
import { Route, useLocation } from 'react-router-dom';

function ListImp() {
  const location = useLocation();

  const pathName = location.pathname;
    const [{item1},dispatch] = useStateValue();
  return (
    <div>
        <Route path={pathName} children={<DisplayIQstn data={item1} />} />
    </div>
  )
}

export default ListImp