const deleteBtn = document.getElementById('deleteEmpButton')

deleteBtn.addEventListener('click', deleteEmployee)

async function deleteEmployee(){
    const empIndex = document.getElementById('employeeIndex').innerText
    const empName = document.getElementById('employee_name').innerText
    const shopId = document.getElementById('shopID').innerText
    try{
        const response = await fetch('/dashboard/deleteEmployee', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'ShopID': shopId,
                'EmpId': empIndex,
                'EmployeeName': empName
            })
        })
        const data = await response.text()
        console.log(data)
        window.location.href = "/dashboard/myshop";
        
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
        const response = await fetch('/dashboard/updateEmployee', {
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
