$(document).ready(function(){
    document.getElementById("in").oninput = function() {
        var unicodeString=document.getElementById("in").value.toString();
        var ipaString='';
        for(var i=0;i<unicodeString.length;i++){
            var x=unicodeString.charCodeAt(i);
            var y=String.fromCharCode(x+2724);
            ipaString+=y;
            console.log(x+" ");
        }
        document.getElementById("out").innerHTML=ipaString;
    };


    meSpeak.loadVoice('voices/en/en-us.json');
    meSpeak.speak('hello world');
});