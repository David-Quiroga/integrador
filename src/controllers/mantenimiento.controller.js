const mantenimiento = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

mantenimiento.showMantenimiento = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    res.render('general/autos/mantenimiento/agregar', { list });
}

mantenimiento.sendMantenimiento = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsers
    const { columnas, dateMaintenance, hourStartMaintenance, hourFinishMaintenance, timeMaintenance, mileageMaintenance, amountMaintenance, typeMaintenance, descriptionMaintenance, maintenanceManager, ubicationMaintenance, preciMaintenance, remarksMaintenance } = req.body
    const newSend = {
        dateMaintenance,
        hourStartMaintenance,
        hourFinishMaintenance,
        timeMaintenance,
        mileageMaintenance,
        amountMaintenance,
        typeMaintenance,
        descriptionMaintenance,
        maintenanceManager,
        ubicationMaintenance,
        preciMaintenance,
        remarksMaintenance,
        CarIdCars: id,
        userIdUsers: ids
    }

    if (parseInt(columnas) > 1) {
        for (let i = 0; i < columnas; i++) {
            await sql.query('INSERT INTO Maintenance(dateMaintenance,amountMaintenance,mileageMaintenance,maintenanceManager, typeMaintenance, preciMaintenance, ubicationMaintenance, hourStartMaintenance, hourFinishMaintenance, timeMaintenance, remarksMaintenance, descriptionMaintenance) VALUE(?,?,?,?,?,?,?,?,?,?,?,?)', [dateMaintenance, hourStartMaintenance, hourFinishMaintenance, timeMaintenance, mileageMaintenance, amountMaintenance, typeMaintenance, descriptionMaintenance, maintenanceManager, ubicationMaintenance, preciMaintenance, remarksMaintenance])
        }
    } else {
        await orm.mantenimiento.create(newSend)
    }
    req.flash('success', 'Guardado')
    res.redirect('/cars/mantenimiento/list/' + id);
}

mantenimiento.listMantenimiento = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    const mantenimiento = await sql.query('select * from maintenances')
    res.render('general/autos/mantenimiento/lista', { list, mantenimiento });
}

mantenimiento.detalleMantenimiento = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    const mantenimiento = await sql.query('select * from maintenances')
    res.render('general/autos/mantenimiento/detalle', { list, mantenimiento });
}

mantenimiento.bringMantenimiento = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    const mantenimiento = await sql.query('select * from maintenances where idMaintenance = ?', [id])
    res.render('general/autos/mantenimiento/editar', { list, mantenimiento });
}

mantenimiento.updateMantenimiento = async (req, res) => {
    const { columnas, dateMaintenance, hourStartMaintenance, hourFinishMaintenance, timeMaintenance, mileageMaintenance, amountMaintenance, typeMaintenance, descriptionMaintenance, maintenanceManager, ubicationMaintenance, preciMaintenance, remarksMaintenance } = req.body
    if (parseInt(columnas) > 1) {
        for (let i = 0; i < columnas; i++) {
            await sql.query('UPDATE Maintenance SET dateMaintenance = ?,amountMaintenance = ?,mileageMaintenance = ?,maintenanceManager = ?, typeMaintenance = ?, preciMaintenance = ?, ubicationMaintenance = ?, hourStartMaintenance = ?, hourFinishMaintenance = ?, timeMaintenance = ?, remarksMaintenance = ?, descriptionMaintenance = ?', [dateMaintenance, hourStartMaintenance, hourFinishMaintenance, timeMaintenance, mileageMaintenance, amountMaintenance, typeMaintenance, descriptionMaintenance, maintenanceManager, ubicationMaintenance, preciMaintenance, remarksMaintenance])
        }
    }
    req.flash('success', 'Guardado')
    res.redirect('/cars/mantenimiento/list/' + id);
}

module.exports = mantenimiento