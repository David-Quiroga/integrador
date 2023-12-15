const SecurityElemenstAndServis = (sequelize, type) => {
    return sequelize.define('SecurityElemenstAndServis', {
        idSecurityElemenstAndServis: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateSecurityElemenstAndServis: type.STRING,
        observationSecurityElemenstAndServis: type.STRING,
        creatSecurityElemenstAndServis: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateSecurityElemenstAndServis: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = SecurityElemenstAndServis