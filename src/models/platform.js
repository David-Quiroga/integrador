const Cars = (sequelize, type) => {
    return sequelize.define('Cars', {
        idCars: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageCars: type.STRING,
        nombrePlataforma: type.STRING,
        password: type.STRING,
        creatCars: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateCars: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Cars