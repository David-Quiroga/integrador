const ordenTrabajo = {}

const { or } = require('sequelize')
const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

ordenTrabajo.showOrderWork = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from cars where idCars = ?', [id])
    const maxIdVendor = await sql.query('select max(idVendor) as maximoVendor from vendors')
    const maxId = await sql.query('select max(idOrderWork) as maximo from orderWorks')
    res.render('general/autos/ordenTrabajo/agregar', { list, maxId, maxIdVendor });
}

ordenTrabajo.sendOrderWork = async (req, res) => {
    const id = req.params.id
    const { idCars, idOderWork, totalOrderWork, firmSupervisor, idVendor, si, columnas, dateOrderWork, aproximatePrecie, applicantOrderWork, amountOrderWork, nameVendor, phoneVendor, addressVendor, typeOrderWork, detailOrderWork, unitPriceOrderWork, totalPriceOrderWork } = req.body
    const newSendOrdenWork = {
        amountOrderWork,
        typeOrderWork,
        detailOrderWork,
        unitPriceOrderWork,
        totalPriceOrderWork,
        applicantOrderWork,
        dateOrderWork,
        aproximatePrecie,
        totalOrderWork,
        firmSupervisor,
        CarIdCars: idCars,
        vendorIdVendor: idVendor,
    }

    const newVendor = {
        nameVendor,
        phoneVendor,
        addressVendor
    }
    await orm.vendor.create(newVendor)
if(parseInt(columnas)>1){
    for(let i=0; i<columnas; i++){
        await sql.query('Insert Into orderWorks value ?', [newSendOrdenWork])   
    }
}else{
    await orm.ordenTrabajo.create(newSendOrdenWork)
}
    if (si == 'si') {
        const imagenUsuario = req.files.imageCars;
        const validacion = path.extname(imagenUsuario.name);
        const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

        if (!extencion.includes(validacion)) {
            req.flash("success", "Imagen no compatible.");
        }

        if (!req.files) {
            req.flash("success", "Imagen no insertada.");
        }

        const ubicacion = __dirname + "/../public/img/daños/" + imagenUsuario.name;

        imagenUsuario.mv(ubicacion, function (err) {
            if (err) {
                return req.flash("message", err);
            }
            sql.query("UPDATE orderWorks SET imageOrderWork = ? WHERE idOrderWork = ?", [
                imagenUsuario.name,
                idOderWork,
            ]);
            console.log("Imagen de usuario ingresada");
        });
    }
    req.flash('success', 'guardado')
    res.redirect('/cars/ordenTrabajo/list/' + id);
}

ordenTrabajo.listOrderWork = async (req, res) => {
    const orderWork = await sql.query('select * from orderWorks')
    res.render('general/autos/ordenTrabajo/lista', { orderWork });
}

ordenTrabajo.detalleOrderWork = async (req, res) => {
    const orderWork = await sql.query('select * from orderWorks')
    res.render('general/autos/ordenTrabajo/detalle', { orderWork });
}

ordenTrabajo.bringOrderWork = async (req, res) => {
    const id = req.params.id
    const orderWork = await sql.query('select * from orderWorks where idOrderWork = ?', [id])
    res.render('general/autos/ordenTrabajo/lista', { orderWork });
}

ordenTrabajo.updateOrderWork = async (req, res) => {
    const id = req.params.id
    const { idCars, idOderWork, si, dateOrderWork, aproximatePrecie, applicantOrderWork, amountOrderWork, nameVendor, phoneVendor, addressVendor, typeOrderWork, detailOrderWork, unitPriceOrderWork, totalPriceOrderWork } = req.body
    const newSendOrdenWork = {
        amountOrderWork,
        typeOrderWork,
        detailOrderWork,
        unitPriceOrderWork,
        totalPriceOrderWork,
        applicantOrderWork,
        dateOrderWork,
        aproximatePrecie,
        CarIdCars: idCars
    }

    const newVendor = {
        nameVendor,
        phoneVendor,
        addressVendor
    }

    await orm.ordenTrabajo.findOne({ where: {idOderWork: id}})
    .then((actualizar) =>{
        actualizar.update(newSendOrdenWork)
    })
    await orm.vendor.findOne({ where: {idVendor: id}})
    .then((actualizar) =>{
        actualizar.update(newVendor)
    })

    if (si == 'si') {
        const imagenUsuario = req.files.imageCars;
        const validacion = path.extname(imagenUsuario.name);
        const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

        if (!extencion.includes(validacion)) {
            req.flash("success", "Imagen no compatible.");
        }

        if (!req.files) {
            req.flash("success", "Imagen no insertada.");
        }

        const ubicacion = __dirname + "/../public/img/daños/" + imagenUsuario.name;

        imagenUsuario.mv(ubicacion, function (err) {
            if (err) {
                return req.flash("message", err);
            }
            sql.query("UPDATE orderWorks SET imageOrderWork = ? WHERE idOrderWork = ?", [
                imagenUsuario.name,
                idOderWork,
            ]);
            console.log("Imagen de usuario ingresada");
        });
    }

    req.flash('success', 'guardado')
    res.redirect('/cars/ordenTrabajo/list/' + id);
}

module.exports = ordenTrabajo