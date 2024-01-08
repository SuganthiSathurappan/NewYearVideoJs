//**Create customer custom form table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter customer custom form table")
    const CustomerCustomFormTable = sequelizedb.define("customer_custom_form_tbl", {
        cus_custom_options_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_custom_options_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cus_custom_options_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_custom_options_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_campaign_tbl', // Referenced table name
                key: 'cus_campaign_id' // Referenced column name
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return CustomerCustomFormTable
}