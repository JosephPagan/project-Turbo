var minSlider = document.getElementById('min');

var outputMin = document.getElementById('min-value');

outputMin.innerHTML = '$' + minSlider.value;

minSlider.oninput = function() {
  outputMin.innerHTML= '$' + this.value;    
}

var markupSlider = document.getElementById('markupMin');

var markupOutputMin = document.getElementById('markup-min-value');

markupOutputMin.innerHTML = markupSlider.value + '%';

markupSlider.oninput = function() {
  markupOutputMin.innerHTML= this.value + '%';    
}





// const closeHour = document.getElementById('closeHour')

// function populate(selector) {
//     var select = selector;
//     var hours, minutes, ampm;
//     for(var i = 420; i <= 1320; i += 15){
//         hours = Math.floor(i / 60);
//         minutes = i % 60;
//         if (minutes < 10){
//             minutes = '0' + minutes; // adding leading zero
//         }
//         ampm = hours % 24 < 12 ? 'AM' : 'PM';
//         hours = hours % 12;
//         if (hours === 0){
//             hours = 12;
//         }
//         let eachHourOption = document.createElement('option')
//         eachHourOption.value = i
//         eachHourOption.text = hours + ':' + minutes + ' ' + ampm
//     }
// }

// populate(closeHour); // use selector for your select
