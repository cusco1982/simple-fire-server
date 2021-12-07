fetch('/7alltimetop10').then(response => response.json()).then(data => {
    console.log("7day top10 all time -->",data);
});
fetch('/14alltimetop10').then(response => response.json()).then(data => {
    console.log("14day top10 all time -->",data);
});
fetch('/30alltimetop10').then(response => response.json()).then(data => {
    console.log("30day top10 all time -->",data);
});

 console.log("-----------------------------------------------------------------")

fetch('/7dailytop10').then(response => response.json()).then(data => {
    console.log("7day top10 daily -->",data);
});
fetch('/14dailytop10').then(response => response.json()).then(data => {
    console.log("14day top10 daily -->",data);
});
fetch('/30dailytop10').then(response => response.json()).then(data => {
    console.log("30day top10 daily -->",data);
});

console.log("-----------------------------------------------------------------")


fetch('/7monthlytop10').then(response => response.json()).then(data => {
    console.log("7day top10 monthly -->",data);
});
fetch('/14monthlytop10').then(response => response.json()).then(data => {
    console.log("14day top10 monthly -->",data);
});
fetch('/30monthlytop10').then(response => response.json()).then(data => {
    console.log("30day top10 monthly -->",data);
});