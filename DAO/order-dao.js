const orderModel = require('../model/order-model');
const utilities = require('../utils/utilities');
// const orderModel = require('../model/order-model');

const orderDAO = {
    newOrder: (payload) => {

        console.log('payload inside dao from service', payload);
        return orderModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
            name:payload.name,
            address: payload.address,
            phone: payload.phone,
            orderID: utilities.getUniqueOrder(),
            zipCode:payload.zipCode
           

            // createdAt:Date.now(), //the fields which r in schema as a default no need to write inside dao,no 
            // need to pass from postman
            // orderCount:0

        }).save(); 
    },

    // TrackOrder: (orderID) => {
    //     return userModel.find({ orderID: orderID })

    // },
        updateOrder: (payload) => {

            console.log('payload inside dao from service', payload);
            return orderModel.updateOrder({ "orderID": payload.orderID }, { $set: { "TrackOrder": "Shipped" } })
    
    
        }

    
    

    // ,
    // emailExist: (email, phone) => {
    //     return orderModel.findOne({ email: email, phone: phone })
    // }


}
module.exports = orderDAO;