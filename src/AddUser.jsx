import React, { useState } from 'react';
import Header from './Header';
import { useNavigate, Link } from 'react-router-dom';

const AddUser = (props) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    instaId: ""
  });

  const inputChangedHandler = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  const onFormSubmitted = (e) => {
    e.preventDefault();
    props.addUserHandler(user);
    setUser({id:0,name:"",instaId:""});
    navigate("/");
  }

  const navigate = useNavigate();

  const {name, instaId} = user;
  
  return (
    <div>
        <Header heading="Add Instagram Contact"/>
        <div className="container mt-3" >
          <Link to={"/"}>
            <button type='button' className='btn btn-primary'> Back</button>
          </Link>
          <form onSubmit={ onFormSubmitted} className='mt-3'>
            <label htmlFor="name" className='form-label'>
              Name:{""}
            </label>
            <br />
            <input type="text" name="name" id='name' className='form-control' onChange={inputChangedHandler}/>
            <br />
            <br />
            <label htmlFor="instaId" className='form-label'>
              Insta Id:{""}
            </label>
            <br />
            <input type="text" name="instaId" id='instaId' className='form-control' onChange={inputChangedHandler}/>
            <br />
            <br />
            <div className="container">
              <div className="card-body">
                <div className="crad-header">
                  <h2>Instagram user to be added:</h2>
                </div>
                <div className="card-text">
                  <div style={{ color: "red"}}>Name: {name}</div>
                  <div style={{ color: "red"}} className='mt-3 mb-3'>Insta_Id: {instaId}</div>
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-danger'>Add</button>
          </form>
        </div>
    </div>
  )
}

export default AddUser;