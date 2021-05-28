const utilities = {
  getUniqueOrder: () => {
    return 'Order-' + Math.floor(
      Math.random() * (9999 - 1000) + 1000
    )


  },
  UserUniqueId: () => {
    return 'USER-' + Math.floor(
      Math.random() * (999 - 100) + 100
    )

 
  }
}

module.exports = utilities;
