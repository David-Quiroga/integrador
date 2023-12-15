const TuitionTax = (sequelize, type) => {
    return sequelize.define('TuitionTax', {
        idTuitionTax: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rtvTuitionTax: type.STRING,
        commissionTuitionTax: type.STRING,
        commission2TuitionTax: type.STRING,
        commission3TuitionTax: type.STRING,
        commission4TuitionTax: type.STRING,
        vehicleTaxTuitionTax: type.STRING,
        tuitionTuitionTax: type.STRING,
        roadFundRegistrationTax: type.STRING,
        totalTuitionTax: type.STRING,
        creatTuitionTax: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTuitionTax: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = TuitionTax