const sequelize = require('../../libs/database/db');
const { DataTypes } = require('sequelize'); // Import the built-in data types
const User = require('./User.model')

const Infor = sequelize.define(
  'Infor',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.hasOne(Infor, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Infor.belongsTo(User, { foreignKey: 'user_id' })

Infor.sync().then(() => {
  console.log('ok');
});

module.exports = Infor;