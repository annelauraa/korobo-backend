const { Sequelize } = require("sequelize");
const config = require("../config/config.json"); // Vérifie si ce fichier existe

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect
});

const initModels = require("./init-models"); // Import du fichier généré
const models = initModels(sequelize); // Initialisation des modèles avec Sequelize

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
