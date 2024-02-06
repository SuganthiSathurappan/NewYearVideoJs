const db = require('../models')
const cusCampaignType = db.customerCampaignType


// get all campaign type

const getAllCampaignType = async (req, res) => {
    
    try {
        let getCampaignType= await cusCampaignType.findAll({})
        res.json({ message: 'Get All Campaign Type',getCampaignType })
        // res.send(getCampaignType)
    } catch (error) {
        console.error(error);
        res.json({ error: 'Server error getAllCampaignType',error });
    }
}

module.exports = {
    getAllCampaignType
}