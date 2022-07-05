function getCarImage() {
    let year = document.getElementById('date-dropdown').value
    let make = document.getElementById('carmake').value
    let model = document.getElementById('carmodel').value
    let engine = document.getElementById('carengine').value

    console.log(year)
    console.log(make)
    console.log(model)
    console.log(engine)

    const apiUrl = `http://api.carmd.com/v3.0/image?year=${year}&make=${make}&model=${model}&engine=${engine}`;
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
            console.log(results.data.image)
            document.getElementById('carImage').src = results.data.image
        })
}
getCarImage()