const link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    var remPart;

document.getElementById("button").onclick = function qrgenerator() {
    
    remPart = document.getElementById("inputplace").value;
    console.log(remPart);
    const combinedLink = link + remPart;
    console.log(combinedLink);
    document.getElementById("imgqrlink").src = combinedLink;
    
}



