 package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/employees")
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}

	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable long id) {
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping("/{id}")
	public  ResponseEntity<Employee> updateEmployeeById(@PathVariable long id ,@RequestBody Employee employee){
		return employeeService.updateEmployeeById(id,employee);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {
		return employeeService.deleteEmployee(id);
	}

	

	 
}
  