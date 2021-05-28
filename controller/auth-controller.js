var express = require('express');
var route = express.Router();
const authService = require('../service/auth-service');
const CONSTANT=require('../utils/constant')

route.post(CONSTANT.USER.LOGIN, (req, res) => {
    // console.log("hi auth controller");
    console.log(req.body);
    authService.login(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })

}) 

module.exports = route;