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
        addDate(obj);
    });


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