package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	
	public List<Employee>getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	public Employee createEmployee( Employee employee) {
		return employeeRepository.save(employee);
	} 
	
	public Employee getEmployeeById( long id) {
		return employeeRepository.findById(id).orElseThrow(()->new ConfigDataResourceNotFoundException(null));
	}

	public  ResponseEntity<Employee> updateEmployeeById( long id , Employee employee){
		Employee oldemp= employeeRepository.findById(id).orElseThrow(()->new ConfigDataResourceNotFoundException(null) );
		oldemp.setFirstname(employee.getFirstname());
		oldemp.setLastname(employee.getLastname());
		oldemp.setEmail(employee.getEmail());
		
		employeeRepository.save(oldemp);
		return ResponseEntity.ok(oldemp);

	}
	
	public ResponseEntity<HttpStatus> deleteEmployee( long id) {
		Employee employee= employeeRepository.findById(id).orElseThrow(()->new ConfigDataResourceNotFoundException(null));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
