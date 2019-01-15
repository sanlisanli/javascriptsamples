var demo=document.querySelector('.demo');//对象
function Drag(ele){
	this.box=ele;
	this.box.style.position='absolute';
	this.fnMove=this.fnMove.bind(this);
	this.fnUp=this.fnUp.bind(this);
	this.fnDown=this.fnDown.bind(this);
	return this
}
Drag.prototype.init=function(){
	this.box.addEventListener('mousedown',this.fnDown,false);
	return this
}
Drag.prototype.fnDown=function(e){
	var box = this.box,e = e || window.event;
	this.disX=e.pageX-box.offsetLeft;
	this.disY=e.pageY-box.offsetTop;
	document.addEventListener('mousemove',this.fnMove,false);
	document.addEventListener('mouseup',this.fnUp,false);
}
Drag.prototype.fnMove=function(e){
	var e=e||window.event;
	this.box.style.left=e.pageX-this.disX+'px';
	this.box.style.top=e.pageY-this.disY+'px';
}
Drag.prototype.fnUp=function(){
	document.removeEventListener('mousemove',this.fnMove,false);
	document.removeEventListener('mouseup',this.fnUp,false);
}
var demo=new Drag(demo).init();
