const orderWork = (sequelize, type) => {
    return sequelize.define('orderWorks', {
        idOrderWork: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        applicantOrderWork: type.STRING,
        imageOrderWork: type.STRING,
        amountOrderWork: type.STRING,
        typeOrderWork: type.STRING,
        detailOrderWork: type.STRING,
        unitPriceOrderWork: type.STRING,
        totalPriceOrderWork: type.STRING,
        totalOrderWork: type.STRING,
        dateOrderWork: type.STRING,
        aproximatePrecie: type.STRING,
        firmSupervisor: type.STRING,
        creatorderWork: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateorderWork: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = orderWork