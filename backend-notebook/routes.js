const express = require('express')
const auth = require('./auth')

module.exports = server => {

    /* Rotas abertas */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const authService = require('./authService')
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken', authService.validateToken)

    /* Rotas protegidas por token JWT */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const contatoService = require('./contatoService')
    contatoService.register(protectedApi, '/contato')

}