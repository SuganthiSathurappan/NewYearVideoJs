//Sequelize app
const dbconfig = require('../config/db.config')
console.log("sequelize with db connect")
const Sequelize = require("sequelize")
//***One Database ***//
const sequelizedb = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host : dbconfig.HOST,
    dialect : dbconfig.dialect,

    pool: {
        max : dbconfig.pool.max,
        min : dbconfig.pool.min,
        acquire : dbconfig.pool.acquire,
        idle : dbconfig.pool.idle
    }
})

sequelizedb.authenticate()
.then(()=>{
    console.log('connected...')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelizedb

db.adminCustomer = require('./admin_customer_model')(sequelizedb,Sequelize);
db.customerCampaignType = require('./customer_campaign_type_model')(sequelizedb,Sequelize);
db.customerCampaign = require('./customer_campaign_model')(sequelizedb,Sequelize);
db.customerVoice = require('./customer_voice_model')(sequelizedb,Sequelize);
db.customerClient = require('./customer_client_model')(sequelizedb,Sequelize);
db.customerClientCampaign = require('./customer_client_campaign_model')(sequelizedb,Sequelize);
db.customerInteractive = require('./customer_interactive_model')(sequelizedb,Sequelize);
db.customerInteractiveOptions = require('./customer_interactive_options_model')(sequelizedb,Sequelize);
db.customerCustomForm = require('./customer_custom_form_model')(sequelizedb,Sequelize);
db.transCampaignStaticalData = require('./trans_campaign_statical_data_model')(sequelizedb,Sequelize);
db.transUserInteract = require('./trans_user_interact_model')(sequelizedb,Sequelize);
db.transUserForm = require('./trans_user_form_model') (sequelizedb,Sequelize);

//customer_campaign_tbl fk
db.customerCampaignType.hasMany(db.customerCampaign,{
    foreignKey: 'cus_campaign_type_id'
})
db.customerCampaign.belongsTo(db.customerCampaignType,{
    foreignKey:'cus_campaign_type_id'
})

db.adminCustomer.hasMany(db.customerCampaign,{
    foreignKey: 'ad_customer_id'
})
db.customerCampaign.belongsTo(db.adminCustomer,{
    foreignKey:'ad_customer_id'
})

//customer_voice_tbl fk
db.adminCustomer.hasMany(db.customerVoice,{
    foreignKey: 'ad_customer_id'
})
db.customerVoice.belongsTo(db.adminCustomer,{
    foreignKey:'ad_customer_id'
})

//customer_client_tbl fk
db.adminCustomer.hasMany(db.customerClient,{
    foreignKey: 'ad_customer_id'
})
db.customerClient.belongsTo(db.adminCustomer,{
    foreignKey:'ad_customer_id'
})

//customer_client_campaign_tbl fk
db.customerClient.hasMany(db.customerClientCampaign,{
    foreignKey: 'cus_client_id'
})
db.customerClientCampaign.belongsTo(db.customerClient,{
    foreignKey:'cus_client_id'
})

db.customerCampaign.hasMany(db.customerClientCampaign,{
    foreignKey: 'cus_campaign_id'
})
db.customerClientCampaign.belongsTo(db.customerCampaign,{
    foreignKey:'cus_campaign_id'
})

db.customerVoice.hasMany(db.customerClientCampaign,{
    foreignKey: 'cus_voice_id'
})
db.customerClientCampaign.belongsTo(db.customerVoice,{
    foreignKey:'cus_voice_id'
})

//customer_interactive_tbl fk
db.customerCampaign.hasMany(db.customerInteractive,{
    foreignKey : 'cus_campaign_id'
})
db.customerInteractive.belongsTo(db.customerCampaign,{
    foreignKey : 'cus_campaign_id'
})

//customer_interactive_options_tbl fk
db.customerInteractive.hasMany(db.customerInteractiveOptions,{
    foreignKey: 'cus_interact_id'
})
db.customerInteractiveOptions.belongsTo(db.customerInteractive,{
    foreignKey:'cus_interact_id'
})

//customer_custom_form_tbl
db.customerCampaign.hasMany(db.customerCustomForm,{
    foreignKey : 'cus_campaign_id'
})
db.customerCustomForm.belongsTo(db.customerCampaign,{
    foreignKey : 'cus_campaign_id'
})

//trans_campaign_statical_data-tbl fk
db.customerClient.hasMany(db.transCampaignStaticalData,{
    foreignKey: 'cus_client_id'
})
db.transCampaignStaticalData.belongsTo(db.customerClient,{
    foreignKey:'cus_client_id'
})

db.customerCampaign.hasMany(db.transCampaignStaticalData,{
    foreignKey: 'cus_campaign_id'
})
db.transCampaignStaticalData.belongsTo(db.customerCampaign,{
    foreignKey:'cus_campaign_id'
})

//trans_user_interact_details_tbl
db.transCampaignStaticalData.hasMany(db.transUserInteract,{
    foreignKey:'trans_campaign_data_id'
})
db.transUserInteract.belongsTo(db.transCampaignStaticalData,{
    foreignKey: 'trans_campaign_data_id'
})

db.customerInteractive.hasMany(db.transUserInteract,{
    foreignKey: 'cus_interact_id'
})
db.transUserInteract.belongsTo(db.customerInteractive,{
    foreignKey: 'cus_interact_id'
})

//trans_user_form_tbl
db.transUserInteract.hasMany(db.transUserForm,{
    foreignKey: 'trans_user_interact_id'
})
db.transUserForm.belongsTo(db.transUserInteract,{
    foreignKey: 'trans_user_interact_id'
})

db.customerInteractiveOptions.hasMany(db.transUserForm, {
    foreignKey: 'cus_interact_options_id'
})
db.transUserForm.belongsTo(db.customerInteractiveOptions, {
    foreignKey: 'cus_interact_options_id'
})
db.customerCustomForm.hasMany(db.transUserForm, {
    foreignKey: 'cus_custom_options_id'
})
db.transUserForm.belongsTo(db.customerCustomForm, {
    foreignKey: 'cus_custom_options_id'
})

db.sequelize.sync({ force : false })
    .then(() => {
        console.log('Database sync done!')
    });

module.exports = db