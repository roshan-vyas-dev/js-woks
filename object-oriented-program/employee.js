
class Employee{
   
    setEmployee(id,name,designation,salary){
        this.empid=id;
        this.empname=name;
        this.emDesignation=designation;
        this.empSalary=salary;
    }

    printEmployee(){
        console.log(this.empid,this.empname,this.emDesignation,this.empSalary);    
    }

}

var emp1=new Employee();

emp1.setEmployee(113,"vipin","developer",20000);
emp1.printEmployee();