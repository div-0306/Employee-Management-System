import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmpolyeeService from '../service/EmpolyeeService.js';
export default class EmployeeListComponent extends Component {
    constructor(){
        super();
        
        this.state={
            employees:[]
        }
    }
    componentDidMount(){
        EmpolyeeService.getEmployees().then(res=>{
        this.setState({employees:res.data});
    })
  }

  deleteEmployee=(employeeid)=>{
    EmpolyeeService.deleteEmployee(employeeid).then(res=>{
        EmpolyeeService.getEmployees().then(res=>
        {
            this.setState({employees:res.data});
        })
    })
    .catch(error=>{
        console.log(error);
    })
  }

  render() {
    return (
      <div className='container  mt-5 '>
        <h2 className='text-center'>Employee List</h2>
        
        <div className='row mt-5'>
            <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employees</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        this.state.employees.map(employee=>{
                            return <tr>
                                <td>{employee.id}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                <button  className='btn btn-danger'style={{marginLeft:"15px"}}
                onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
        </div>
    )
  }
}
