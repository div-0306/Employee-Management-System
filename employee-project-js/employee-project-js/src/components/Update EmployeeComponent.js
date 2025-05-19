import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmpolyeeService from '../service/EmpolyeeService';

function UpdateEmployeeComponent() {
let navigate=useNavigate();

const[firstname,setFirstName]=useState("");
const[lastname,setLastName]=useState("");
const[email,setEmail]=useState("");
const{id}=useParams();

useEffect(()=>{
    EmpolyeeService.getEmployeeById(id).then((res)=>{
        setFirstName(res.data.firstname);
        setLastName(res.data.lastname);
        setEmail(res.data.email);
    });



},[id]);

const CancelHandle=(e)=>{
    e.preventDefault();
    navigate("/employees");
}
const upadteHandle=(e)=>{
    e.preventDefault();
    const employee={firstname,lastname,email};

    if(id){
        EmpolyeeService.updateEmployee(id,employee).then((res)=>
            {
            navigate("/employees");
        });
    }
    else{
        EmpolyeeService.createEmployee(employee).then((res)=>
            {
            navigate("/employees");
        });
    }
}

  return (
    <div className='cotainer mt-3'>
    <div className='card col-md-6 offset-3'>
        <h4 className='text-center pt-3'>Update Employees</h4>
   
    <div className='card-body'>
        <form>
        
            <label className='my-3'>FirstName</label>
            <input type='text' name='firstname' id='firstname' className='form-control' 
             value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
            <label className='my-3'>LastName</label>
            <input type='text' name='lastname' id='lastname' className='form-control'
           value={lastname}  onChange={(e)=>setLastName(e.target.value)} />
            <label className='my-3'>Email</label>
            <input type='text' name='email' id='email' className='form-control'
           value={email}   onChange={(e)=>setEmail(e.target.value)}/>
        
        <button className='btn btn-danger mt-3' onClick={CancelHandle} >Cancel</button>
        <button className='btn btn-success mt-3 ms-3 'onClick={upadteHandle} >Save</button>
        </form>
    </div>
    </div>
</div>
  )
}

export default UpdateEmployeeComponent



