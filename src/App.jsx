import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import ShowUser from './ShowUser';
import AddUser from './AddUser';


function App() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Mukesh Yuvi",
      instaId: "my_5353"
    },
    {
      id: 2,
      name: "Elango Yuvi",
      instaId: "el_3131"
    },
  ]);

  const addUserHandler =( newUser) => {
    newUser.id = userList.length > 0 ? userList[userList.length - 1].id + 1 : 1;
    setUserList([...userList, newUser]);
  }


  const deleteUserHandler = (userId) => {
    const newUser = userList.filter(
      (user) => user.id != userId
    );
    setUserList(newUser);
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ShowUser userList={userList} deleteUserHandler={deleteUserHandler}/>}/>
        <Route exact path='/add' element={<AddUser addUserHandler={addUserHandler}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
