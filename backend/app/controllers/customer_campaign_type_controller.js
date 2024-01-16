const db = require('../models')
const cusCampaignType = db.customerCampaignType


// get all campaign type

const getAllCampaignType = async (req, res) => {
    try {
        let getCampaignType= await cusCampaignType.findAll({})
        res.json({ message: 'Get All Campaign Type' })
        // res.send(getCampaignType)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getAllCampaignType
}