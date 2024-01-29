const db = require('../models')
const cusClientCampaignDb = db.customerClientCampaign
const cusClientDb = db.customerClient


// get all clents for particular customer

const getClientDetails = async (req, res) => {

    // const { campKey } = req.body;
     const { campKey } = req.params;
    console.log("Welcome to get Client Details : ", campKey)
    try {
        let getCusClient = await cusClientCampaignDb.findAll({
            where: {
                cus_client_campaign_key: campKey,
            },
            include: [
                {
                    model: cusClientDb,
                    attributes: ["cus_client_id", "cus_client_name"],
                },
            ],
            attributes: ["cus_client_id"]
        })
        // Assuming getCusClient is an array of objects
        const customerClients = getCusClient.map((result) => {
            return {
                cusClientId: result.cus_client_id,
                cusClientName: result.customer_client_tbl.cus_client_name,
            };
        });

        res.send(customerClients);        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getClientDetails
}