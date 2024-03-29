const deleteButton = document.getElementById('deleteJobButton')

deleteButton.addEventListener('click', deleteJob)

// DATE DROPDOWN
function generateYears() {
    let dateDropdown = document.getElementById('date-dropdown'); 
    let currentYear = new Date().getFullYear();    
    let earliestYear = 1950;     
    while (currentYear >= earliestYear) {      
    let dateOption = document.createElement('option');          
    dateOption.text = currentYear;      
    dateOption.value = currentYear;        
    dateDropdown.add(dateOption);      
    currentYear -= 1;    
    }
}
// CAR API CALL
function getMakes() {
    let year = document.getElementById('date-dropdown').value

    const apiUrl = `https://api.carmd.com/v3.0/make?year=${year}`;
    // console.log(apiUrl)

    let makeDropdown = document.getElementById('carmake');
    let options = document.querySelectorAll('#carmake option')
    options.forEach(z => z.remove())
    
    fetch(apiUrl, {
        headers: {
            "content-type":"application/json",
            "authorization":"Basic NDM0MDk2OWMtZWRmZi00ZWQ0LWJhMTEtZTcwMTM5ODFmZGY1",
            "partner-token":"8ae602064b9442e48633624f162c3639"
        }
    })
        .then( (data) => data.json())
        .then( (results) => {
            console.log(results)
            let arrayOfMakes = results.data
            for(x = 0; x < arrayOfMakes.length; x++) {
                let makeOption = document.createElement('option')
                let currentMake = arrayOfMakes[x]
                makeOption.text = currentMake
                makeOption.value = currentMake
                makeDropdown.add(makeOption)
            }
    })
}
// CAR MODELS API CALL
function getModels(make) {
    let year = document.getElementById('date-dropdown').value
    //console.log(make)
    // let make = document.getElementById('#carmake').value

    const apiUrl = `https://api.carmd.com/v3.0/model?year=${year}&make=${make}`;
    //console.log(apiUrl)
    let modelDropdown = document.getElementById('carmodel');
    let options = document.querySelectorAll('#carmodel option')
    options.forEach(z => z.remove())
    
    fetch(apiUrl, {
        headers: {
            "content-type":"application/json",
            "authorization":"Basic NDM0MDk2OWMtZWRmZi00ZWQ0LWJhMTEtZTcwMTM5ODFmZGY1",
            "partner-token":"8ae602064b9442e48633624f162c3639"
        }
    })
        .then( (data) => data.json())
        .then( (results) => {
            // console.log(results)
            let arrayOfCars = results.data
            for(x = 0; x < arrayOfCars.length; x++) {
                let modelOption = document.createElement('option')
                let currentMake = arrayOfCars[x]
                modelOption.text = currentMake
                modelOption.value = currentMake
                modelDropdown.add(modelOption)
            }
        })
}
// CAR ENGINES API CALL
function getEngines(model) {
    let year = document.getElementById('date-dropdown').value
    let make = document.getElementById('carmake').value
    // console.log(make)
    // console.log(model)

    const apiUrl = `https://api.carmd.com/v3.0/engine?year=${year}&make=${make}&model=${model}`;
    //console.log(apiUrl)
    let engineDropdown = document.getElementById('carengine');
    let options = document.querySelectorAll('#carengine option')
    options.forEach(z => z.remove())
    
    fetch(apiUrl, {
        headers: {
            "content-type":"application/json",
            "authorization":"Basic NDM0MDk2OWMtZWRmZi00ZWQ0LWJhMTEtZTcwMTM5ODFmZGY1",
            "partner-token":"8ae602064b9442e48633624f162c3639"
        }
    })
        .then( (data) => data.json())
        .then( (results) => {
            // console.log(results)
            let arrayOfEngines = results.data
            for(x = 0; x < arrayOfEngines.length; x++) {
                let engineOption = document.createElement('option')
                let currentEngine = arrayOfEngines[x]
                engineOption.text = currentEngine
                engineOption.value = currentEngine
                engineDropdown.add(engineOption)
            }
        })
}
// CAR REPAIRS API CALL
function getRepairs() {
    let year = document.getElementById('date-dropdown').value
    let make = document.getElementById('carmake').value
    let model = document.getElementById('carmodel').value
    let engine = document.getElementById('carengine').value

    const apiUrl = `https://api.carmd.com/v3.0/repairlist?year=${year}&make=${make}&model=${model}&engine=${engine}`;
    //console.log(apiUrl)
    let repairDropdown = document.getElementById('repairDropdown');
    let options = document.querySelectorAll('#repairDropdown option')
    options.forEach(z => z.remove())
    
    fetch(apiUrl, {
        headers: {
            "content-type":"application/json",
            "authorization":"Basic NDM0MDk2OWMtZWRmZi00ZWQ0LWJhMTEtZTcwMTM5ODFmZGY1",
            "partner-token":"8ae602064b9442e48633624f162c3639"
        }
    })
        .then( (data) => data.json())
        .then( (results) => {
            // console.log(results)
            let arrayOfRepairs = results.data
            for(x = 0; x < arrayOfRepairs.length; x++) {
                let repairOption = document.createElement('option')
                let currentRepair = arrayOfRepairs[x].item
                repairOption.text = currentRepair
                repairOption.value = currentRepair
                repairDropdown.add(repairOption)
            }
        })
}
// CAR IMAGE API CALL
function getCarImage() {
    let year = document.getElementById('date-dropdown').value
    let make = document.getElementById('carmake').value
    let model = document.getElementById('carmodel').value
    let engine = document.getElementById('carengine').value

    // console.log(year)
    // console.log(make)
    // console.log(model)
    // console.log(engine)

    const apiUrl = `https://api.carmd.com/v3.0/image?year=${year}&make=${make}&model=${model}&engine=${engine}`;
    console.log(apiUrl)

    fetch(apiUrl, {
        headers: {
            "content-type":"application/json",
            "authorization":"Basic NDM0MDk2OWMtZWRmZi00ZWQ0LWJhMTEtZTcwMTM5ODFmZGY1",
            "partner-token":"8ae602064b9442e48633624f162c3639"
        }
    })
        .then( (data) => data.json())
        .then( (results) => {
            // console.log('Vehicle Image: ' + results.data.image);
            let image = document.getElementById('formImageHidden')
            image.value = results.data.image
        })
}

async function deleteJob(){
    const jobID = document.getElementById('jobId').innerText
    console.log(jobID)
    try{
        const response = await fetch('deleteJob', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'ObjectId': `${jobID}`
            })
        })
        const data = await response.text()
        window.location.href = "/dashboard/jobs";
        
    }catch(err){
        console.log(err)
    }
}
// HAMBURGER MENU FUNCTIONALITY
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#mainDash");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".icon");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
