const Gas = (sequelize, type) => {
    return sequelize.define('Gas', {
        idGas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startGas: type.STRING,
        finishGas: type.STRING,
        totalGas: type.STRING,
        newGas: type.STRING,
        typeGas: type.STRING,
        precieGas: type.STRING,
        gallonsGas: type.STRING,
        tankedGas: type.STRING,
        totalTankeMondGas: type.STRING,
        consumptionGast: type.STRING,
        averageActualGas: type.STRING,
        averageNewGas: type.STRING,
        creatGas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateGas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Gas