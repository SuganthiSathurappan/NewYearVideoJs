//router.js
const router = require('express').Router();

const campaignType = require('../controllers/customer_campaign_type_controller')

//get all courses details
router.get('/getAllCampaignType', campaignType.getAllCampaignType)

module.exports = router