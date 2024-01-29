const db = require('../models')
const cusClientDb = db.customerClient


// get all clents for particular customer

const getAllClient = async (req, res) => {
    try {
        let getCusClient= await cusClientDb.findAll({
            where: {
                ad_customer_id: req.params.id, // Replace with the desired ad_customer_id    
            },
        })
        // res.json({ message: 'Get all client ' })
        res.send(getCusClient)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getAllClient
}