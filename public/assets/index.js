fetch('/7alltimetop10').then(response => response.json()).then(data => {
    for (i = 0; i < data.length; i++) {
        // console.log(data[i]);
        const username = data[i].username;
        const score = data[i].score;
        const facebook = data[i].facebook;
        const twitter = data[i].twitter;
        const instagram = data[i].insta;
        // console.log(username, score, facebook, twitter, instagram);
        let userColumn = document.querySelector('.username');
        userColumn.innerHTML = "";
        userColumn.innerHTML = username;
    }
});
fetch('/14alltimetop10').then(response => response.json()).then(data => {
    console.log("Alltime 14", data);
});
fetch('/30alltimetop10').then(response => response.json()).then(data => {
    console.log("Alltime 30", data);
});



fetch('/7dailytop10').then(response => response.json()).then(data => {
    console.log("Daily 7", data);
});
fetch('/14dailytop10').then(response => response.json()).then(data => {
    console.log("Daily 14", data);
});
fetch('/30dailytop10').then(response => response.json()).then(data => {
    console.log("Daily 30", data);
});




fetch('/7monthlytop10').then(response => response.json()).then(data => {
    console.log("Monthly 7", data);
});
fetch('/14monthlytop10').then(response => response.json()).then(data => {
    console.log("Monthly 14", data);
});
fetch('/30monthlytop10').then(response => response.json()).then(data => {
    console.log("Monthly 30", data);
});