'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_carrito.init({
    id_usuario:{
      type:DataTypes.INTEGER,
      allowNull:false
    }, 
    total:{
      type:DataTypes.DECIMAL(10,2),
      allowNull:false
    }, 
    estado:{
      type:DataTypes.ENUM('Ativo', 'Comprado', 'Cancelado'),
      allowNull:false
    }, 
    fecha_creacion:{
      TYPE:DataTypes.DATE,
      allowNull:false
    }, 
  }, {
    sequelize,
    modelName: 'tbb_carrito',
  });
  return tbb_carrito;
};