import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserList from './components/UserList';
import Chat from './components/Chat';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <SignUp addUser={addUser} />
      <Login />
      <UserList users={users} />
      <Chat />
    </div>
  );
};

export default App;
