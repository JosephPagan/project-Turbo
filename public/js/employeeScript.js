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
    const empName = document.getElementById('employee_name').innerText

    let empNameUpd;
    let empEmailUpd;
    let empPhoneUpd;
    let empTypeUpd;

    if (document.getElementById('employeeName').value) {
        empNameUpd = document.getElementById('employeeName').value
    } else {
        empNameUpd = document.getElementById('employeeName').getAttribute('placeholder')
    }
    if (document.getElementById('employeeEmail').value) {
        empEmailUpd = document.getElementById('employeeEmail').value
    } else {
        empEmailUpd = document.getElementById('employeeEmail').getAttribute('placeholder')
    }
    if (document.getElementById('employeePhone').value) {
        empPhoneUpd = document.getElementById('employeePhone').value
    } else {
        empPhoneUpd = document.getElementById('employeePhone').getAttribute('placeholder')
    }
    if (document.getElementsByName('employeeType').value) {
        empTypeUpd = document.getElementById('employeeType').value
    }

    const empPosUpd = document.getElementById('employeePositionUpd').value
    const empSpecialtyUpd = document.getElementById('employeeSpecialtyUpd').value
    const empRateUpd = document.getElementsByName('hourlyWage').value

    try{
        const response = await fetch('/dashboard/updateEmployee', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'EmployeeIndex': empID,
                'EmployeeName': empName,
                'empNameUpdate': empNameUpd,
                'empEmailUpdate': empEmailUpd,
                'empPhoneUpdate': empPhoneUpd,
                'empPosUpdate': empPosUpd,
                'empSpecUpdate': empSpecialtyUpd,
                'empRateUpdate': empRateUpd
            })
        })
        const data = await response.text()
        window.location.href = "/dashboard/myshop";
        
    }catch(err){
        console.log(err)
    }
}
