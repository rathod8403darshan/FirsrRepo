// import React from 'react'
import React, { useState } from 'react'
import TableData from './TableData';

function Form1() {


    const [arr, setArr] = useState(JSON.parse(localStorage.getItem("arr1")) || []);
    const [Img, setImg] = useState("");
    const [obj, setobj] = useState({ skill: [] });
    const [blank, setblank] = useState({ skill: [] });
    let [count, setcount] = useState(JSON.parse(localStorage.getItem("cnt1")) || 0);

    const show = async (e) => {



        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                obj.skill.push(e.target.value)
            }
            else {
                obj.skill = obj.skill.filter((x) => x !== e.target.value);
            }
            setobj({ ...obj });
            blank[e.target.name] = []
        }
        else {
            obj[e.target.name] = e.target.value;
            blank[e.target.name] = "";

        }
        setobj({ ...obj });

    }



    const Data = () => {
        if (obj.id) {
            let obj1 = arr.findIndex((x) => x.id === obj.id);
            arr.splice(obj1, 1, obj);
        }
        else {
            count++;
            setcount(count)
            obj.id = count
            setobj({ ...obj })
            setblank({ ...blank })
            arr.push(obj);

        }
        setArr([...arr])
        localStorage.setItem("cnt1",JSON.stringify(count));
        localStorage.setItem("arr1",JSON.stringify(arr));
        setImg("");
        setobj(blank);

    }


    const deletedata = (id1) => {
        const ind = arr.findIndex((x) => x.id === id1)
        arr.splice(ind, 1)
        setArr([...arr]);
    }
    const edidtdata = (id1) => {
        const ind = arr.find((x) => x.id === id1);
        setImg(ind.file);
        setobj({ ...ind });
    }

    return (
        <>

            <form action="" className='mx-auto shadow-lg p-3 mt-4'>

                <div>
                    <label htmlFor="">Date</label>  <br />
                    <input type="date" name='date' className='w-100' onChange={show} value={obj.date} /><br />

                </div>
                <div>
                    <label htmlFor="">Password</label>  <br />

                    <div className='row px-2'>
                        <input type={"password"} name='pass' className='col-11 p-0 m-0' onChange={show} value={obj.pass} />
                    </div>

                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>  <br />
                    <div className='row px-2'>
                        <input type={"password"} name='cpass' className='col-11 p-0 m-0' onChange={show} value={obj.cpass} />

                    </div>

                </div>
                <div>
                    <label htmlFor="">Gmail</label>  <br />
                    <input type="email" name='mail' className='w-100' onChange={show} value={obj.mail} />

                </div>

                <div>
                    <label htmlFor="">Skill :</label> <br />
                    <input type="checkbox" className='me-2 ms-1' name='skill' value={"node"} onChange={show} checked={obj.skill.includes("node")} />node
                    <input type="checkbox" className='me-2 ms-1' name='skill' value={"React"} onChange={show} checked={obj.skill.includes("React")} />React
                    <input type="checkbox" className='me-2 ms-1' name='skill' value={"Angular"} onChange={show} checked={obj.skill.includes("Angular")} />Angular
                    <input type="checkbox" name='skill' className='me-2 ms-1' value={"core"} onChange={show} checked={obj.skill.includes("core")} />core
                </div>
                <br />

                <button className='btn btn-primary' type='button' onClick={Data}>Submit</button>
            </form>

            <TableData arr={arr}  name={["id","date","pass","mail","skill"]} deletedata={deletedata} edidtdata={edidtdata}/>


        </>

    )
}

export default Form1