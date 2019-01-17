var data=[
{img:'./image/2.jpg'
},
{img:'./image/6.jpg'
},
{img:'./image/7.jpg'
},
{img:'./image/2.jpg'
},
{img:'./image/6.jpg'
},
{img:'./image/7.jpg'
}
];
var contain=document.querySelector('.contain');
var slideContain=document.querySelector('.slide-contain');
var navContain=document.querySelector('.nav-contain');

var index=0,len=data.length;

slideContain.innerHTML=createSlide(data)['strSlides'];
navContain.innerHTML=createSlide(data)['strNavs'];

var slideItems=document.querySelectorAll('.slide-item');
var navItems=document.querySelectorAll('.nav-item');

//给导航按钮添加点击事件
for(var i=0;i<len;i++){
	(function(i){
		navItems[i].onclick=function(){
			index=i;
			Tab();
		}
	})(i);
}
//初始化
Tab();

var prev=document.querySelector('.prev');
var next=document.querySelector('.next');

prev.onclick=function(){
	index=index===0?data.length-1:--index;
	Tab();
}
next.onclick=function(){
	index=index===data.length-1?0:++index;
	Tab();
}
//自动轮播
var timer=null;
//初始自动轮播
timer=setInterval(next.onclick,2200);
//鼠标悬停
contain.onmouseover=function(){
	clearInterval(timer);
}
contain.onmouseout=function(){
	timer=setInterval(next.onclick,2200);
}

function Tab(){
	for(var i=0;i<len;i++){
		slideItems[i].classList.remove('active');
		navItems[i].classList.remove('active');
	}
	slideItems[index].classList.add('active');//classList
	navItems[index].classList.add('active');//classList
	//延迟执行 然大容器背景看起来是上一张
	setTimeout(function(){
		contain.style.backgroundImage=`url(${data[index].img})`;
	},1002);
}
//生成幻灯片和导航按钮
function createSlide(data){
	var strSlides='';
	var strNavs='';
	for(var i=0;i<data.length;i++){
		//slide-item left 两个class 间隔
		strSlides+=`<div class="slide-item ${i%2?'right':'left'}">
		<span class="pic" style="background-image:url(${data[i].img})"></span>
		<div class="caption"><h2></h2><h2></h2></div></div>`;
		
		strNavs+=`<span class="nav-item"><img src="${data[i].img}"/></span>`
	}
	return {strSlides,strNavs};
	
}













