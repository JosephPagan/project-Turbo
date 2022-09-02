module.exports = {
    ensureAuth: function(req, res, next) {
        // console.log('Ensure Auth Result: ' + req.isAuthenticated())
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }
    }
}