//**Create trans user interact table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter trans user interact table")
    const TransUserInteractTable = sequelizedb.define("trans_user_interact_tbl", {
        trans_user_interact_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trans_user_interact_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        trans_user_interact_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        trans_campaign_data_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'trans_campaign_statical_data_tbl', // Referenced table name
                key: 'trans_campaign_data_id' // Referenced column name
            }
        },
        cus_interact_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_interactive_tbl', // Referenced table name
                key: 'cus_interact_id' // Referenced column name
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return TransUserInteractTable
}