$(document).ready(function(){
    document.getElementById("in").oninput = function() {
        document.getElementById("out").innerHTML=document.getElementById("in").value;
    };


    meSpeak.loadVoice('voices/en/en-us.json');
    meSpeak.speak('hello world');
});