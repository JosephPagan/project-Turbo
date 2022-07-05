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

    const apiUrl = `http://api.carmd.com/v3.0/make?year=${year}`;
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
function getModels(make) {
    let year = document.getElementById('date-dropdown').value
    //console.log(make)
    // let make = document.getElementById('#carmake').value

    const apiUrl = `http://api.carmd.com/v3.0/model?year=${year}&make=${make}`;
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
            console.log(results)
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
function getEngines(model) {
    let year = document.getElementById('date-dropdown').value
    let make = document.getElementById('carmake').value
    console.log(make)
    console.log(model)

    const apiUrl = `http://api.carmd.com/v3.0/engine?year=${year}&make=${make}&model=${model}`;
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
            console.log(results)
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

var wageSlider = document.getElementById('wageMin');

var wageOutputMin = document.getElementById('wage-min-value');

wageOutputMin.innerHTML = '$' + wageSlider.value;

wageSlider.oninput = function() {
wageOutputMin.innerHTML= '$' + Math.round(this.value * 100) / 100;    
}

