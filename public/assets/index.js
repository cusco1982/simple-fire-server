console.log("front-end");


fetch('/top10').then(response => response.json()).then(data => {
    
    console.log(data);
});