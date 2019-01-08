function Ball(opt){
	this.x=100;
	this.y=100;
	this.r=50;
	this.color='orange';
	Object.assign(this,opt);
	return this
}
Ball.prototype.draw=function(){
	this.ball.style.position='absolute';
	this.ball.style.top=this.y+'px';
	this.ball.style.left=this.x+'px';
	this.ball.style.height=this.ball.style.width=this.r*2+'px';
	this.ball.style.borderRadius='50%';
	this.ball.style.backgroundColor=this.color;
	return this
}
Ball.prototype.init=function(){
	this.ball=document.createElement('div');
	this.draw();
	document.body.append(this.ball);
	return this
}
var ball = new Ball().init();
var balll=new Ball({x:200,y:200,r:100,color:'pink'}).init();
