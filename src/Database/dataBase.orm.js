const {Sequelize} = require("sequelize");

const userModel = require("../models/user");
const platformModel = require("../models/platform")
const conbustibleModel = require('../models/conbustible')
const destinoModel = require('../models/destino')
const detalleKilometrajeModel = require('../models/detalleKilometraje')
const impuestoMatriculaModel = require('../models/impuestoMatricula')
const kilometrajeModelo = require('../models/kilometraje')
const levelsCarsModel = require('../models/levelsCars')
const mantenimientoModel = require('../models/mantenimiento')
const matriculasModel = require('../models/matriculas')
const motocyclesModel = require('../models/motorcycles')
const responsableModel = require('../models/responsible')
const seguridadElementosModelos = require('../models/seguridadElementos')
const seguridadElementosDetalleModelos = require('../models/seguridadElementosDetalle')
const vendorModelos = require('../models/proveedor')
const ordenTrabajoModelos = require('../models/ordenTrabajo')
const implementedCategoryModelos = require('../models/implementoCategoria')


const{ MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require ("../keys");

const sequelize = new Sequelize( MYSQLDATABASE , MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
  });

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

//sincronia
const user = userModel(sequelize, Sequelize);
const platform = platformModel(sequelize, Sequelize);
const conbustible = conbustibleModel(sequelize, Sequelize)
const destino = destinoModel(sequelize, Sequelize)
const detalleKilometraje = detalleKilometrajeModel(sequelize, Sequelize)
const impuestoMatricula = impuestoMatriculaModel(sequelize, Sequelize)
const kilometraje = kilometrajeModelo(sequelize, Sequelize)
const levelsCars = levelsCarsModel(sequelize, Sequelize)
const mantenimiento = mantenimientoModel(sequelize, Sequelize)
const matriculas = matriculasModel(sequelize, Sequelize)
const motorcycles = motocyclesModel(sequelize, Sequelize)
const responsible = responsableModel(sequelize, Sequelize)
const seguridadElementos = seguridadElementosModelos(sequelize, Sequelize)
const seguridadElementosDetalle = seguridadElementosDetalleModelos(sequelize, Sequelize)
const vendor = vendorModelos(sequelize, Sequelize)
const ordenTrabajo = ordenTrabajoModelos(sequelize, Sequelize)
const implementedCategory = implementedCategoryModelos(sequelize, Sequelize)

seguridadElementos.hasMany(seguridadElementosDetalle)
seguridadElementosDetalle.belongsTo(seguridadElementos)

implementedCategory.hasMany(seguridadElementos)
seguridadElementos.belongsTo(implementedCategory)

matriculas.hasMany(impuestoMatricula)
impuestoMatricula.belongsTo(matriculas)

vendor.hasMany(ordenTrabajo)
ordenTrabajo.belongsTo(vendor)

platform.hasMany(ordenTrabajo)
ordenTrabajo.belongsTo(platform)

user.hasMany(platform)
platform.belongsTo(user)
user.hasMany(conbustible)
conbustible.belongsTo(user)
user.hasMany(destino)
destino.belongsTo(user)
user.hasMany(detalleKilometraje)
detalleKilometraje.belongsTo(user)
user.hasMany(impuestoMatricula)
impuestoMatricula.belongsTo(user)
user.hasMany(kilometraje)
kilometraje.belongsTo(user)
user.hasMany(levelsCars)
levelsCars.belongsTo(user)
user.hasMany(mantenimiento)
mantenimiento.belongsTo(user)
user.hasMany(responsible)
responsible.belongsTo(user)
user.hasMany(seguridadElementosDetalle)
seguridadElementosDetalle.belongsTo(user)
user.hasMany(matriculas)
matriculas.belongsTo(user)

platform.hasMany(conbustible)
conbustible.belongsTo(platform)
platform.hasMany(destino)
destino.belongsTo(platform)
platform.hasMany(detalleKilometraje)
detalleKilometraje.belongsTo(platform)
platform.hasMany(impuestoMatricula)
impuestoMatricula.belongsTo(platform)
platform.hasMany(kilometraje)
kilometraje.belongsTo(platform)
platform.hasMany(levelsCars)
levelsCars.belongsTo(platform)
platform.hasMany(mantenimiento)
mantenimiento.belongsTo(platform)
platform.hasMany(responsible)
responsible.belongsTo(platform)
platform.hasMany(seguridadElementos)
seguridadElementos.belongsTo(platform)
platform.hasMany(seguridadElementosDetalle)
seguridadElementosDetalle.belongsTo(platform)
platform.hasMany(matriculas)
matriculas.belongsTo(platform)

motorcycles.hasMany(conbustible)
conbustible.belongsTo(motorcycles)
motorcycles.hasMany(destino)
destino.belongsTo(motorcycles)
motorcycles.hasMany(detalleKilometraje)
detalleKilometraje.belongsTo(motorcycles)
motorcycles.hasMany(impuestoMatricula)
impuestoMatricula.belongsTo(motorcycles)
motorcycles.hasMany(kilometraje)
kilometraje.belongsTo(motorcycles)
motorcycles.hasMany(levelsCars)
levelsCars.belongsTo(motorcycles)
motorcycles.hasMany(mantenimiento)
mantenimiento.belongsTo(motorcycles)
motorcycles.hasMany(responsible)
responsible.belongsTo(motorcycles)
motorcycles.hasMany(seguridadElementosDetalle)
seguridadElementosDetalle.belongsTo(motorcycles)
motorcycles.hasMany(matriculas)
matriculas.belongsTo(motorcycles)

module.exports = {
	user,
	platform,
	conbustible,
	destino,
	detalleKilometraje,
	impuestoMatricula,
	kilometraje,
	levelsCars,
	mantenimiento,
	matriculas,
	motorcycles,
	responsible,
	seguridadElementos,
	seguridadElementosDetalle,
	vendor,
	ordenTrabajo,
	implementedCategory
};