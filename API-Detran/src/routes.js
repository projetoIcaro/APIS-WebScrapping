// Importa Routes
const routes = require('express').Router()

// GetDataController
const GetDataController = require('./Controller/GetDataController')

// Rotas
routes.post("/Detran/GetData", GetDataController.GetData)

module.exports = routes;

