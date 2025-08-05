function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "cd_cat.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    var title, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";

    title = xmlDoc.getElementsByTagName("TITLE");
   
    for (i = 0; i < title.length; i++) {
        txt += title[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
