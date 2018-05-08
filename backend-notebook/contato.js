const restful = require('node-restful')
const mongoose = restful.mongoose

mongoose.Promise = global.Promise

const contatoSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    nome: { type: String, required: true },
    idade: { type: Number, required: false }
})

module.exports = restful.model('Contato', contatoSchema)