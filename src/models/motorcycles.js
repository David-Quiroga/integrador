const Motorcycles = (sequelize, type) => {
    return sequelize.define('Motorcycles', {
        idMotorcycles: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        licenseplateMotorcycles: type.STRING,
        brandMotorcycles: type.STRING,
        modelMotorcycles: type.STRING,
        colourMotorcycles:type.STRING,
        chassisMotorcycles: type.STRING,
        engineMotorcycles: type.STRING,
        typeCars: type.STRING,
        classCars:type.STRING,
        yearsMotorcycles: type.STRING,
        creatMotorcycles: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateMotorcycles: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Motorcycles