import React, { useState } from 'react';

const SignUp = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ username, profession, password });
    setUsername('');
    setProfession('');
    setPassword('');
  };

  return (
    <div className="card p-3 mb-4">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="form-control" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} required className="form-control" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
