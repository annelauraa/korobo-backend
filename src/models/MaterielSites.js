const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MaterielSites', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_site: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_materiel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MaterielSites',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "MaterielSites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
