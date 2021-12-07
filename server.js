const express = require("express");
const bodyParser = require("body-parser");
const admin = require('firebase-admin');

const dotenv = require("dotenv");
dotenv.config();

var PORT = process.env.PORT || 3000;
const app = express();



var serviceAccount = {
    "type": process.env.type,
    "project_id": process.env.project_id,
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key.replace(/\\n/g, '\n'),
    "client_email": process.env.client_email,
    "client_id": process.env.client_id,
    "auth_uri": process.env.auth_uri,
    "token_uri": process.env.token_uri,
    "auth_provider_x509_cert_url": process.env.auth_provider,
    "client_x509_cert_url": process.env.client
};


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cannabisstand-dfdcb-default-rtdb.firebaseio.com"
});

const database = admin.database();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ---------------------------------------- FIREBASE TOP 10 SCORES ----------------------------------------------

let before24Hour = new Date().getTime() - (24 * 3600 * 1000);
let before30Day = new Date().getTime() - (24 * 30 * 3600 * 1000);
// ---------------------------- All Time Top10 ----------------------------->>

app.get("/7alltimetop10", function (req, res) {
    database.ref('7dayscore').orderByChild("score").limitToLast(10).on('value', function (snapshot) {
        return res.send(snapshot.val());
    });
});
app.get("/14alltimetop10", function (req, res) {
    database.ref('14dayscore').orderByChild("score").limitToLast(10).on('value', function (snapshot) {
        return res.send(snapshot.val());
    });
});
app.get("/30alltimetop10", function (req, res) {
    database.ref('30dayscore').orderByChild("score").limitToLast(10).on('value', function (snapshot) {
        return res.send(snapshot.val());
    });
});


// ------------- 7/14/30 24-hour Top10 ------------------------------------->>

app.get("/7dailytop10", function (req, res) {
    database.ref().child('7dayscore').orderByChild('dateAdded').startAt(before24Hour).on('value', function (snap) {
        return res.send(snap.val());
    });
});



// // --------------- 7/14/30 30-Day Top10 ------------------------------------>>

app.get("/7monthlytop10", function (req, res) {
    database.ref().child('7dayscore').orderByChild('dateAdded').startAt(before30Day).on('value', function (snap) {
        return res.send(snap.val());
    });
});




// ------------------------------------------------------------------------------------------------------------>



app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});