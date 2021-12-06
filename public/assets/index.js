fetch('/top10').then(response => response.json()).then(data => {
    
    console.log("7day top10 all time :",data);
});