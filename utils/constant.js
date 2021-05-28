

const CONSTANT = {
  USERTYPE: ['ENDUSER', 'ADMIN'],

    USER: {
      CREATE_USER:'/createUser',
      LOGIN: '/login'
    },
    ORDER: {
      NEW_ORDER: "/newOrder",
      CANCEL_ORDER: "/orderCancel",
      ORDER_TRACK_BY_ID: "/orderTraceByID",
      UPDATE_TRACK:'/updateTracking'
    },
    JWT: {
      JWT_SCRET: "SREeBangaram"
    } 
    //   ORDER:{
    //     DEFAULT:0

    //   }

  }

module.exports = CONSTANT;