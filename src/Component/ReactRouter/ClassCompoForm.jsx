import React, { Component } from 'react'
import HocCompo from './HocCompo';
import { Link } from 'react-router-dom';

 class ClassCompoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: { skill: [] },
            arr: [],
            blank: { skill: [] },
            count: 1,
            img: "",
        };
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

        if(this.props.params.params1.id){
          let FindObj =  JSON.parse(localStorage.getItem("arrClass")).find((x)=> x.id == this.props.params.params1.id )
        //   console.log(FindObj);
         this.setState({obj:FindObj,img:FindObj.file})
        } 
    }
   
    Subdata = () => {
    
         if(this.state.obj.id){
              const ind = this.state.arr.findIndex((x)=> x.id === this.state.obj.id)
             this.state.arr.splice(ind,1,this.state.obj);
             localStorage.removeItem("objLocal");
         }
         else{
            this.state.count += 1;
            this.setState({count : this.state.count});
            this.state.obj.id = this.state.count;

            this.setState({blank  : { ...this.state.blank},obj  : { ...this.state.obj}});
            // this.setState({});
            this.state.arr.push(this.state.obj);
         }
              
        this.setState({arr : [...this.state.arr]});
        localStorage.setItem("arrClass",JSON.stringify(this.state.arr));
        localStorage.setItem("countClass",JSON.stringify(this.state.count));
        this.setState({obj  : this.state.blank,img:""});
    }

     toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    render() {
        return (
            <>

                <form action="" className='w-50 mx-auto bg-white text-dark shadow-lg p-3 my-4'>
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
                        <Link type='button' to="/classtable" className='btn btn-success ' onClick={this.Subdata}>Submit</Link>
                    </div>
                </form>


            </>
        )
    }
}


export default HocCompo(ClassCompoForm);


