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
        res.sendFile('preview.html', {root: '/Users/silkysmooth/Documents/Projects/Auto-Engine-Here/views/'})
    }
}