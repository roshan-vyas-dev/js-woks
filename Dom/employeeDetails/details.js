
username = localStorage.getItem('uname');
head1.innerHTML = `Welcome ${username}`;


function addEmployees() {

    employee = {
        id: empid.value,
        name: empName.value,
        addr: empAddr.value,
        desg: empDes.value,
        desg: empExp.value,
        sal: empSal.value
    }


    if (employee.id in localStorage) {
        alert("it's already Exist")

    }
    else {
        localStorage.setItem(employee.id, JSON.stringify(employee));
        alert("Employees Details Created");

        empid.value = "";
        empName.value = "",
            empAddr.value = "";
        empDes.value = "";
        empExp.value = "";
        empSal.value = "";

    }

}



function searchId() {

    let key = emp.value;
    let employee = JSON.parse(localStorage.getItem(key));

    result.innerHTML = `
        <div class="mt-5 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <h2 class="text-2xl font-bold text-sky-600 mb-4">
                Employee Details
            </h2>

            <div class="space-y-2 text-gray-700">
                <p><span class="font-semibold">ID:</span> ${employee.id}</p>
                <p><span class="font-semibold">Name:</span> ${employee.name}</p>
                <p><span class="font-semibold">Address:</span> ${employee.addr}</p>
                <p><span class="font-semibold">Designation:</span> ${employee.desg}</p>
                <p><span class="font-semibold">Experience:</span> ${employee.exp}</p>
                <p><span class="font-semibold">Salary:</span> ₹${employee.sal}</p>
            </div>
        </div> `;


}