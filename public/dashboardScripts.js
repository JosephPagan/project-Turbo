
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

function runCarApi(carMake) {
    const apiUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${carMake}/modelyear/2021?format=json`;
    // /vehicles/GetModelsForMakeYear/make/honda/modelyear/2015?format=csv
    console.log(apiUrl)

    fetch(apiUrl)
        .then( (data) => data.json())
        .then( (results) => {
            //console.log(results.Results)
            let arrayOfCars = results.Results
            for(x = 0; x < arrayOfCars.length; x++) {
                console.log(arrayOfCars[x].Model_Name)
            }
    })
}
