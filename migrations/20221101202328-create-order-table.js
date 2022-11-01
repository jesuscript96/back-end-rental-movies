'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("orders", {
    id_order: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    startedAt: {
      type: Sequelize.DATE
    },
    endedAt: {
      type: Sequelize.DATE
    },
    user: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "mail"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    },
    article: {
      type: Sequelize.INTEGER,
      references: {
        model: "articles",
        key: "id_article"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
  }   
   });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};