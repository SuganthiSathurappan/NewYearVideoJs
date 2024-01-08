//**Create customer interactive options table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter customer interactive options table")
    const CustomerInteractiveOptionsTable = sequelizedb.define("customer_interactive_options_tbl", {
        cus_interact_options_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_interact_options_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cus_interact_options_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_interact_options_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_interact_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_interactive_tbl', // Referenced table name
                key: 'cus_interact_id' // Referenced column name
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return CustomerInteractiveOptionsTable
}