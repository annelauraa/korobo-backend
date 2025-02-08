const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sites', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    localisation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    proprietaire: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    numero_dossier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    schema_SLD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_entreprise: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    installateur: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Id_technicien"
    },
    type_contrat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_installation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_electrique: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Sites',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Sites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
