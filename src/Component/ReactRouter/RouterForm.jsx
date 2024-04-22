import React, { useEffect, useState } from 'react'
import HocCompo from './HocCompo';
import { useParams,useNavigate} from "react-router-dom"

function RouterForm() {
    const navigate = useNavigate();
    const [img1, setImg1] = useState("")
    const [obj, setobj] = useState({ hobbies: [] });
    const [blankobj, setblankobj] = useState({ hobbies: [] });
    let [arr, setarr] = useState([]);
    let [count, setcount] = useState(0);
    const params = useParams();


    const getData = async (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                obj.hobbies.push(e.target.value);
            }
            else {
                obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value);
            }
            blankobj.hobbies = [];
        }
        else if (e.target.type === "file") {
            let profile = e.target.files[0];
            obj[e.target.name] = await toBase64(profile);
            setImg1(await toBase64(profile));
            blankobj.profile = "";
            e.target.value = "";
        }
        else {
            obj[e.target.name] = e.target.value
            blankobj[e.target.name] = ''
        }

        setobj({ ...obj });
    }

    useEffect(() => {
            const obj = JSON.parse(localStorage.getItem("arr"))?.find((x) => x.id == params.id);
            if (obj) {
                setobj(obj);
                setImg1(obj.profile);
            }
    }, [params.id]);

    const addData = () => {

        if (obj.id) {
            const index = arr.findIndex((x) => x.id === obj.id)
            arr.splice(index, 1, obj);
            navigate("/table");
        }
        else {
            count++;
            setcount(count)
            arr.push(obj)
            obj.id = count;
            setobj({ ...obj })
            setblankobj({ ...blankobj });
        }

        setarr([...arr])
        localStorage.setItem("arr", JSON.stringify(arr));
        localStorage.setItem("count", JSON.stringify(count));
        setobj(blankobj);


        setImg1("");
    }

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem("arr"));
        const cnt = JSON.parse(localStorage.getItem("count"));
        if (arr || cnt) {
            setarr(arr);
            setcount(cnt);
        }
    }, []);


    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    return (
        <>
            <div className="container mt-5 bg-light text-dark shadow-lg  p-3">
                <form action="" >
                    <label htmlFor="">First Name</label> <br />
                    <input className="w-100" type="text" name="fname" onChange={getData} value={obj.fname} />
                    <br />
                    <label htmlFor="">Last Name</label>
                    <br />
                    <input className="w-100" type="text" name="lname" onChange={getData} value={obj.lname} />
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input className="w-100" type="email" name="email" onChange={getData} value={obj.email} />
                    <br />
                    <label htmlFor="">Date</label>
                    <br />
                    <input className="w-100" type="date" name="date" onChange={getData} value={obj.date} />
                    <br />
                    <label htmlFor="">Gender</label>
                    <br />
                    <input type="radio" name="gender" value={"male"} onChange={getData} checked={obj.gender === "male"} />
                    Male
                    <input type="radio" name="gender" value={"female"} onChange={getData} checked={obj.gender === "female"} />
                    Female
                    <br />
                    <label htmlFor="" className="my-3 me-4">File :</label>
                    <button className="btn" type="button">
                        <input type="file" className="" name="profile" onChange={getData} accept={obj.profile} /></button> 
                    <img src={img1} alt="" style={{width:"70px",height:"60px",objectFit:"cover"}} />
                    <br />
                    <label htmlFor="">Hobbies</label>
                    <br />
                    <input className='ms-2 me-1' type="checkbox" name="hobbies" value={"reading"} onChange={getData} checked={obj.hobbies.includes("reading")} />
                    Reading
                    <input className='ms-2 me-1' type="checkbox" name="hobbies" value={"tarveling"} onChange={getData} checked={obj.hobbies.includes("tarveling")} />
                    Traveling
                    <input className='ms-2 me-1' type="checkbox" name="hobbies" value={"playing"} onChange={getData} checked={obj.hobbies.includes("playing")} />
                    Palying
                    <input className='ms-2 me-1' type="checkbox" name="hobbies" value={"gaming"} onChange={getData} checked={obj.hobbies.includes("gaming")} />
                    Gaming
                    <br />

                    <button type="button" onClick={addData} className="btn btn-info mt-3">Submit</button>
                </form>
            </div>

        </>
    )
}

export default HocCompo(RouterForm)