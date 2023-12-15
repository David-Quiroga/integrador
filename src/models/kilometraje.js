const Mileage = (sequelize, type) => {
    return sequelize.define('Mileage', {
        idMileage: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateMileage: type.STRING,
        startMileage: type.STRING,
        finishMileage: type.STRING,
        totalMileage: type.STRING,
        reviewedMileage: type.STRING,
        consumptionMileage: type.STRING,
        performanceMileage: type.STRING,
        VBMileage: type.STRING,
        creatMileage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateMileage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Mileage