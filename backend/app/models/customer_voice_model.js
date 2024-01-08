//**Create customer voice table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter admin cus voice table")
    const CustomerVoiceTable = sequelizedb.define("customer_voice_tbl", {
        cus_voice_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_voice_path : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        cus_voice_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_voice_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        // ad_client_campaign_id: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'admin_client_campaign_tbl', // Referenced table name
        //         key: 'ad_client_campaign_id' // Referenced column name
        //     }
        // },
        ad_customer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'admin_customer_tbl', // Referenced table name
                key: 'ad_customer_id' // Referenced column name
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return CustomerVoiceTable
}