var demo=document.getElementsByClassName('demo')[0];
var prevTime=0;
var speed=10;
var g={'37':0,'38':0,'39':0,'40':0};//加速度，长按

window.onkeydown=function(e){
	var keyCode=e.keyCode;//e.keyCode
	var key=e.key;
	var time=Date.now()-prevTime;
	prevTime=Date.now();
	
	if(time<30){
		window.cancelAnimationFrame(demo[key]);
		demo[key]=null;
		g[keyCode]++;
	}
	switch(keyCode){
		case 37:
		run(demo,key,'left',-speed-g[keyCode]);
		break;
		case 39:
		run(demo,key,'left',speed+g[keyCode]);
		break;
		case 38:
		run(demo,key,'top',-speed-g[keyCode]);
		break;
		case 40:
		run(demo,key,'top',speed+g[keyCode]);
		break;
	}
}
window.onkeyup=function(e){
	var keyCode=e.keyCode,key=e.key;
	window.cancelAnimationFrame(demo[key]);
	demo[key]=null;
	g[keyCode]=0;
}
//按下方向键，div开始移动
function run(ele,key,attr,speed){
	if(ele[key])return
	(function fn(){
		ele[key]=window.requestAnimationFrame(fn,ele);
		ele.style[attr]=attr==='top'?ele.offsetTop+speed+'px':ele.offsetLeft+speed+'px';
	}())
}