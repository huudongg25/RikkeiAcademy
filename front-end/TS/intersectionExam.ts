

interface Person {
    name: string;
    age: number;
  }
  
  interface Employee {
    empId: number;
    department: string;
  }
  
  type EmployeePerson = Person & Employee;
  
  function combinePersonAndEmployee(person: Person, employee: Employee): EmployeePerson {
    return {
      ...person,
      ...employee,
    };
  }
  
  const person: Person = { name: "John", age: 30 };
  const employee: Employee = { empId: 101, department: "IT" };
  
  const empPerson: EmployeePerson = combinePersonAndEmployee(person, employee);
  
  console.log("Combined Info:", empPerson);