fetch('/7alltimetop10').then(response => response.json()).then(data => {
    console.log("7day top10 all time -->",data);
});

// fetch('/7dailytop10').then(response => response.json()).then(data => {
//     console.log("7day top10 daily -->",data);
// });

// fetch('/7monthlytop10').then(response => response.json()).then(data => {
//     console.log("7day top10 monthly -->",data);
// });