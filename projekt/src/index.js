if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js").then(registration =>{
     console.log("SW Registered!");
     console.log(registration);
 }).catch(error =>{
    console.log("SW Registered!");
     console.log(error);
 })  
}
fetch('https://api.jsonbin.io/b/6194e9c101558c731cc3e478/4')
    .then(res => res.json())
    .then(data => obj = data)
    .then(() =>{
    addDate(obj);
          });
    
   function addDate(obj){
    var elemsImg = document.getElementsByClassName("cimg");
    var elemsName = document.getElementsByClassName("jname");
    var elemsName2 = document.getElementsByClassName("jname2");
    //var elemsJdate = document.getElementsByClassName("jdate");
    //var elemsJdetails = document.getElementsByClassName("jdetails");
    //var tmpstr="";
    //var tmpstr2="";
    for(var i=0;i<obj.produkty.length;i++)
    {
    elemsImg[i].setAttribute("src",obj.produkty[i].zdjecie);
    elemsName[i].innerHTML=obj.produkty[i].nazwa;
    elemsName2[i].innerHTML=obj.produkty[i].nazwa;
    //tmpstr=elemsJdate[i].innerHTML;
    //tmpstr2="<img class=\"card-img-top border\" src=\""+obj[i].zdjecie+"\" alt=\"Card image cap\">";
    //tmpstr=tmpstr2+"<p><b> Data: </b>"+obj[i].date+"<p><b>Godzina: </b>"+obj[i].hour+"<p><b>Krótki opis: </b>"+obj[i].short_desc+tmpstr;
    //elemsJdate[i].innerHTML=tmpstr;
    //elemsJdetails[i].innerHTML="<p><b>Ważne: </b>"+obj[i].details.wazne+"<p><b>Powtarzalne: </b>"+obj[i].details.powtarzalne+"<p><b>Powiadomienia: </b>"+obj[i].details.powiadomienia+"<p><b>Typ: </b>"+obj[i].details.type+"<p><b>Opis: </b>"+obj[i].details.desc;

    }
    /*async function PrintProdukty() {
    
        var url = "src/json.JSON";
        const response = await fetch(url);
        data = await response.json();
        var output;
        for(var i = 0 ;data.length > i; i++){
            InnerNazwa('<h4 class="card-title">' + data[i].nazwa + '</h4>',i);
            InnerZdjecie('<img src="' + data[i].zdjecie + '" width=200 height=200"></a><br>',i);
        } 
    }
    function InnerNazwa(val,id){

        output = document.getElementById("nazwa" + id);  
        output.innerHTML = val;
    }
    
    function InnerZdjecie(val){
    
        output = document.getElementById("zdjecie");
        output.innerHTML = val;
    }*/
}