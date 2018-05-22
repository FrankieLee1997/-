function banner(){
//初始化touchEvents对象
	//touchEvents.initTouchEvents();
	
	var imgbanner = document.getElementById("slider");
	var width = imgbanner.clientWidth;
	var imgbox = imgbanner.getElementsByClassName("banner-box")[0];
	imgbanner.addEventListener("touchstart",function(e){
		var touch = e.touches[0];
		var x = touch.clientX;
		var y = touch.clientY;
		var curr = imgbanner.getElementsByClassName("curr-img")[0];
        var next = get_nextsibling(curr);
        var prev = get_previoussibling(curr);
		this.addEventListener("touchmove",function(event){
			move = event.touches[0].clientX - x;
			console.log(move)
			if(move<0){//左滑		
				imgbox.style.webkitTransform = 'translateX('+move+'px)';
			}else{//右滑
				imgbox.style.webkitTransform = 'translateX('+move+'px)';
			}
			this.addEventListener("touchend",function(){
				if(width/2+move<0){
					imgbox.className = "banner-box animate";
					imgbox.style.webkitTransform = 'translateX('+(-width)+'px)';
					window.setTimeout(function(){
                        curr.parentNode.appendChild(prev);
                        curr.parentNode.removeChild(prev);
                    },10);
					curr.className = "";
                    next.className = "curr-img";
                    
                }else{
                	imgbox.className = "banner-box animate";
                    imgbox.style.webkitTransform = 'translateX(0px)';                   
                }
			})
		});
	}); 
}
function get_previoussibling(n)
{
	var x=n.previousSibling;
	while (x.nodeType!=1)
	  {
	  x=x.previousSibling;
	  }
	return x;
}
function get_nextsibling(n)
{
	var x=n.nextSibling;
	while (x.nodeType!=1)
	  {
	  x=x.nextSibling;
	  }
	return x;
}
//var touchEvents = {
//  touchstart: "touchstart",
//  touchmove: "touchmove",
//  touchend: "touchend",
//
//      /**
//       * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
//       */
//  initTouchEvents: function () {
//      if (isPC()) {
//          this.touchstart = "mousedown";
//          this.touchmove = "mousemove";
//          this.touchend = "mouseup";
//      }
//  }
//};  
//function isPC(){    
//  var userAgentInfo = navigator.userAgent;  
//  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");    
//  var flag = true;    
//  for (var v = 0; v < Agents.length; v++) {    
//     	if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }    
//  }    
//  return flag;    
//}