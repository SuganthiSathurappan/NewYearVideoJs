const db = require('../models')
const cusClientDb = db.customerClient

//added new user
const addUser = async (req, res) => {
    console.log("Welcome add User ")
    try {
        const info = {
            cus_client_name: req.body.userName,
            cus_client_email: req.body.userEmail,            
            cus_client_phone: req.body.userMobile,
            ad_customer_id:req.body.customerId            
        }
        console.log("email: ", req.body.userEmail)
        // Check if the email or mobile number already exist
        const existingUserByEmail = await cusClientDb.findOne({
            where: {
                cus_client_email: req.body.userEmail
            }
        });
        const existingUserByMobile = await cusClientDb.findOne({
            where: {
                cus_client_phone: req.body.userMobile
            }
        });

        if (existingUserByEmail || existingUserByMobile) {
            console.log("error: 'Email or mobile number already exist' ")
            return res.send("0")
        }
        // If email and mobile are both unique, create the new user
        const createUser = await cusClientDb.create(info)
        res.send(createUser)
        console.log(createUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}




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
    addUser,
    getAllClient
}