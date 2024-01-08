//**Create trans user form table */
module.exports = (sequelizedb, Sequelize) => {
    console.log("enter trans user form table")
    const TransUserFormTable = sequelizedb.define("trans_user_form_tbl", {
        trans_user_form_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trans_user_form_details: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        trans_user_form_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        trans_user_form_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toString()
        },
        trans_user_interact_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'trans_user_interact_tbl', // Referenced table name
                key: 'trans_user_interact_id' // Referenced column name
            }
        },
        cus_interact_options_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'customer_interactive_options_tbl', // Referenced table name
                key: 'cus_interact_options_id' // Referenced column name
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return TransUserFormTable
}