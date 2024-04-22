import React from 'react';
import { ImageZoomOut, imageZoomIn } from '../../imageService';

function Table({ arr, deletedata, editdata }) {
  return (
    <>
      <div className="w-100">
        <table className='table w-100 table-success'>
          <thead>
            <tr>
              <th>id</th>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Technology</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((x, i) => (
              <tr key={i}>
                <td>{x.id}</td>
                <td><img src={x.profile} alt="" style={{height:"50px", objectFit:"cover"}} onClick={()=>imageZoomIn(x.profile)}/></td>
                <td>{x.fname}</td>
                <td>{x.lname}</td>
                <td>{x.email}</td>
                <td>{x.Password}</td>
                <td>{x.gender}</td>
                <td>{x.tech.join(",")}</td>
                <td>
                  <button onClick={() => deletedata(x.id)} className='btn btn-danger me-2'>Delete</button>
                  <button onClick={() => editdata(x.id)} className='btn btn-warning'>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='imgZoom'>
          <p className='text-white position-fixed top-0 end-0 pe-5 fs-2' style={{cursor:"pointer"}}onClick={ImageZoomOut}>x</p>
          <div className='imgInner'></div>
        </div>
      </div>
    </>
  );
}

export default Table;
