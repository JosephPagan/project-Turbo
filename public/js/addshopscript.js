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

async function submitEdit() {
  const shopID = document.querySelector('#editShopID').innerHTML
  const shopEdit = document.querySelector('#shopName').value
  const emailEdit = document.querySelector('#shopEmail').value
  const phoneEdit = document.querySelector('#shopPhone').value
  const addressEdit = document.querySelector('#shopAddress').value
  const cityEdit = document.querySelector('#shopCity').value
  const stateEdit = document.querySelector('#shopState').value
  const zipEdit = document.querySelector('#shopZip').value
  const websiteEdit = document.querySelector('#shopWebsite').value
  const openEdit = document.querySelector('#openHour').value
  const closeEdit = document.querySelector('#closeHour').value
  const typeEdit = document.querySelector('#shopType').value
  const rateEdit = document.querySelector('#min').value
  const markupEdit = document.querySelector('#markupMin').value

  try{
    const response = await fetch('/dashboard/editshop', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'shopId': shopID,
            'newShop': shopEdit,
            'newEmail': emailEdit,
            'newPhone': phoneEdit,
            'newAddress': addressEdit,
            'newCity': cityEdit,
            'newState': stateEdit,
            'newZip': zipEdit,
            'newWebsite': websiteEdit,
            'newOpen': openEdit,
            'newClose': closeEdit,
            'newType': typeEdit,
            'newRate': rateEdit,
            'newMarkup': markupEdit
            })
        })
    } catch (err) {
        console.log(err)
    }

}