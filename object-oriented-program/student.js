

class Student {

    setStudent(rollno, name,course) {
        this.rollno = rollno
        this.name = name
        this.course = course;
    }
    displayStudent(){
        console.log(this.rollno,this.name,this.course);
        
    }

}

var thusharInstance= new Student();

thusharInstance.setStudent(123,"thushar","bca");
thusharInstance.displayStudent()