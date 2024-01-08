//**Create customer campaign table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter admin campaign type table")
    const CustomerCampaignTable = sequelizedb.define("customer_campaign_tbl", {
        cus_campaign_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_campaign_title: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cus_campaign_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_campaign_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_campaign_type_id: {
            type : Sequelize.INTEGER,
            allowNull : false,
            reference: {
                model: 'customer_campaign_type_tbl', //Reference table name
                key : 'cus_campaign_type_id' //Reference column name
            }
        },
        ad_customer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'admin_customer_tbl', // Referenced table name
                key: 'ad_customer_id' // Referenced column name
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return CustomerCampaignTable
}