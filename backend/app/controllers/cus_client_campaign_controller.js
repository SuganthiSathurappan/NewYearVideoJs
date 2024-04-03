const db = require('../models')
const cusClientCampaignDb = db.customerClientCampaign
const cusClientDb = db.customerClient


// Declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

async function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const existingCampaignKey = await cusClientCampaignDb.findOne({
        where: {
            cus_client_campaign_key: result
        }
    });
    console.log("existingCampaignKey", existingCampaignKey)
    // if (existingCampaignKey) {
    //     console.log("error: 'Campaign key already exist' ")
    //     result = generateString(7)
    // }
    // else {
    console.log(result)
    return result;
    // }
}


//generate user campaign link
const addUserCampaignLink = async (req, res) => {
    console.log("Welcome add User campaign link")
    try {

        const existingUserCampaign = await cusClientCampaignDb.findOne({
            where: {
                cus_client_id: req.body.userId,
                cus_campaign_id: req.body.campaignId,
            }
        });

        if (existingUserCampaign) {
            console.log("error: 'Already exist User campaign' ")
            return res.send("0")
        }
        else {
            const generateKey = await generateString(7)
            console.log("generateKey : ", generateKey)
            const campaignLink = req.body.userCampaignLink + generateKey
            console.log(campaignLink)
            const info = {
                cus_client_link: campaignLink,
                cus_client_campaign_key: generateKey,
                cus_client_id: req.body.userId,
                cus_campaign_id: req.body.campaignId,
                cus_voice_id: req.body.voiceId
            }
            console.log("userID: ", req.body.userId)

            // If email and mobile are both unique, create the new user
            const addedUserLink = await cusClientCampaignDb.create(info)
            res.send(addedUserLink)
            console.log(addedUserLink)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

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
    addUserCampaignLink,
    getClientDetails
}