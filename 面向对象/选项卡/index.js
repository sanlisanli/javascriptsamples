function Tab(item){
	var tab=document.getElementById(item);
	this.btns=tab.querySelectorAll('span');
	this.texts=tab.querySelectorAll('p');
	this.prev=0;
	this.len=this.btns.length;
	this.timer=null;
	this.current=0;
	return this;
}
Tab.prototype.toTap=function(){
	var _this=this;
	for(var i=0;i<this.len;i++){
		this.btns[i].index=i;
		this.btns[i].onclick=function(){
			_this.play(this.index);
		}
	}
}
Tab.prototype.play=function(index){
	this.btns[this.prev].classList.remove('active');
	this.texts[this.prev].classList.remove('active');
	this.btns[index].classList.add('active');
	this.texts[index].classList.add('active');
	this.prev=index;
}
Tab.prototype.autoPlay=function(){
	var _this=this;
	clearInterval(this.timer);
	this.timer=setInterval(function(){
		_this.current=_this.current<_this.len-1?++_this.current:0;
		_this.play(_this.current);
	},1000)
}
Tab.prototype.stopPlay=function(){
	clearInterval(this.timer);
}
var tab1=new Tab('tab1');
tab1.toTap();
tab1.autoPlay();
var tab2=new Tab('tab2');
tab2.toTap();
//tab2.autoPlay();
var tab3=new Tab('tab3');
tab3.toTap();
tab3.autoPlay();
var btns=document.querySelectorAll('input');
btns[0].onclick=function(){
	tab1.stopPlay();
}
btns[1].onclick=function(){
	tab2.autoPlay();
}
btns[2].onclick=function(){
	tab1.autoPlay();
	tab2.autoPlay();
	tab3.autoPlay();
}
btns[3].onclick=function(){
	tab1.stopPlay();
	tab2.stopPlay();
	tab3.stopPlay();
}
