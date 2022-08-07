var wageSlider = document.getElementById('wageMin');

var wageOutputMin = document.getElementById('wage-min-value');

wageOutputMin.innerHTML = '$' + wageSlider.value;

wageSlider.oninput = function() {
    wageOutputMin.innerHTML= '$' + Math.round(this.value * 100) / 100;    
} 