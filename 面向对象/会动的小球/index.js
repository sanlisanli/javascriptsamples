function Ball(opt){
	this.x=100;
	this.y=100;
	this.r=50;
	this.color='pink';
	Object.assign(this,opt);
}
Ball.prototype.init=function(){
	this.ball=document.createElement('div');
	this.draw();
	document.body.append(this.ball);
	return this
}
Ball.prototype.draw=function(){
	this.ball.style.width=this.ball.style.height=this.r*2+'px';
	this.ball.style.backgroundColor=this.color;
	this.ball.style.position = 'absolute';
    this.ball.style.left = this.x + 'px';
    this.ball.style.top = this.y + 'px';
    this.ball.style.borderRadius = '50%';
	return this
}
function MoveBall(opt){
	Ball.call(this,opt);
	this.g=0.2;
	this.speed=2;
	return this
}
MoveBall.prototype=Object.create(Ball.prototype);
MoveBall.prototype.constructor=MoveBall;
MoveBall.prototype.move=function(){
	var _this=this;
	var ball=_this.ball;
	var now=Date.now();
	(function fn(){
		ball.anim=window.requestAnimationFrame(fn);
		ball.style.top=ball.offsetTop+_this.speed+'px';
		_this.speed+=_this.g;
		if(ball.offsetTop>=window.innerHeight-ball.offsetHeight-10){
			_this.speed*=-0.8;
		}
		if(Date.now()-now>=10000){
			window.cancelAnimationFrame(ball.anim);
			ball.style.top=window.innerHeight-ball.offsetWidth-10+'px';
		}
	}())
}
document.onclick=function(){
	var l=window.innerWidth*0.1+Math.random()*window.innerWidth*0.7;
	var c=`rgb(${~~(Math.random()*255)},${~~(Math.random()*255)},${~~(Math.random()*255)})`
	new MoveBall({x:l,y:20,r:32,color:c}).init().move();
}
