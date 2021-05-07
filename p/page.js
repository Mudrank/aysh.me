var varSection = window.location.search.substr(1);
var varArray = varSection.split("&");
var b = ""
for(var v=0; v<varArray.length; v++) { var keyValueArray = varArray[v].split("=");

if(keyValueArray[0]=="i") {

  if(keyValueArray[1]==1){
    b = "y"
  }
}
}
function goback() {
  if (b == 1) {
    window.history.back();}
  else {location.href = "https://aysh.me"
}
}