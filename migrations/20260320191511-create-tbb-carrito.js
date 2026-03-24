'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbb_carrito', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
      },
      estado: {
        type: Sequelize.ENUM('Activo','Comprado','Cancelado'),
        allowNull:false
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull:false
      },
      //--------------------------------------------------
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'tbc_usuario',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      //-------------------------------------------------
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbb_carrito');
  }
};