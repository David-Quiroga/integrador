const vendor = (sequelize, type) => {
    return sequelize.define('vendors', {
        idVendor: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameVendor: type.STRING,
        phoneVendor: type.STRING,
        addressVendor: type.STRING,
        creatvendor: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatevendor: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = vendor