const DetailMileage = (sequelize, type) => {
    return sequelize.define('DetailMileage', {
        idDetailMileage: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDetailMileage: type.STRING,
        nextMaintenanceDetailMileage: type.STRING,
        dateDetailMileage: type.STRING,
        nextMileagemaIntenance: type.STRING,
        responsibleDetailMileage: type.STRING,
        creatdetailMileage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedetailMileage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = DetailMileage