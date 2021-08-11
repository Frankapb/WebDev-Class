function clearItem () {
    for (var i = 0; i < sessionStorage.length; i++) {
      var a = sessionStorage.key(i);
      sessionStorage.removeItem(a);
    }


function clearItem(){
    sessionStorage.clear("user","root")
}