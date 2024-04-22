// import React from 'react'
import React, { useState } from 'react'
import TableData from './TableData';


function Form1() {

    const [arr, setArr] = useState(JSON.parse(localStorage.getItem("arr")) || []);
    const [Img, setImg] = useState("");
    const [obj, setobj] = useState({ skill: [] });
    const [blank, setblank] = useState({ skill: [] });
    let [count, setcount] = useState(JSON.parse(localStorage.getItem("cnt")) || 0);



    const show = async (e) => {




        if (e.target.type === "file") {
            const file = e.target.files[0];
            obj[e.target.name] = file ? await toBase64(file) : ""
            setImg(await toBase64(file));
            e.target.value = "";
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
        localStorage.setItem("cnt",JSON.stringify(count));
        localStorage.setItem("arr",JSON.stringify(arr));
        setImg("");
        setobj(blank);




    }




    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

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
                    <label htmlFor="">First</label>   <br />
                    <input type="text" name='fname' className='w-100' onChange={show} value={obj.fname} /><br />

                </div>
                <div>
                    <label htmlFor="">Last</label>  <br />
                    <input type="text" name='lname' className='w-100' onChange={show} value={obj.lname} /><br />

                </div>

                <div>
                    <label htmlFor="">Number</label>  <br />
                    <input type="number" name='number' className='w-100' onChange={show} value={obj.number} />

                </div>
                <div>
                    <label htmlFor="">Gender :</label>  <br />
                    <input type="radio" name='gender' className='ms-2 me-2' value={"male"} onChange={show} checked={obj.gender === "male"} />male
                    <input type="radio" name='gender' className='ms-2 me-2' value={"female"} onChange={show} checked={obj.gender === "female"} />Female
                    <input type="radio" name='gender' className='ms-2 me-2' value={"other"} onChange={show} checked={obj.gender === "other"} />other

                </div>

                <div>
                    <label htmlFor="">Select file : </label> <br />
                    <input type="file" name='file' onChange={show} style={{ width: "100px" }} />
                    <img src={Img} alt="" style={{ width: "50px", height: "50px" }} />
                </div>
                <br />

                <button className='btn btn-primary' type='button' onClick={Data}>Submit</button>
            </form>

            <TableData arr={arr} name={["id","fname","lname","number","gender","file"]} deletedata={deletedata} edidtdata={edidtdata}/>
        </>


    )
}

export default Form1