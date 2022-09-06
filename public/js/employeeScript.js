const deleteBtn = document.getElementById('deleteEmployeeButton')

deleteBtn.addEventListener('click', deleteEmployee)

async function deleteEmployee(){
    const empID = document.getElementById('employeeIndex').innerText
    const empName = document.getElementById('employeeName').innerText
    console.log(empID)
    console.log(empName)
    try{
        const response = await fetch('deleteEmployee', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'ObjectId': `${empID}`,
                'EmployeeName': `${empName}`
            })
        })
        const data = await response.text()
        window.location.href = "/myshop";
        
    }catch(err){
        console.log(err)
    }
}

const updateBtn = document.getElementById('updateEmployeeButton')
updateBtn.addEventListener('click', updateEmployee)

async function updateEmployee() {
    const empID = document.getElementById('employeeIndex').innerText
    const empName = document.getElementById('employeeName').innerText
    try{
        const response = await fetch('deleteCust', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'EmployeeIndex': `${empID}`,
                'EmployeeName': `${empName}`
            })
        })
        const data = await response.text()
        window.location.href = "/myshop";
        
    }catch(err){
        console.log(err)
    }

}
