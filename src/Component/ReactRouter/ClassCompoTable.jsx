import React, { Component } from 'react'
import HocCompo from './HocCompo';
import { Link } from 'react-router-dom';
import { NavigateFun } from './ParamsFun';

class ClassCompoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
        }
        console.log(this.props);
    }

    componentDidMount() {
        const Getarr = JSON.parse(localStorage.getItem("arrClass"))
        this.setState({ arr: Getarr ? Getarr : [] })
    }


    deletetdata = (id1) => {
        const ind = this.state.arr.findIndex((x) => x.id === id1);
        this.state.arr.splice(ind, 1);
        this.setState({ arr: [...this.state.arr] });
        localStorage.setItem("arrClass", JSON.stringify(this.state.arr));

    }

    // editdata = (id1)=>{
    //     const ind =  this.state.arr.find((x)=> x.id === id1);
    //     this.setState({img:ind.file})
    //      this.setState({obj: ind});








    render() {
        return (
            <>


                <table className='table table-white align-baseline container mt-5 '>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Profile</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Skill</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.state.arr)}
                        {this.state.arr.map((x, i) => (
                            <tr key={i}>
                                <td>{x.id}</td>
                                <td><img src={x.file} alt="" style={{ height: "50px", width: "50px", objectFit: "cover" }} /></td>
                                <td>{x.fname}</td>
                                <td>{x.lname}</td>
                                <td>{x.pass}</td>
                                <td>{x.gender}</td>
                                <td>{x.skill.join(",")}</td>
                                <td>
                                    <button className='btn btn-danger me-3' onClick={() => this.deletetdata(x.id)}>Delete</button>
                                  <Link to={`/classform/${x.id}`}><button className='btn btn-warning'  >Edit</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </>
        )
    }
}


export default HocCompo(ClassCompoTable)