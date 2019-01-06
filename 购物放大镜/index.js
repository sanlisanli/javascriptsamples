var data=[
{
	id:1,
    bigSrc:"image/1-big.jpg",
    smallSrc:"image/1-small.jpg"
},
{
	id:2,
	bigSrc:"image/2-big.jpg",
	smallSrc:"image/2-small.jpg"
},
{
	id:3,
	bigSrc:"image/3-big.jpg",
	smallSrc:"image/3-small.jpg"
}
]

var showBox = document.querySelector('.show');
var largeimg = document.querySelector('.largeimg');

//生成导航栏
var navScroll = document.querySelector('.navScroll');
var navChild = navScroll.children;
navScroll.innerHTML = creatNav();
function creatNav(){
	var str = '';
	data.forEach(function(item,i){
		str +=  `<span style="background:url(${item.smallSrc})"data-index=${i}></span>`;
	})
	navScroll.style.width = data.length*(60+4)+'px';
	return str;
}

//给导航栏添加hover事件
var preIndex=0;
for(var i=0;i<navChild.length;i++){
	navChild[i].onmouseenter=function(){
		var index=this.dataset.index*1;
		navChild[preIndex].classList.remove('active');//移除红色边框
		this.classList.add('active');
		showBox.style.backgroundImage = `url(${data[index].bigSrc})`;//显示图片在容器
		largeimg.style.backgroundImage = `url(${data[index].bigSrc})`;
		preIndex=this.dataset.index;
	}
}

//放大镜
var  bgSize = 1000;
var  scale = 0.6;
var  eye = document.querySelector('.eyes');
largeimg.style.width = largeimg.style.height = bgSize*scale + 'px';

showBox.onmousemove=function(e){
	var x = e.pageX,y= e.pageY,max = showBox.offsetWidth - eye.offsetWidth,w =eye.offsetWidth/2;
	var L = x - getRect(this, 'left') - w;
    var T = y - getRect(this, 'top') - w;
	if(L<0)L = 0;
    if(T<0)T = 0;
    if(L>max)L = max;
    if(T>max)T = max;
     eye.style.cursor = 'move'
	eye.style.left = L + 'px';
	eye.style.top = T + 'px';
	var scaleX = L/max;
	var scaleY = T/max;
	largeimg.style.backgroundPosition = `-${bgSize*0.3*scaleX}px -${bgSize*0.3*scaleY}px`
}
function getRect(ele, type){
    return ele.getBoundingClientRect()[type];
}






