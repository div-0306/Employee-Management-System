import axios from "axios";

const EMPOLYEE_BASE_URL = "http://localhost:9090/employees";

class EmployeeService{
    getEmployees(){   
        return axios.get(EMPOLYEE_BASE_URL);
    }
    createEmployee(employee){   
        return axios.post(EMPOLYEE_BASE_URL,employee); 
    }
    getEmployeeById(employeeId){
        return axios.get(EMPOLYEE_BASE_URL+'/'+employeeId);
         
    }
    updateEmployee(employeeId,employee){
        return axios.put(EMPOLYEE_BASE_URL+'/'+employeeId,employee);

    }

    deleteEmployee(employeeid){
             return axios.delete(EMPOLYEE_BASE_URL+'/'+employeeid);

    }
}
export default new EmployeeService();