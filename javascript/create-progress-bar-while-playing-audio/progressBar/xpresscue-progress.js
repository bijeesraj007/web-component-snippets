var a = document.getElementById("playLogo");
var b = document.getElementById("pauseLogo");
var audio = document.getElementById("audio");
a.addEventListener("click", function(){
    audio.play();
    a.style.visibility = 'hidden';
    b.style.visibility = 'visible';
    

})
b.addEventListener("click", function(){
    audio.pause();
    b.style.visibility = 'hidden';
    a.style.visibility = 'visible';

})

var c = document.getElementById("start"); 
var d = document.getElementById("end"); 

audio.addEventListener("timeupdate", function(){

    //left side current time
    var currentTime = audio.currentTime;
    var h = Math.floor(currentTime / 3600);
    currentTime = currentTime - (h * 3600);
    var m = Math.floor(currentTime / 60);
    currentTime = currentTime - (m * 60 );
    var s = Math.floor(currentTime)
    c.innerHTML = ('0' + h) + ':' + ( m < 10 ? '0' + m : m) + ':' +( s < 10 ? '0' + s : s);
    var w = document.getElementById("start").value;

    //right side duration
    console.log(audio.duration);
     var duration = audio.duration - audio.currentTime;
    var h = Math.floor(duration / 3600);
    duration = duration - (h * 3600);
    var m = Math.floor(duration / 60);
    duration = duration - (m * 60 );
    var s = Math.floor(duration);
    d.innerHTML = ( '0' + h) + ':' + ( m < 10 ? '0' + m : m) + ':' +( s < 10 ? '0' + s : s);
    

    // d.innerHTML = Math.ceil(audio.duration - audio.currentTime);
    document.getElementById("innerBar").style.width = audio.currentTime / audio.duration * 100 + '%';
    
})

audio.addEventListener("ended", function(){
    b.style.visibility = 'hidden';
    a.style.visibility = 'visible';
    // c.innerHTML = ( 0 +':'+ 0+':'+0)
    // d.innerHTML = (w);
    document.getElementById("innerBar").style.width = 0 +'%';
})

