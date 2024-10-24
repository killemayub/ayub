import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="card p-3 mb-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">
            <strong>{user.username}</strong> - {user.profession}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
