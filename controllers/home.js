module.exports = {
    getHome: (req,res)=>{
        res.render('homepage.ejs')
    },
    getPricing: (req, res) => {
        res.render('pricing.ejs')
    },
    getCompany: (req, res) => {
        res.render('company.ejs')
    },
    getPreview: (req, res) => {
        res.sendFile(__dirname + '/views/preview.html')
    }
}