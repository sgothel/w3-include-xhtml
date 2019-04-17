/* Hack for IE < 9 ?? */
document.createElement("W3-INCLUDE-XHTML");

function w3_include_xhtml() {
  var z, i, elmnt, file, xhttp;
  /* loop through a collection of all W3-INCLUDE-XHTML elements */
  z = document.getElementsByTagName("W3-INCLUDE-XHTML");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* only act unhandled href attribute */
    file = elmnt.getAttribute("href");
    if (file) {
      /* remove the href attribute, avoiding infinite recursion */ 
      elmnt.removeAttribute("href");
      /* prepend a new DIV element, holding the XHTML content after reading */
      var divNode = document.createElement("DIV");
      elmnt.parentNode.insertBefore(divNode,elmnt);
      /* add HTTP request for the XHTML href file */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          } else if (this.status == 200) {
            divNode.innerHTML = this.responseText;
          }
          /* semi-recursive over new DOM */
          w3_include_xhtml();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
