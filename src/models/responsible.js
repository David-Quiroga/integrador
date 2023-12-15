const Responsible = (sequelize, type) => {
    return sequelize.define('Responsibles', {
        idResponsible: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameResponsible: type.STRING,
        observationResponsible: type.STRING,
        creatResponsible: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateResponsible: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Responsible