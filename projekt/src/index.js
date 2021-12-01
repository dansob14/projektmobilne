if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Not Registered!");
        console.log(error);
    })
}
fetch('https://api.jsonbin.io/b/6194e9c101558c731cc3e478/7')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => {
        addModal(obj)
        addDate(obj);
    });
function addModal(obj){
    var maindiv= document.getElementsByClassName("main");
    var tmp= ""; 
    for (var i = 0; i < obj.produkty.length; i++) {
        tmp = maindiv[i].innerHTML;
        tmp= "<div class=\"col-md-6 col-md-6 col-lg-4 d-flex justify-content-center text-center mb-2\"> <div class=\"card\" style=\"width: 18rem;\"><img class=\"card-img-top border cimg\" src=\"images/domyslny.jpg\" alt=\"Card image cap\"><div class=\"card-body\"><h5 class=\"card-title text-center jname\">x</h5><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter8\">Szczegóły</button><div class=\"modal fade\" id=\"exampleModalCenter8\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog modal-dialog-centered\" role=\"document\"><div class=\"modal-content text-left\"><div class=\"modal-header\"><h5 class=\"modal-title jname2\" id=\"exampleModalLongTitle8\">x</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body jdate pl-2\"><p><button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample8\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Pokaż więcej</button></p><div class=\"collapse\" id=\"collapseExample8\"><div class=\"card card-body jdetails\"></div></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Zamknij</button></div></div></div></div></div></div></div>";
        maindiv[i].innerHTML = tmp;
    }

}
function addDate(obj) {
    var elemsImg = document.getElementsByClassName("cimg");
    var elemsName = document.getElementsByClassName("jname");
    var elemsName2 = document.getElementsByClassName("jname2");
    var elemsJdate = document.getElementsByClassName("jdate");
    var elemsJdetails = document.getElementsByClassName("jdetails");
    var tmpstr = "";
    var tmpstr2 = "";
    for (var i = 0; i < obj.produkty.length; i++) {
        elemsImg[i].setAttribute("src", obj.produkty[i].zdjecie);
        elemsName[i].innerHTML = obj.produkty[i].nazwa;
        elemsName2[i].innerHTML = obj.produkty[i].nazwa;
        tmpstr = elemsJdate[i].innerHTML;
        tmpstr2 = "<img class=\"card-img-top border\" src=\"" + obj.produkty[i].zdjecie + "\" alt=\"Card image cap\">";
        tmpstr = tmpstr2 + "<p><b> Cena: </b>" + obj.produkty[i].cena + "<p><b>Socket: </b>" + obj.produkty[i].socket + "<p><b>Ilość rdzeni: </b>" + obj.produkty[i].rdzenie + "<p><b>Ilość wątków: </b>" + obj.produkty[i].watki + tmpstr;
        elemsJdate[i].innerHTML = tmpstr;
        elemsJdetails[i].innerHTML = "<p><b>Taktowanie bazowe: </b>" + obj.produkty[i].taktowanie[0].bazowe +
            "<p><b>Taktowanie turbo: </b>" + obj.produkty[i].taktowanie[0].turbo + "<p><b>Pamięć podręczna: </b>" + obj.produkty[i].cache;

    }

}