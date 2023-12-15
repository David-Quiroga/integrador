const SecurityElemenstAndServisDetails = (sequelize, type) => {
    return sequelize.define('SecurityElemenstAndServisDetails', {
        idSecurityElemenstAndServisDetails: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameSecurityElemenstAndServisDetails: type.STRING,
        typeSecurityElemenstAndServisDetails: type.STRING,
        stateSecurityElemenstAndServisDetails: type.STRING,
        creatSecurityElemenstAndServisDetails: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateSecurityElemenstAndServisDetails: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = SecurityElemenstAndServisDetails