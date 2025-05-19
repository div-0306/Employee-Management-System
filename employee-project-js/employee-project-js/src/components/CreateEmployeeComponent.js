import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmpolyeeService from '../service/EmpolyeeService';

function CreateEmployeeComponent() {

let navigate=useNavigate();

const [employee,setEmployee]=useState({
    firstname:" ",
    lastname:" ",
    email:" "

})

const handlecancel=(e)=>{
    e.preventDefault();
    navigate("/employees");
}
const handlechange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setEmployee({... employee,[name]:value});

}
const savehandle=(e)=>{
    e.preventDefault();
    console.log("Result: "+JSON.stringify(employee));

    EmpolyeeService.createEmployee(employee).then(res=>{
        navigate("/employees")
     })

}




  return (
    <div className='cotainer mt-3'>
            <div className='card col-md-6 offset-3'>
                <h4 className='text-center pt-3'>Add Employees</h4>
           
            <div className='card-body'>
                <form>
                
                    <label className='my-3'>FirstName</label>
                    <input type='text' name='firstname' id='firstname' className='form-control' 
                    value={employee.firstname} onChange={handlechange}/>
                    <label className='my-3'>LastName</label>
                    <input type='text' name='lastname' id='lastname' className='form-control'
                    value={employee.lastname} onChange={handlechange}/>
                    <label className='my-3'>Email</label>
                    <input type='text' name='email' id='email' className='form-control'
                    value={employee.email} onChange={handlechange}/>
                
                <button className='btn btn-danger mt-3' onClick={handlecancel}>Cancel</button>
                <button className='btn btn-success mt-3 ms-3 'onClick={savehandle}>Save</button>
                </form>
            </div>
            </div>
    </div>
  )
}

export default CreateEmployeeComponent