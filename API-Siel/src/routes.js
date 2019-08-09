// Importa Routes
const routes = require('express').Router()

// GetDataController
const GetDataController = require('./Controller/GetDataController')

// Rotas
routes.get("/Siel/GetData", GetDataController.GetData)

module.exports = routes;

