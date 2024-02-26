import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  })


  const getUser = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${params.id}`);
    setUser(response.data.data);
  }

  return ( 
    <div className='col-4 text-center p-5'>
      <img src={user.avatar} alt="" style={{ borderRadius: '50%', width: '100px' }} />
      <h4>{user.first_name} {user.last_name}</h4>
      <h5>{user.email}</h5>
      <div className="row">
          <div className="col-6"><button onClick={() => {this.handleUpdate(user)}} className='btn btn-info btn-sm'>Update</button></div>
          <div className="col-6"><button onClick={() => {this.handleDelete(user)}} className='btn btn-danger btn-sm'>Remove</button></div>
      </div>
  </div>
   );
}

export default User;