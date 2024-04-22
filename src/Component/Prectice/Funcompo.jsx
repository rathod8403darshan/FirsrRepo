import Raect , {useState} from "react"

function Funcompo () {
    // const [count,setcount] = useState(["2fe"]);  
    const [count,setcount] = useState([]);  
    const [inp,setinp] = useState("");  

    // const show = () =>{
    //     count.push(400)
    //     setcount([...count]);
    //     console.log(count)
    // }
   
    const show2= (e) =>{
        setinp(e.target.value);
    }

    const show = () =>{
          
    count.push({inp:inp});
     setcount([...count]);

        
    }

    return (
        <>
                 <h1>Hello</h1>
               
                 <input type="text" onChange={show2} />

                 <table>
                    <thead>
                        <tr>
                           <th>name</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                           <td>{count.forEach((x)=>{
                             console.log(x.inp);
                           })}</td>
                        </tr>

                    </tbody>
                  
                 </table>
                 <button onClick={show}>Click me</button>
        </>
    )
}


export default Funcompo




