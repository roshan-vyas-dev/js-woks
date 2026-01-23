

class Student {

    // instance initialization -constructor()- Default method(no need to create a new function )
    // first exexcution this methods then user defined  methods execute

    constructor(rollno, name, grade, total) {
        this.sRollno = rollno;
        this.sName = name;
        this.sGrade = grade;
        this.sTotal = total;
    }

    printDetails() {
        console.log(this.sRollno, this.sName, this.sGrade, this.sTotal);

    }
}

s1 = new Student(7, "ronaldo", "A+", 92);
s2 = new Student(10, "messi", "A", 88);
s3 = new Student(17, "roshan", "A+", 97);
s4 = new Student(18, "virat", "b+", 80);



s1.printDetails();
s2.printDetails();
s3.printDetails();
s4.printDetails();

