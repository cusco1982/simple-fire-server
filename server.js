const express = require("express");
const bodyParser = require("body-parser");
const admin = require('firebase-admin');

const dotenv = require("dotenv");
dotenv.config();

var PORT = process.env.PORT || 3000;
const app = express();


// var serviceAccount = require("/Users/abstract/lemonade/server-firebase-ex/cannabisstand-dfdcb-firebase-adminsdk-8a9co-d28f15a960.json");
var serviceAccount = {
    "type": process.env.type,
    "project_id": process.env.project_id,
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key,
    "client_email": "firebase-adminsdk-8a9co@cannabisstand-dfdcb.iam.gserviceaccount.com",
    "client_id": process.env.client_id,
    "auth_uri": process.env.auth_uri,
    "token_uri": process.env.token_uri,
    "auth_provider_x509_cert_url": process.env.auth_provider,
    "client_x509_cert_url": process.env.client

};


    // "type": process.env.type,
    // "project_id": process.env.project_id,
    // "private_key_id": process.env.private_key_id,


    // "private_key": process.env.private_key,


    // "client_email": process.env.client_email,    ***notworking --->
    // Failed to load resource: the server responded with a status of 503 (Service Unavailable)
    // Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0

    
    
    // "client_id": process.env.client_id,
    // "auth_uri": process.env.auth_uri,
    // "token_uri": process.env.token_uri,
    // "auth_provider_x509_cert_url": process.env.auth_provider,
    // "client_x509_cert_url": process.env.client

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cannabisstand-dfdcb-default-rtdb.firebaseio.com"
});

const database = admin.database();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes
// require("./routes/html-routes.js")(app);
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/top10", function (req, res) {
    database.ref('30dayscore').on('value', function (snapshot) {
        return res.send(snapshot.val());
    });
});


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});