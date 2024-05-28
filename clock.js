function Update() {
    // console.log("this is update");
    var now = new Date();
    var seco = now.getSeconds()*6;
    var minu = now.getMinutes();
    var hour = (now.getHours() % 12) + minu / 60;
    // var secangle = seco * 6;
    var minangle = minu * 6;
    var hourangle = hour * 30;
    document.getElementById("sec").setAttribute("transform", "rotate(" + seco + ",200,200)");
    document.getElementById("min").setAttribute("transform", "rotate(" + minangle + ",200,200)");
    document.getElementById("hou").setAttribute("transform", "rotate(" + hourangle + ",200,200)");
    setTimeout(Update, 1000);
}