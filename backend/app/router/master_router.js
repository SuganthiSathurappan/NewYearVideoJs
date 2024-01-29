//router.js
const router = require('express').Router();

const campaignType = require('../controllers/customer_campaign_type_controller')
const cusClient = require('../controllers/cus_client_controller')
const cusClientCamp=require('../controllers/cus_client_campaign_controller')

//get all Campaign Type details
router.get('/hdfc/getAllCampaignType', campaignType.getAllCampaignType)

//get all Client details
router.get('/hdfc/getAllClient/:id', cusClient.getAllClient)

//get all Client details
router.get('/hdfc/getClientDetails/:campKey', cusClientCamp.getClientDetails)

module.exports = router