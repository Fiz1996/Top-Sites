function myFunction() {
    var x = document.getElementById("websites");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + x.options[i].text + "&nbsp";
   }
  document.getElementById("demo").innerHTML ="&nbsp"+ txt;
}
    function getoption(){
    var x = document.getElementById("websites");
    var i = x.selectedIndex;
    document.getElementById("demo").innerHTML ="&nbsp"+ x.options[i].text;
    }

