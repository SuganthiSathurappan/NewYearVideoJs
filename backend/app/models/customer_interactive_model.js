//**Create customer interactive table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter customer interactive table")
    const CustomerInteractiveTable = sequelizedb.define("customer_interactive_tbl", {
        cus_interact_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_interact_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cus_interact_path: {
            type: Sequelize.STRING(100),
            allowNull: false  
        },
        cus_interact_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_interact_updated_date: {
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

    return CustomerInteractiveTable
}