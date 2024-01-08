//**Create admin customer table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter admin customer table")
    const AdminCustomerTable = sequelizedb.define("admin_customer_tbl", {
        ad_customer_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ad_customer_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        ad_customer_city: {
            type: Sequelize.STRING(100),
            allowNull: false 
        },
        ad_customer_country: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        ad_customer_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        ad_customer_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        // ad_course_id: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'master_courses_tbl', // Referenced table name
        //         key: 'ad_course_id' // Referenced column name
        //     }
        // }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return AdminCustomerTable
}