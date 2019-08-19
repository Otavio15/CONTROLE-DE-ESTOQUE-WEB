const express = require("express");
const routes = express.Router();
const productControler = require("./controler/productControler");

//Enviar dados para o banco
routes.get("/products", productControler.index);
routes.post("/products", productControler.store);
//****************************/

//exporta a classe
module.exports = routes;