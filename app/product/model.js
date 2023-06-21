const sequelize = require ('../../config/sequelize')
const { Sequelize } = require('sequelize');


const Product = sequelize.define('Product', {
  users_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
   
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
    
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  
});



module.exports = Product

// module.exports = (DataTypes , sequelize) => {
//   const Product = sequelize.define('Product', {
//     users_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     price: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     stock: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//       allowNull: false
//     }
//   })
//   return Product;
//   };

//   sequelize.sync().then(() => {
//     console.log('produk sukses');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });