const matricula = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

matricula.show = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    res.render('general/autos/matricula/agregar', { list });
}

matricula.send = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsers
    const { columnas, datelicensePlates, registrationYearLicensePlates, registrationExpirationDateLicensePlates, toNameLicensePlates, rtvTuitionTax, commissionTuitionTax, vehicleTaxTuitionTax, commission2TuitionTax, tuitionTuitionTax, commission3TuitionTax, roadFundRegistrationTax, commission4TuitionTax, totalTuitionTax } = req.body
    const newMatricula = {
        datelicensePlates,
        registrationYearLicensePlates,
        registrationExpirationDateLicensePlates,
        toNameLicensePlates,
        userIdUsers: ids,
        CarIdCars: id
    }
    const newImpuestoMatricula = {
        rtvTuitionTax,
        commissionTuitionTax,
        vehicleTaxTuitionTax,
        commission2TuitionTax,
        tuitionTuitionTax,
        commission3TuitionTax,
        roadFundRegistrationTax,
        commission4TuitionTax,
        totalTuitionTax,
        userIdUsers: ids,
        CarIdCars: id,
    }
    if (parseInt(columnas) > 1) {
        for (let i = 0; i < columnas; i++) {
            await sql.query('INSERT INTO licensePlates(datelicensePlates,registrationYearLicensePlates,registrationExpirationDateLicensePlates,toNameLicensePlates) VALUE(?,?,?,?)', [datelicensePlates, registrationYearLicensePlates, registrationExpirationDateLicensePlates, toNameLicensePlates])
            await sql.query('INSERT INTO TuitionTax(rtvTuitionTax,commissionTuitionTax,vehicleTaxTuitionTax,commission2TuitionTax,tuitionTuitionTax,commission3TuitionTax,roadFundRegistrationTax,commission4TuitionTax,totalTuitionTax) VALUE (?,?,?,?,?,?,?,?,?)', [rtvTuitionTax, commissionTuitionTax, vehicleTaxTuitionTax, commission2TuitionTax, tuitionTuitionTax, commission3TuitionTax, roadFundRegistrationTax, commission4TuitionTax, totalTuitionTax])
        }
    } else {
        await orm.matriculas.create(newMatricula)
        await orm.impuestoMatricula.create(newImpuestoMatricula)
    }
    req.flash('success', 'Guardado')
    res.redirect('/cars/matricula/list/' + id);
}

matricula.list = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    const matriculas = await sql.query('select * from licenseplates')
    res.render('general/autos/matricula/lista', { list, matriculas });
}

matricula.detalle = async (req, res) => {
    const id = req.params.id
    const matriculas = await sql.query('select * from matriculas m JOIN cars c ON m.CarIdCars = c.idCars')
    res.render('general/autos/matricula/detalleLista', { matriculas });
}

matricula.traer = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    const matriculas = await sql.query('select * from matriculas where idlicensePlate = ?', [id])
    res.render('general/autos/matricula/editar', { list, matriculas });
}

matricula.update = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsers
    const { datelicensePlates, registrationYearLicensePlates, registrationExpirationDateLicensePlates, toNameLicensePlates, rtvTuitionTax, commissionTuitionTax, vehicleTaxTuitionTax, commission2TuitionTax, tuitionTuitionTax, commission3TuitionTax, roadFundRegistrationTax, commission4TuitionTax, totalTuitionTax } = req.body
    await sql.query('UPDATE licensePlates SET datelicensePlates = ?,registrationYearLicensePlates = ?,registrationExpirationDateLicensePlates = ?,toNameLicensePlates = ?)', [datelicensePlates, registrationYearLicensePlates, registrationExpirationDateLicensePlates, toNameLicensePlates])
    await sql.query('UPDATE TuitionTax SET  rtvTuitionTax = ?,commissionTuitionTax = ?,vehicleTaxTuitionTax = ?,commission2TuitionTax = ?,tuitionTuitionTax = ?,commission3TuitionTax = ?,roadFundRegistrationTax = ?,commission4TuitionTax = ?,totalTuitionTax = ?', [rtvTuitionTax, commissionTuitionTax, vehicleTaxTuitionTax, commission2TuitionTax, tuitionTuitionTax, commission3TuitionTax, roadFundRegistrationTax, commission4TuitionTax, totalTuitionTax])
    req.flash('success', 'Guardado')
    res.redirect('/cars/matricula/list/' + id);
}


module.exports = matricula