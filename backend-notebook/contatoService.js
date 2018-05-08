const Contato = require('./contato')

Contato.methods(['get', 'post', 'put', 'delete'])

Contato.route('count', function (req, res, next) {
    Contato.count(function (error, value) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Contato