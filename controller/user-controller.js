var express = require('express');
var route = express.Router();
const CONSTANT = require('../utils/constant');
const authentication = require('../middleware/authentication');

const userService = require('../service/user-service');


route.post(CONSTANT.USER.CREATE_USER, function (req, res) {
    console.log(req.body);
    userService.create(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
})
 




 



module.exports = route;