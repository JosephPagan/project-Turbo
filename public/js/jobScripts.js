const updateButton = document.querySelector('#updateJob')

updateButton.addEventListener('click', updateJob)

async function updateJob() {
    const jobId = document.querySelector('#jobId').innerText

    let customerName;
    let jobDescription; 

    if (document.querySelector('#customerName').value) {
        customerName = document.querySelector('#customerName').value
    } else {
        customerName = document.querySelector('#customerName').getAttribute('placeholder')
    }

    if (document.querySelector('#jobSpecificDescription').value) {
        jobDescription = document.querySelector('#jobSpecificDescription').value
    } else {
        jobDescription = document.querySelector('#jobSpecificDescription').getAttribute('placeholder')
    }
    
    const laborHour = document.querySelector('#jobHours').value
    const carYear = document.querySelector('#date-dropdown').value
    const carMake = document.querySelector('#carmake').value
    const carModel = document.querySelector('#carmodel').value
    const carEngine = document.querySelector('#carengine').value
    const repairName = document.querySelector('#repairDropdown').value
    const jobType = document.querySelector('#jobSpecificType').value
    const employeeAssigned = document.querySelector('#employeeAssign').value
    const jobTotal = document.querySelector('#totalPrice').innerText

    const part1_name = document.querySelector('#part_1').value
    const part1_price = document.querySelector('#part_1Price').value
    const part1_status = document.querySelector('#part_1Status').value
    const part2_name = document.querySelector('#part_2').value
    const part2_price = document.querySelector('#part_2Price').value
    const part2_status = document.querySelector('#part_2Status').value
    const part3_name = document.querySelector('#part_3').value
    const part3_price = document.querySelector('#part_3Price').value
    const part3_status = document.querySelector('#part_3Status').value
    const part4_name = document.querySelector('#part_4').value
    const part4_price = document.querySelector('#part_4Price').value
    const part4_status = document.querySelector('#part_4Status').value
    const part5_name = document.querySelector('#part_5').value
    const part5_price = document.querySelector('#part_5Price').value
    const part5_status = document.querySelector('#part_5Status').value
    const part6_name = document.querySelector('#part_6').value
    const part6_price = document.querySelector('#part_6Price').value
    const part6_status = document.querySelector('#part_6Status').value
    const part7_name = document.querySelector('#part_7').value
    const part7_price = document.querySelector('#part_7Price').value
    const part7_status = document.querySelector('#part_7Status').value
    const part8_name = document.querySelector('#part_8').value
    const part8_price = document.querySelector('#part_8Price').value
    const part8_status = document.querySelector('#part_8Status').value
    const part9_name = document.querySelector('#part_9').value
    const part9_price = document.querySelector('#part_9Price').value
    const part9_status = document.querySelector('#part_9Status').value
    const part10_name = document.querySelector('#part_10').value
    const part10_price = document.querySelector('#part_10Price').value
    const part10_status = document.querySelector('#part_10Status').value

    try{
        const response = await fetch('/dashboard/updatejob', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'jobID': jobId,
                'customerName': customerName,
                'jobDescription': jobDescription,
                'laborHour': laborHour,
                'carYear': carYear,
                'carMake': carMake,
                'carModel': carModel,
                'carEngine': carEngine,
                'repairName': repairName,
                'jobType': jobType,
                'jobTotal': Number(jobTotal),
                'employeeAssigned': employeeAssigned,
                'part1_name': part1_name,
                'part1_price': part1_price,
                'part1_status': part1_status,
                'part2_name': part2_name,
                'part2_price': part2_price,
                'part2_status': part2_status,
                'part3_name': part3_name,
                'part3_price': part3_price,
                'part3_status': part3_status,
                'part4_name': part4_name,
                'part4_price': part4_price,
                'part4_status': part4_status,
                'part5_name': part5_name,
                'part5_price': part5_price,
                'part5_status': part5_status,
                'part6_name': part6_name,
                'part6_price': part6_price,
                'part6_status': part6_status,
                'part7_name': part7_name,
                'part7_price': part7_price,
                'part7_status': part7_status,
                'part8_name': part8_name,
                'part8_price': part8_price,
                'part8_status': part8_status,
                'part9_name': part9_name,
                'part9_price': part9_price,
                'part9_status': part9_status,
                'part10_name': part10_name,
                'part10_price': part10_price,
                'part10_status': part10_status
            })
        })
        const data = await response.text
        console.log(data)
        window.location.href = "/dashboard/jobs";
    } catch (err) {
        console.log(err)
    }
}

function runningTotal() {
    const display = document.getElementById('totalPrice')
    
    const hours = document.getElementById('jobHours').value
    const rate = document.querySelector('.blindData').value

    const part1 = document.querySelector('#part_1Price').value
    const part2 = document.querySelector('#part_2Price').value
    const part3 = document.querySelector('#part_3Price').value
    const part4 = document.querySelector('#part_4Price').value
    const part5 = document.querySelector('#part_5Price').value
    const part6 = document.querySelector('#part_6Price').value
    const part7 = document.querySelector('#part_7Price').value
    const part8 = document.querySelector('#part_8Price').value
    const part9 = document.querySelector('#part_9Price').value
    const part10 = document.querySelector('#part_10Price').value

    let laborTotal = hours * rate;

    total = laborTotal + Number(part1) + Number(part2) + Number(part3) + Number(part4) + Number(part5) + Number(part6) + Number(part7) + Number(part8) + Number(part9) + Number(part10);

    console.log(total)
    display.innerHTML = total
}
