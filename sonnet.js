var theSonnet = document.getElementById("sonnet").innerHTML;

var orphansPosition = theSonnet.indexOf("orphans");
console.log(orphansPosition);
var numberOfChar = theSonnet.length;
console.log(numberOfChar);
var replaceWinter = theSonnet.replace("winter", "yuletide");
console.log(replaceWinter);
var newReplaceWinter = replaceWinter.replace("hath", "have");
console.log(newReplaceWinter);
replaceAllWinter = newReplaceWinter.replace("From", "from");
console.log(replaceAllWinter);
 


var replaceLarge = replaceAllWinter.replace(/ the | The |The /g, "a large")
console.log(replaceLarge);


var injector =  document.getElementById("sonnet");
injector.innerHTML= replaceLarge;
