//**Create admin Client campaign table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter admin client campaign table")
    const CustomerClientCampaignTable = sequelizedb.define("customer_client_campaign_tbl", {
        cus_client_campaign_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_client_campaign_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_client_campaign_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_client_link : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        cus_client_campaign_key : {
            type : Sequelize.STRING,
            allowNull : false,
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
        },
        cus_voice_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_voice_tbl', //Reference table name
                key: 'cus_voice_id' //Referenced column name
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return CustomerClientCampaignTable
}