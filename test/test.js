var httpRequest = new XMLHttpRequest();

var links = document.querySelectorAll('.meteo');
for (i=0; 1 < links.length; i++){
    var link = links[i]
    link.addEventListener('click', function(){
        
    })
}

httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4){
        console.log(httpRequest.responseText)
        document.getElementById('result').innerHTML = httpRequest.responseText;
    }
}
httpRequest.open('GET', '/simplon/projet-arcade-np/test/index.php?city=Monpellier', true);
httpRequest.send();