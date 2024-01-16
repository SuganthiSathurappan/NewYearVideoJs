const express = require("express");
const cors = require('cors');
const app = express();
const body_parse = require("body-parser")

const fs = require('fs');
const https = require('https');

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
app.use(body_parse.urlencoded({ extended: true }))

// routers
const router = require("./app/router/master_router")

app.use('/api', router)

// // Set up HTTPS server
// const privateKey = fs.readFileSync('/usr/share/source/media-techtist.key', 'utf8');
// const certificate = fs.readFileSync('/usr/share/source/certificate.crt', 'utf8');
// const credentials = { key: privateKey, cert: certificate };
// const httpsServer = https.createServer(credentials, app);

app.get("/", (req, res) => {
    console.log('message:Welcome to backend API')
    res.json({ message: 'Welcome to backend API' })
});

//port 
const PORT = process.env.PORT || 3000
//server
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`)
});

// // Start the HTTPS server
// const PORT = process.env.PORT || 3000;
// httpsServer.listen(PORT, () => {
//   console.log(`Server is running on https://localhost:${PORT}`);
// });