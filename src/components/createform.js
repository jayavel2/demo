import { useState } from "react";

function CreateForm(){
    const [values,setValues]=useState({
        fname :'',
        lname:'',
        fnameerror:false,
        lnameerror:false
    })
    const onChangeValue= e=>{
        const {name,value}=e.target;

        if(name==="fname"){
            if(value){
                setValues({...values,[name]: value,fnameerror: false})
            }
            else{
                setValues({...values,[name]:value,fnameerror:true})
            }
        }
        else if(name==="lname"){
            if(value){
                setValues({...values,[name]:value,lnameerror: false})
            }
            else{
                setValues({...values,[name]: value,lnameerror: true})
            }
        }
    }
    const onSubmit = ()=>{
        if(values.fname && values.lname && !values.fnameerror && !values.lnameerror){
            fetch('https://61e3b3a1fbee6800175eb09d.mockapi.io/users',
            {
                method:'Post',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(values)
            })
            .then((result)=>{
                alert("User added successfully")
                console.log('result',result);
                // result.json().then((resp)=>{
                //     alert("User added successfully")
                // })
            })
        }
    }

    return(
        <div className="container1">
            <div className="fname">
                <input type="text" placeholder="firstname" name="fname" value={values.fname} onChange={onChangeValue}/>
                {values.fnameerror?<div>First Name is required</div>:""}
            </div>
            <div className="lname">
                <input type="text" placeholder="lastname" name="lname" value={values.lname} onChange={onChangeValue}/>
                {values.lnameerror?<div>Last name is required</div>:""}
            </div>
            <div className="submit">
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default CreateForm;