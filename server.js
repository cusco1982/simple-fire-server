const express = require("express");
const bodyParser = require("body-parser");
const admin = require('firebase-admin');

const dotenv = require("dotenv");
dotenv.config();

var PORT = process.env.PORT || 3000;
const app = express();


var serviceAccount =
{
    //     "type": "service_account",
    //     "project_id": "cannabisstand-dfdcb",
    //     "private_key_id": "d28f15a96055db1c73567ecb1617fc5be86751d6",
    //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0vrNoVI2AwP4K\nvviFK4sDgIoIdpRlptvh6H6YT+MUrAwVal+fK7svOPLNvvs0JG88GvGkiY3cqx2E\nbcJw5g0EQzSHh+9mTDsO1Lf7Pyl68pXxx4QidsyV7R4QwsEfy34PiJr4WGz27OfU\nwYMCidAPrTvT0DHw2k7DBPE9Lp1PzfnED95ljm0IO7o04sRBTy/X6JtZpfE5FT8k\nuoa6bs6zyp4m9gCHSQilNDVxxguisDK/cvSkh0J5SXQlZrUL2Z/x9bSlTCu2Tays\n7nHXOibK9JXoAtWRzmjJ7N6oAqoCkTCeqs9iRfytZvDFIYqmeoVVOluDdFlMhwrR\nsTnZzwQdAgMBAAECggEAHKbiX9aPe+qcGu39DXdCmTKGLyNFEPwrfRtS/igj0kIX\nxElRkTTofmrjqpPs1G42J+wJhFC96U5C5pxTp3wAcj2JFTcKT0gkUIyOAckYdUIB\nXQuIucHlWpr1GikVXknu2N2J23aBB3+0nHh0oTFhhyqqAkDNueWReL7O0ykRjPXQ\nuS+LFxd6bH9lvQV1XWEkaLwgyVlNk38mtdt1BIVYlmxIqJkT5KTt+o6SZ7XYCxIs\n5UovRy8BH3W9SuJNgUx9jVJC9nA3DFhCQ3YXcD5AthEED3kyM5td3mbZwQurEie/\nrs1Fe4Vu4A5CN7VOucLVPiSqbeWJwCFn3G6EZvHjQQKBgQDdVRiHTPDOL0pQndUY\nC4xguBDF94QfhMe8vJaajZ5vQIIMIz6ETJv/qz/FdvvkCIvm2uHhwsXFI6zXXV3F\n4rvLoG/kDRtsjDNBSaFp0k/bkIv9zPN3917p/DCk7S6fNET78LqlR/rsycKLNyrL\nmnpJ4BRFTKao77Rvidzcc8eysQKBgQDRDiSyxXYh14r43qgXVJMur9vvkMBjgz+U\n9itkWhiR0rkUyiLcUCSayuBIGlMX4gpGofvIKPAg1/fqQ2yypqow07uTUZBLVftn\n0mA0cIHjoK1j1EJCG7cXdo+L9ftkSIYRYRtz1cR18SrCgL47lUO/7j02Ayfio6m6\nAzGctzcLLQKBgAmTC8uWjXgt3YYdPcGbhkgMzlTx/xop8UX91nn7FFZ1sOp7f9HT\nSpBFxS1ylzTnFb43y7urZEjB4VEzrcHIrB0D5LM1yfDpI7J4T+429dNmrledTQ7s\neYOfsC8CP5kNdsp7QGez9GvX0n2ZNlW2agHWGqpgxXjbXa/Rg+dZbtMRAoGAVgs6\nM5JuYtNyUahjCuc2hPrAzUOIy+yTWN5RUcZ7YlmW7+Wan48k4ckqssKS/Lt+ez/k\nf6fJ3drGIVeK/6T1W49qHuJtP3SuOzctfafo7iWN+A6/DrKVk0SrJHIj/EyVUcXk\nJLMRX3HZpaCTq7Zt4itOalK2MeQm0XbLDrOiJikCgYEAz00cnTaMdaT2hDgOQNkR\nEitCm5V3ipq4SzdK3cj+zgRPJLfnnUyqYAuIKGGYNqQdEkjLN+Bagoyp4JUML9o/\njCslN7NOKSBIdHMK2AValWXpzGx/Hj8j1BPhwdlAiji2tgSXpkuFuo7TUOg28eil\nuZZgojWWIf6jlwr0TytonE0=\n-----END PRIVATE KEY-----\n",
    //     "client_email": "firebase-adminsdk-8a9co@cannabisstand-dfdcb.iam.gserviceaccount.com",
    //     "client_id": "110866442327222236207",
    //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    //     "token_uri": "https://oauth2.googleapis.com/token",
    //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8a9co%40cannabisstand-dfdcb.iam.gserviceaccount.com"

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

// ------------------------------------------------------------------------------------------------------- FIREBASE ->

let before24Hour = new Date().getTime() - (24 * 3600 * 1000);
let before30Day = new Date().getTime() - (24 * 30 * 3600 * 1000);

// ---------------------------------------------- all-time Top10 --------------------------
app.get("/7alltimetop10", function (req, res) {

    database.ref('7dayscore').orderByChild("score").limitToLast(10).on('value', async function (snapshot) {

        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []


        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        // await userObjsArray.forEach((user, index) => {
        //     database.ref('users').child(user.userKey).once("value", function (snapshot) {
        //         console.log(snapshot.val());
        //     })
        // })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});
app.get("/14alltimetop10", function (req, res) {
    database.ref('14dayscore').orderByChild("score").limitToLast(10).on('value', async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []


        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        // await userObjsArray.forEach((user, index) => {
        //     database.ref('users').child(user.userKey).once("value", function (snapshot) {
        //         console.log(snapshot.val());
        //     })
        // })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});
app.get("/30alltimetop10", function (req, res) {
    database.ref('30dayscore').orderByChild("score").limitToLast(10).on('value', async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []


        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        // await userObjsArray.forEach((user, index) => {
        //     database.ref('users').child(user.userKey).once("value", function (snapshot) {
        //         console.log(snapshot.val());
        //     })
        // })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});






// --------------------------------- 7/14/30 24-hour Top10 ----------------------
app.get("/7dailytop10", function (req, res) {
    database.ref().child('7dayscore').orderByChild('dateAdded').startAt(before24Hour).on('value',async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []

        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});
app.get("/14dailytop10", function (req, res) {
    database.ref().child('14dayscore').orderByChild('dateAdded').startAt(before24Hour).on('value',async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []

        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});
app.get("/30dailytop10", function (req, res) {
    database.ref().child('30dayscore').orderByChild('dateAdded').startAt(before24Hour).on('value', async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []

        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});






// -------------------------------- 7/14/30 30-Day Top10 ------------------------------
app.get("/7monthlytop10", function (req, res) {
    database.ref().child('7dayscore').orderByChild('dateAdded').startAt(before30Day).on('value', async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []

        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});
app.get("/14monthlytop10", function (req, res) {
    database.ref().child('14dayscore').orderByChild('dateAdded').startAt(before30Day).on('value', async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []

        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});
app.get("/30monthlytop10", function (req, res) {
    database.ref().child('30dayscore').orderByChild('dateAdded').startAt(before30Day).on('value', async function (snapshot) {
        const top10obj = snapshot.val();
        const userObjsArray = [];
        const finalArr = []

        for (const userObjs in top10obj) {
            const userObj = top10obj[userObjs]
            userObjsArray.push(userObj);
        }
        userObjsArray.sort(function (a, b) { return b.score - a.score })

        for (let i = 0; i < userObjsArray.length; i++) {
            const userkey = userObjsArray[i].userKey
            const scores = userObjsArray[i].score
            await database.ref('users').child(userkey).once("value", function (snapshot) {
                const top10userObj = snapshot.val();
                finalArr.push(
                    {
                        username: top10userObj.username,
                        score: scores,
                        insta: top10userObj.instagram,
                        facebook: top10userObj.facebook,
                        twitter: top10userObj.twitter
                    }
                );
            });
        }
        return res.send(finalArr);
    });
});



// ------------------------------------------------------------------------------------------------------------ FIREBASE END ->




app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});