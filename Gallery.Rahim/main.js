document.body.onload=function() {
    i=1;
    ang=0;
    setInterval("album()",20);
};
function album(){
    document.getElementById("container").style.transform="perspective(1000px) rotateY("+ang+"deg)";
    ang++;
    if(ang>=360) ang=0;
    if(ang==90 || ang==270) {
        i+=1;
        if(i>39) i=1;
        document.getElementById("photo").style.backgroundImage="url('images/im"+i+".jpg')";
        document.getElementById("reflet").style.backgroundImage="url('images/im"+i+".jpg')";
    }
}