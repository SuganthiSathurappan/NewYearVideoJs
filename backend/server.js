const express = require("express");
const cors = require('cors');
const app = express();
const body_parse = require("body-parser")

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

//middleware 
app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(body_parse.json());
app.use(express.urlencoded({ extended: true }))
// app.use(body_parse.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    console.log('message:Welcome to backend API')
    res.json({ message: 'Welcome to backend API' })
});

//port 
const PORT = process.env.PORT || 8080
//server
app.listen(PORT, () => {
    console.log(`Server in running on port ${PORT}`)
});
// db.sequelize.sync();
// db.sequelize.sync({force : false}).then(()=> {
//     console.log('Synced database and tables created');
// });
