module.exports = {
    getHome: (req,res)=>{
        res.render('homePage.ejs')
    },
    getPricing: (req, res) => {
        res.render('pricing.ejs')
    },
    getCompany: (req, res) => {
        res.render('company.ejs')
    },
    getPreview: (req, res) => {
        res.render('preview.ejs')
    }
}