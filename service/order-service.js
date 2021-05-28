const orderDAO = require('../DAO/order-dao');
const bcrypt = require('bcrypt');


const orderService = {
    newOrder: (payload) => { //user will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['UserId'] = user.UserId; //get orderID from authentication req.user and set new property orderID to payload 
            // // coming from payload.
            // console.log(UserId);
            orderDAO.newOrder(payload).then((result) => {
                resolve('ordered successfully',result);
            }).catch(error => {
                reject(error);
            })

        })


    },
    // TrackOrder: (payload) => {

    //     return new Promise((resolve, reject) => {
    //         orderDAO.TrackOrder(payload).then((result) => {
    //             resolve('your tracking',result);
    //         }).catch(error => {
    //             reject(error);
    //         })
    //     })
        

        
    // },
    updateOrder: (user, payload) => {

        console.log('payload inside service from controller', payload, user.userType);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()

            if (user.userType != 'ADMIN') { 
                console.log('u r not admin');
                return reject('you are not Authorized ');
            }
            orderDAO.updateOrder(payload).then((result) => {
                console.log(result);


                resolve('order Rejected ');
            }).catch(error => {
                reject(error);

            })
        })

    },

    cancelOrder: (payload) => {

        return new Promise((resolve, reject) => {
            orderDAO.cancelOrder(payload).then((result) => {
                resolve('cancelled successfully',result);
            }).catch(error => {
                reject(error);
            })
        })
        

        
    },

}


module.exports = orderService;