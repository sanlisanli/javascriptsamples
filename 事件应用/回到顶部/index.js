//1.bot到达文档顶部时变为固定定位
//2.回到顶部按钮弹出
//3.滚动条滚动到一定区间时 相应的选项选中
//4.点击按钮滚动到相应区域

var bot=document.getElementsByClassName('bot')[0];//findViewById
var botChilds=bot.children,len=botChilds.length;
var toTop=botChilds[4];
var range=[480,600,1000,1400,0];
var prevActive=0;

var botTop=bot.offsetTop;
window.onscroll=function(e){//window.onscroll滚动事件
	var scrollY=window.pageYOffset;
	if(scrollY>=botTop){
		bot.style.position='fixed';
		bot.style.top=0;
		toTop.classList.add('show');
	}else{
		bot.style.position='absolute';
		bot.style.top=botTop+'px';
		toTop.classList.remove('show');
	}
	switch(true){
		case scrollY>=range[3]:
		 changeActive(botChilds[3]);
		 break;
		case scrollY>=range[2]:
		 changeActive(botChilds[2]);
		 break;
		case scrollY>=range[1]:
		 changeActive(botChilds[1]);
		 break;
		case scrollY>=range[0]:
		 changeActive(botChilds[0]);
		 break;
	}
}
//按钮添加点击事件
for(let i=0;i<len-1;i++){
	botChilds[i].onclick=function(){
		changeActive(this);
		window.scroll(0,range[i]);
	}
}
function changeActive(theNew){
	if(prevActive){
		prevActive.classList.remove('active');
	}
	prevActive=theNew;
	theNew.classList.add('active');
}

