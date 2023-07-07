
const dev = {
    db: {
      HOST : 'localhost',
      USERNAME: 'root',
      PASSWORD: 'Liverpool98',
      DATABASE: 'jwt',
      dialect:'mysql'
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
  
  module.exports = dev