const Levels = (sequelize, type) => {
    return sequelize.define('Levels', {
        idLevels: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gasLevels: type.STRING,
        motorOilLevels: type.STRING,
        refrigerantLevels: type.STRING,
        brakeFluidLevels: type.STRING,
        WIPPERLevels: type.STRING,
        transOilLevels: type.STRING,
        creatLevels: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateLevels: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Levels