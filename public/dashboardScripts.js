// DATE DROPDOWN
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
// CAR API CALL
function runCarApi(carMake) {
    const apiUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${carMake}/modelyear/2021?format=json`;
    console.log(apiUrl)

    let modelDropdown = document.getElementById('carmodel');
    let options = document.querySelectorAll('#carmodel option')
    options.forEach(z => z.remove())
    
    fetch(apiUrl)
        .then( (data) => data.json())
        .then( (results) => {
            let arrayOfCars = results.Results
            for(x = 0; x < arrayOfCars.length; x++) {
                let modelOption = document.createElement('option')
                let currentMake = arrayOfCars[x].Model_Name
                modelOption.text = currentMake
                modelOption.value = currentMake
                modelDropdown.add(modelOption)
            }
    })
}
