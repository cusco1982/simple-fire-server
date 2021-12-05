let top10; 
console.log("front-end");


fetch('/top10').then(response => response.json()).then(data => {top10 = data});

console.log(top10);