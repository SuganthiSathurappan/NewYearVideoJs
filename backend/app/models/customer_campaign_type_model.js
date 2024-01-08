//**Create customer campaign type table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter admin campaign type table")
    const CustomerCampaignTypeTable = sequelizedb.define("customer_campaign_type_tbl", {
        cus_campaign_type_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_campaign_type: {
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
        
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return CustomerCampaignTypeTable
}