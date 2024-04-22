import React, { useEffect, useState } from 'react'
import HocCompo from './HocCompo'
import { Link } from 'react-router-dom';
import { ZoomIn, ZoomOut } from './ZoomInFun';

function RouterTable() {
    const [arr, setArr] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        const storedArr = JSON.parse(localStorage.getItem("arr"));
        const count = JSON.parse(localStorage.getItem("count"));
        if (storedArr || count) {
            setArr(storedArr);
            setCount(count);
        }
    }, []);


    const deldata = (id1) => {
        if (window.confirm("Are you sure to delet row")) {
            let index = arr.findIndex((x) => x.id === id1);
            arr.splice(index, 1);
            setArr([...arr])
            localStorage.setItem("arr", JSON.stringify(arr));
            localStorage.setItem("count", JSON.stringify(count));
        }
    }
    return (
        <>
            <table className="table container align-middle  mt-3 shadow-lg  mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Profile</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        arr.map((x, i) => {
                            return <tr key={i}>
                                <td>{x.id}</td>
                                <td ><img src={x.profile} onClick={() => ZoomIn(x.profile)} alt="" style={{ width: "50px", height: "50px", objectFit: "cover", cursor: "pointer" }} /></td>
                                <td>{x.fname}</td>
                                <td>{x.lname}</td>
                                <td>{x.email}</td>
                                <td>{x.date}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies.join(",")}</td>
                                <td>
                                    <button onClick={() => deldata(x.id)} className="btn btn-danger">Delete</button>
                                    <Link className="btn btn-warning ms-2" to={`/form/${x.id}`} >Edit</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='ZoomDiv'>
                <article class="card">
                    <div className='ZoomImg'>
                    </div>
                    <span class="span top"></span>
                    <span class="span right"></span>
                    <span class="span bottom"></span>
                    <span class="span left"></span>
                </article>

                <div className='ZoomOut' onClick={() => ZoomOut()}>X</div>
            </div>

        </>
    )
}

export default HocCompo(RouterTable)