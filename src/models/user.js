const user = (sequelize, type) => {
    return sequelize.define('users', {
        idUsers: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usernameUser: type.STRING(99),
        passwordUser: type.STRING,
        identificationCardUser: type.STRING,
        namesUser: type.STRING,
        emailUser: type.STRING,
        phoneUser: type.STRING,
        creatUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = user