var arrImg = ['img/1.png','img/2.png'];
var len = arrImg.length;
var indexNum = 0; //控制图片索引

//获取导航
var nav = document.getElementsByClassName('nav')[0];
var strNav = '';
var navLi = nav.getElementsByTagName('li');//动态获取

//获取幻灯片
var pic = document.getElementsByClassName('pic')[0];
//获取上下张按钮
var next = document.getElementsByClassName('next')[0];
var prev = document.getElementsByClassName('prev')[0];

for(var i=0;i<len;i++){
	strNav += `<li ${i==0? "class='active'":"class=''"}><span><img src="${arrImg[i]}" alt=""><em></em></span></li>`
}
nav.innerHTML=strNav;
//幻灯片
pic.setAttribute('src',arrImg[indexNum]);

function tab(){
	//图片切换
	pic.setAttribute('src',arrImg[indexNum]);
	for(var i=0;i<len;i++){
		navLi[i].classList.remove('active');
	}
	navLi[indexNum].classList.add('active');
}

prev.onclick=function(){
	indexNum--;
	indexNum=indexNum<0?len-1:indexNum;
	tab();
}
next.onclick=function(){
	indexNum++;
	indexNum=indexNum>len-1?0:indexNum;
	tab();
}

//导航栏相关
for(let i=0;i<len;i++){
	navLi[i].index=i;
	//点击切换
	navLi[i].index=i;
	navLi[i].onclick=function(){
		indexNum=this.index;
		tab();
	}
	//缩略图
	navLi[i].onmouseenter=function(){
		this.firstElementChild.style.display='block';
	}
	navLi[i].onmouseleave=function(){
		this.firstElementChild.style.display='none';
	}
}


  
  
  