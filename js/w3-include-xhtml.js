/** https://html.spec.whatwg.org/multipage/custom-elements.html */
class W3IncludeXHTML extends HTMLElement {
  constructor() {
    super();
    this._href = null;
  }
  static get observedAttributes() { return ["href"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    // name will always be "href" due to observedAttributes
    this._href = newValue;
    this._updateRendering();
  }
  connectedCallback() {
    this._updateRendering();
  }
  get href() {
    return this._href;
  }
  set href(v) {
    this.setAttribute("href", v);
  }
  _updateRendering() {
  }
}
customElements.define("w3-include-xhtml", W3IncludeXHTML);

function w3_include_xhtml() {
  var z, i, elmnt, file, xhttp;
  /* loop through all W3-INCLUDE-XHTML elements */
  z = document.getElementsByTagName("w3-include-xhtml");
  if( 0 == z.length ) {
      /* fallback */
      z = document.getElementsByTagName("W3-INCLUDE-XHTML");
  }
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* only act unhandled href attribute */
    file = elmnt.getAttribute("href");
    if (file) {
      /* prepend a new DIV element, holding XHTML content after reading */
      var divNode = document.createElement("DIV");
      elmnt.parentNode.insertBefore(divNode,elmnt);
      /* add HTTP request for the XHTML href file */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 404) {
            divNode.innerHTML = "Page not found.";
          } else if (this.status == 200) {
            divNode.innerHTML = this.responseText;
          }
          /* remove the href attribute, avoiding infinite recursion */ 
          elmnt.removeAttribute("href");
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
