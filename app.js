/* 
Print data from external api
*/ 

const url = 'http://dummy.restapiexample.com/api/v1/employees';
const employeeContainer = document.getElementById('employee-container');

fetch(url)
.then((response) => response.json())
.then(function(results){
  let persons = results.data;
  return persons.map(function(person) {
    let div = document.createElement('div');
    div.className = 'employee-card';

    let pName = document.createElement('p');
    pName.className = 'employee-name';
    pName.innerHTML = `<span>Name:</span> ${person.employee_name}`;
    
    let pAge = document.createElement('p');
    pAge.className = 'employee-age';
    pAge.innerHTML = `<span>Age:</span> ${person.employee_age}`;

    let pSalary = document.createElement('p');
    pSalary.className = 'employee-salary';
    pSalary.innerHTML = `<span>Salary:</span> ${person.employee_salary} €`;

    div.appendChild(pName);
    div.appendChild(pAge);
    div.appendChild(pSalary);
    employeeContainer.appendChild(div);
    
  })
}) 
.catch(function(error) {
  console.log(error);
});   

