const deleteCustomerButton = document.getElementById('deleteCustButton')

deleteCustomerButton.addEventListener('click', deleteCust)

async function deleteCust(){
    const custID = document.getElementById('custID').innerText
    const custName = document.getElementById('customerNameCustPage').innerText
    console.log(custID)
    console.log(custName)
    try{
        const response = await fetch('deleteCust', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'ObjectId': `${custID}`,
                'CustName': `${custName}`
            })
        })
        const data = await response.text()
        console.log(data)
        window.location.href = "/dashboard/customers";
        
    }catch(err){
        console.log(err)
    }
}
