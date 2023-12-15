const Destination = (sequelize, type) => {
    return sequelize.define('Destination', {
        idDestination: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startingPointDestination: type.STRING,
        finalPointDestination: type.STRING,
        creatDestination: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateDestination: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Destination