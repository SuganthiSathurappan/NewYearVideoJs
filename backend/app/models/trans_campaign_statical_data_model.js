//**Create trans campaign statical data table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter trans campaign statical data table")
    const TransCampaignStaticalDataTable = sequelizedb.define("trans_campaign_statical_data_tbl", {
        trans_campaign_data_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trans_cus_time: {
            type:Sequelize.STRING,
        },
        trans_cus_current_location : {
            type:Sequelize.STRING, 
        },
        trans_cus_current_ip_address : {
            type:Sequelize.STRING,
        },
        trans_campaign_data_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        trans_campaign_data_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_client_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_client_tbl', // Referenced table name
                key: 'cus_client_id' // Referenced column name
            }
        },
        cus_campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_campaign_tbl', // Referenced table name
                key: 'cus_campaign_id' // Referenced column name
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return TransCampaignStaticalDataTable
}