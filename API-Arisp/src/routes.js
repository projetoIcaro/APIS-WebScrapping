// Importa Routes
const routes = require('express').Router()

// GetDataController
const GetDataController = require('./Controller/GetDataController')

// Rotas
routes.post("/arisp/GetData", GetDataController.GetData)

module.exports = routes;

