window.onload = function(){
	adaptable();
}
window.onresize = function(){
	adaptable();
}
function adaptable(){
    var pw = document.body.clientWidth;
    //console.log(pw);
    var size = pw*16/350;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = size+"px";
    //console.log(html.style.fontSize);
}

