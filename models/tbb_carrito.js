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
    total:{
      type:DataTypes.DECIMAL(10,2),
      allowNull:false
    }, 
    estado:{
      type:DataTypes.ENUM('Ativo', 'Comprado', 'Cancelado'),
      allowNull:false
    }, 
    fecha_creacion:{
      type:DataTypes.DATE,
      allowNull:false
    }, 
    id_usuario:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito',
  });
    //-------------------------------------------------------------.
  tbb_carrito.associate = function(models) {
    // associations can be defined here
    tbb_carrito.belongsTo(models.tbc_usuario,
        {
            as: 'tbc_usuario',
            foreignKey: 'id_usuario',
        }
    );
    tbb_carrito.hasMany(models.tbd_carrito_detalle,
        {
            as: 'tbd_carrito_detalle',
            foreignKey: 'id_carrito_detalle',
        }
    );
  };
  return tbb_carrito;
};