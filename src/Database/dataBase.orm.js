const {Sequelize} = require("sequelize");

const userModel = require("../models/user");
const platformModel = require("../models/platform")
// const conbustibleModel = require('../models/conbustible')
// const destinoModel = require('../models/destino')
// const detalleKilometrajeModel = require('../models/detalleKilometraje')
// const impuestoMatriculaModel = require('../models/impuestoMatricula')
// const kilometrajeModelo = require('../models/kilometraje')
// const levelsCarsModel = require('../models/levelsCars')
// const mantenimientoModel = require('../models/mantenimiento')
// const matriculasModel = require('../models/matriculas')
// const motocyclesModel = require('../models/motorcycles')
// const responsableModel = require('../models/responsible')
// const seguridadElementosModelos = require('../models/seguridadElementos')
// const seguridadElementosDetalleModelos = require('../models/seguridadElementosDetalle')
// const vendorModelos = require('../models/proveedor')
// const ordenTrabajoModelos = require('../models/ordenTrabajo')
const implementedCategoryModelos = require('../models/implementoCategoria')
// const personalModel = require("../models/personal")


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
const implementedCategory = implementedCategoryModelos(sequelize, Sequelize)

user.hasMany(platform)
platform.belongsTo(user)

module.exports = {
	user,
	platform,
	implementedCategory
};