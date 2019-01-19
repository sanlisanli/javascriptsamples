var nav=document.querySelector('.nav');
var aNavs=nav.querySelectorAll('a');
var aLi=document.querySelectorAll('.pic_wrap li');
var len=aLi.length;
var clsArr=new Array(len-3);
clsArr=[...['list1','list2','list3'],...clsArr];
//初始化
var index=0;
intColor();
tab();
for (var i=0;i<aNavs.length;i++){
    aNavs[i].num=i;
}
//切换导航栏颜色
function intColor() {
    for (var item of aNavs){
        item.setAttribute('class','');
    }
    aNavs[index].setAttribute('class','active');
}
//切换class
function tab() {
    for (var i=0;i<len;i++){
        aLi[i].setAttribute('class',clsArr[i]);
    }
}
//上一张
function prePic() {
    clsArr.push(clsArr.shift());
    index=index<=0?len-1:--index;
    intColor();
    tab();
}
//下一张
function nextPic() {
    clsArr.unshift(clsArr.pop());
    index=index<len-1?++index:0;
    intColor();
    tab();
}
// 事件监听 当点击list3 时 下一张   点击list1 时上一张
var picWrap=document.querySelector('.pic_wrap');
picWrap.addEventListener('click',function(e){
    var e = e || window.event;
    var target  =  e.target.parentNode.parentNode;
    if(target.classList[0] === 'list3'){
        nextPic();
    }else if(target.classList[0] === 'list1'){
        prePic();
    }
},false)
//hover导航条切换
nav.addEventListener('mouseover',function (e) {
    var e=e||window.event;
    var target=e.target||e.srcElement;//e.target||e.srcElement
    if (target.nodeName==='A'){
        var navsIndex=target.num;
        var dis=navsIndex-index;
        if (dis>0){
            for (var i=0;i<dis;i++){
                nextPic();
            }
        } else {
            for (var i=0;i<Math.abs(dis);i++){
                prePic();
            }
        }
    }
},false)

//自动播放
var timer=null;
var wrap=document.querySelector('.wrap');
timer=setInterval(nextPic,2200);
wrap.onmouseover=function () {
    clearInterval(timer);
}
wrap.onmouseout=function () {
    timer=setInterval(nextPic,2200);
}