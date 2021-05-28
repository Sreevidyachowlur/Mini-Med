var express = require('express');
var route = express.Router();
const orderService = require('../service/order-service');
const CONSTANT = require('../utils/constant');
const authentication = require('../middleware/authentication');


route.post(CONSTANT.ORDER.NEW_ORDER, (req, res) => {
    console.log("inside order-controller");
    console.log(req.body);
    orderService.newOrder(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })

}),
// route.get(CONSTANT.ORDER.ORDER_TRACK_BY_ID + '/:orderId',  (req, res) => {
//     console.log(req.params);
//     orderService.TrackOrder(req.params).then(result => { //NOTE: in controller we will use only then() and catch()
//         res.send(result);
//     }).catch(error => {
//         res.send(error);
//     })

// }),

route.put(CONSTANT.ORDER.UPDATE_TRACK + '/:orderId', authentication, (req, res) => {
    console.log(req.params);
    orderService.updateOrder(req.user,req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })

}),
route.put(CONSTANT.ORDER.CANCEL_ORDER, (req, res) => {
    console.log("inside usercontroller");
    orderService.cancelOrder().then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })

})

 


module.exports = route;