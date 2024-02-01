document.getElementById('lbsInput').addEventListener('input', function(e){
    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML =  (pounds * 453.6).toFixed(2) + ' grams';
    document.getElementById('kgOutput').innerHTML =  (pounds / 2.2046).toFixed(2) +  ' kg';
    document.getElementById('ozOutput').innerHTML =  Math.round((pounds*16)*10)/10 + " oz";
    

})