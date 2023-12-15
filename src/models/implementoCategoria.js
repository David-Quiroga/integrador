const implementedCategory = (sequelize, type) =>{
    return sequelize.define('implementedCategories', {
        idImplementedCategory: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameImplementedCategory: type.STRING,
        stateImplementedCategory: type.STRING,
        creatImplementedCategory: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateImplementedCategory: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = implementedCategory