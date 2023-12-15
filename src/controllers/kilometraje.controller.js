const kilometrage = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

kilometrage.showKilometrage = async(req, res) =>{
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    res.render('general/autos/kilometraje/agregar',{list })
}


module.exports = kilometrage