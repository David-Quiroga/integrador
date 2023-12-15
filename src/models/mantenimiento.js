const Maintenance = (sequelize, type) => {
    return sequelize.define('Maintenance', {
        idMaintenance: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateMaintenance: type.STRING,
        amountMaintenance: type.STRING,
        mileageMaintenance: type.STRING,
        maintenanceManager: type.STRING,
        typeMaintenance: type.STRING,
        preciMaintenance: type.STRING,
        ubicationMaintenance: type.STRING,
        hourStartMaintenance: type.STRING,
        hourFinishMaintenance: type.STRING,
        timeMaintenance: type.STRING,
        remarksMaintenance: type.STRING,
        descriptionMaintenance: type.STRING,
        creatMaintenance: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateMaintenance: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Maintenance