import React, { Component } from 'react'

export default class ClassCompoCrud extends Component {
    constructor() {
        super();
        this.state = {
            obj: {skill:[]},
            arr:  [],
            blank: {skill:[]},
            count:  Math.floor(Math.random()*1000),
            img: "",
            // localStorage.setItem("arrClass",JSON.stringify(this.state.arr));
            // localStorage.setItem("countClass",JSON.stringify(this.state.count));
        }
    }

    

    show = async(e) => {

        if(e.target.type === "checkbox"){
            if(e.target?.checked){
                this.state.obj.skill.push(e.target.value);
            }
            else{
                this.state.obj.skill =  this.state.obj.skill.filter((x) => x !== e.target.value);
            }
                this.setState({obj  : { ...this.state.obj}});      
                this.state.blank[e.target.name] = [];
        }
       else if(e.target.type === "file"){
           const file = e.target.files[0];
           file ?  this.state.obj[e.target.name] =  await this.toBase64(file) : this.state.obj.e.target.name =  "";
           this.setState({img: await this.toBase64(file)})
           e.target.value = "";
        }
        else{
            this.state.obj[e.target.name] = e.target.value;
            this.state.blank[e.target.name] = "";
            }
            
            
        this.setState({obj  : { ...this.state.obj}});
        // console.log(this.state.obj);

    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem("arrClass"))  &&  JSON.parse(localStorage.getItem("countClass")) ){
            this.setState({
                arr : JSON.parse(localStorage.getItem("arrClass")) ,
                count : JSON.parse(localStorage.getItem("countClass")),
            })
        }
    }
    componentDidUpdate(a,b){
        localStorage.setItem("arrClass",JSON.stringify(this.state.arr));
        localStorage.setItem("countClass",JSON.stringify(this.state.count));
    }
   
    Subdata = () => {
      
   
    
         if(this.state.obj.id){
              const ind = this.state.arr.findIndex((x)=> x.id === this.state.obj.id)
             this.state.arr.splice(ind,1,this.state.obj);
         }
         else{
            this.setState({count : this.state.count+Math.floor(Math.random()*1000 + 100)});
            this.state.obj.id = this.state.count;
    
            this.setState({blank  : { ...this.state.blank},obj  : { ...this.state.obj}});
            // this.setState({});
            this.state.arr.push(this.state.obj);
         }
              
        this.setState({arr : [...this.state.arr]});
       
        this.setState({obj  : this.state.blank,img:""});
        // this.setState({})

    }

     toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    deletetdata = (id1)=>{
        const ind =  this.state.arr.findIndex((x)=> x.id === id1);
         this.state.arr.splice(ind,1);
         this.setState({arr: [...this.state.arr]});
    
     }

    editdata = (id1)=>{
        const ind =  this.state.arr.find((x)=> x.id === id1);
        this.setState({img:ind.file})
         this.setState({obj: ind});
 
     }
    
    render() {
        return (
            <>

                <form action="" className='w-50 mx-auto shadow-lg p-3 my-4'>
                    <h1>Form</h1>
                    <div className='mt-2'>
                        <label htmlFor="">First Name</label><br />
                        <input type="text" name='fname' className='w-100' onChange={this.show} value={this.state.obj.fname}/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">Last Name</label><br />
                        <input type="text" name='lname' className='w-100' onChange={this.show} value={this.state.obj.lname}/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">Password</label><br />
                        <input type="password" name='pass' className='w-100' onChange={this.show}  value={this.state.obj.pass}/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">Gender : </label><br />
                        <input type="radio" className='ms-2' name='gender' value={"Male"} onChange={this.show} checked={this.state.obj.gender === "Male"}/> Male
                        <input type="radio" className='ms-2' name='gender' value={"Female"} onChange={this.show} checked={this.state.obj.gender === "Female"}/> Female
                        <input type="radio" className='ms-2' name='gender' value={"Other"} onChange={this.show} checked={this.state.obj.gender === "Other"}/> Other
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">Skill : </label><br />
                        <input type="checkbox" className='ms-2' name='skill' value={"Java-script"} onChange={this.show} checked={this.state.obj.skill.includes("Java-script")}/> Java-script
                        <input type="checkbox" className='ms-2' name='skill' value={"React-js"} onChange={this.show} checked={this.state.obj.skill.includes("React-js")}/> React-js
                        <input type="checkbox" className='ms-2' name='skill' value={"Node-js"} onChange={this.show} checked={this.state.obj.skill.includes("Node-js")}/> Node-js
                        <input type="checkbox" className='ms-2' name='skill' value={"Angular-js"} onChange={this.show} checked={this.state.obj.skill.includes("Angular-js")}/> Angular-js
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">Profile : </label><br />
                        <input type="file" name='file' onChange={this.show}/>
                        <img src={this.state.img} className='ms-4'  style={{height:"100px",width:"100px"}}/>
                    </div>
                    <div className="mt-3">
                        <button type='button' className='btn btn-success ' onClick={this.Subdata}>Submit</button>
                    </div>
                </form>

                <table className='table table-dark container  '>
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
                        {this.state.arr.map((x,i) => (
                            <tr key={i}>    
                                <td>{x.id}</td>
                                <td><img src={x.file} alt="" style={{height:"50px",width:"50px",objectFit:"cover"}}/></td>
                                <td>{x.fname}</td>
                                <td>{x.lname}</td>
                                <td>{x.pass}</td>
                                <td>{x.gender}</td>
                                <td>{x.skill.join(",")}</td>
                                <td>
                                    <button className='btn btn-danger me-3' onClick={()=>this.deletetdata(x.id)}>Delete</button>
                                    <button className='btn btn-warning' onClick={()=>this.editdata(x.id)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </>
        )
    }
}