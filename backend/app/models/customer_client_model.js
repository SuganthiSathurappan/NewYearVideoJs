//**Create admin Client table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter admin client table")
    const CustomerClientTable = sequelizedb.define("customer_client_tbl", {
        cus_client_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cus_client_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cus_client_email: {
            type: Sequelize.STRING(100),
            allowNull: false  
        },
        cus_client_phone : {
            type: Sequelize.STRING(15),
            allowNull:false,
        },
        cus_client_designation : {
            type: Sequelize.STRING(100),
            allowNull:true,
        },
        cus_client_address : {
            type: Sequelize.STRING,
            allowNull:true, 
        },
        cus_client_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        cus_client_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
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

    return CustomerClientTable
}