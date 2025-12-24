// create an object students with properties
// roll,name,course, email,gender

var student = {
    "name": "Roshan",
    "roll_no": "21",
    "course": "mearn stack",
    "email": "roshanvyas135@gmail.com",
    "gender": "male"

}

console.log(student.name);   // first type for call

console.log(student["name"]);   // second type for call. []inside squre bracket "" is need for call.

// --------------------------------------------

// 2 methods for property add

// first method
student.college="cms";
console.log(student);

// second method
student["pass_out_year:"]=2020;
console.log(student);



