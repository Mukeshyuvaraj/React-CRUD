import React from 'react';
import Header from './Header';


const ShowUser = ({userList, deleteUserHandler}) => {
    const onDeletedClick = (userId) => {
        deleteUserHandler(userId);
    };

  return (
    <div>
        <Header heading="Instagram Contact List"/>
        <div className='container mt-3'>
            <div className='card bg-success text-white text-center'>
                <div className='card-body'>
                    <div className='card-header'>
                        <h2>Instagram Contact Listing</h2>
                    </div>
                    <div className='card-text'>
                        <table className='table table-bordered'>
                            <thead className='table-warning text-white'>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>InstaId</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map(item => {
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.instaId}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={() => {onDeletedClick(item.id)}}>Delete</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-text">
                        <Link to='/add'><button type='button' className='btn btn-danger'>Add</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowUser;