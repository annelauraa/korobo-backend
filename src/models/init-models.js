var DataTypes = require("sequelize").DataTypes;
var _ContratSAV = require("./ContratSAV");
var _Entreprises = require("./Entreprises");
var _InstallationElectrique = require("./InstallationElectrique");
var _Interventions = require("./Interventions");
var _MaterielSites = require("./MaterielSites");
var _Materiels = require("./Materiels");
var _Notifications = require("./Notifications");
var _SequelizeMeta = require("./SequelizeMeta");
var _Sites = require("./Sites");
var _TypeInstallation = require("./TypeInstallation");
var _Utilisateurs = require("./Utilisateurs");

function initModels(sequelize) {
  var ContratSAV = _ContratSAV(sequelize, DataTypes);
  var Entreprises = _Entreprises(sequelize, DataTypes);
  var InstallationElectrique = _InstallationElectrique(sequelize, DataTypes);
  var Interventions = _Interventions(sequelize, DataTypes);
  var MaterielSites = _MaterielSites(sequelize, DataTypes);
  var Materiels = _Materiels(sequelize, DataTypes);
  var Notifications = _Notifications(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Sites = _Sites(sequelize, DataTypes);
  var TypeInstallation = _TypeInstallation(sequelize, DataTypes);
  var Utilisateurs = _Utilisateurs(sequelize, DataTypes);


  return {
    ContratSAV,
    Entreprises,
    InstallationElectrique,
    Interventions,
    MaterielSites,
    Materiels,
    Notifications,
    SequelizeMeta,
    Sites,
    TypeInstallation,
    Utilisateurs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
