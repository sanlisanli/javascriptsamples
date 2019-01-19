//布局转换
var box=document.querySelector('.box');
var boxItem=box.querySelectorAll('div');
var len=boxItem.length;
var zIndex=0;

var arrPos=[];//存放每一个div的位置信息

for (var i=0;i<boxItem.length;i++){
    arrPos.push([boxItem[i].offsetLeft,boxItem[i].offsetTop]);
    boxItem[i].style.background=`rgb(${55+ ~~(201*Math.random())},${55+ ~~(200*Math.random())},${55+ ~~(200*Math.random())})`;
}
for (var i=0;i<boxItem.length;i++){
    //boxItem.style
    boxItem[i].style.position='absolute';
    boxItem[i].style.margin=0;
    boxItem[i].style.left = arrPos[i][0] +'px';
    boxItem[i].style.top = arrPos[i][1] + 'px';
    boxItem[i].index=i;
    pull(box,boxItem[i]);//给每个div添加拖拽 并且 拖拽时检测碰撞
}
var copyArrPos=arrPos.slice();//复制数组，用于随机打乱
var btns=mv.$('.btns button');//buttons
//随机打乱
btns[0].onclick=function (e) {
    copyArrPos.sort(function (a,b) {
        return Math.random()-0.5;
    });
    for (var i=0;i<boxItem.length;i++){
        mv.animation(boxItem[i],{left:copyArrPos[i][0],top:copyArrPos[i][1]})
    }
};
//顺序排列
btns[1].onOff=true;
btns[1].onclick=function (e) {
    if (this.onOff){
        this.innerHTML='从小到大';
    } else{
        this.innerHTML='从大到小'
    }
    arrPos.reverse();
    for (var i=0;i<boxItem.length;i++){
        mv.animation(boxItem[i],{left:arrPos[i][0],top:arrPos[i][1]})
    }
    this.onOff=!this.onOff;
}

//拖拽交换位置
function pull(parent,son) {
    var disX,disY,_this,originInfo;
    son.addEventListener('mousedown',function (e) {
        e.preventDefault();
        //获取点击时光标到div元素边的距离
        disX=e.pageX-getRect(this,'left');
        disY=e.pageY-getRect(this,'top');
        _this=this;
        originInfo=[_this.offsetLeft,_this.offsetTop];
        son.style.zIndex=++zIndex;
        document.addEventListener('mousemove',boxMove);
        document.addEventListener('mouseup',boxUp);
    })
    function boxMove(e) {
        var x=e.pageX,y=e.pageY;
        //因为son 相对于parent 定位   所以实际L T  需要减掉父级的offsetTop offsetLeft
        var L=x-disX-getRect(parent,'left');
        var T=y-disY-getRect(parent,'top');
        //不能超出父级
        if (L<=0)L=0;
        if (T<=0)T=0;
        if (L>=parent.clientWidth-getRect(_this,'width'))L=parent.clientWidth-getRect(_this,'width');
        if (T>=parent.clientHeight-getRect(_this,'height'))T=parent.clientHeight-getRect(_this,'height');
        addStyle(getTarget(_this));
        _this.style.left=L+'px';
        _this.style.top=T+'px';
    }
    function boxUp(e) {
        document.removeEventListener('mousemove',boxMove);
        document.removeEventListener('mouseup',boxUp);
        changeposition(_this,getTarget(_this),originInfo)
    }
    function getRect(ele,type) {
        return ele.getBoundingClientRect()[type];
    }
}
//碰撞检测
function crashTest(current,target) {
    var  currentRect = current.getBoundingClientRect();
    var  targetRect =  target.getBoundingClientRect();
    var curT = currentRect['top'],
        curR = currentRect['right'],
        curB = currentRect['bottom'],
        curL = currentRect['left'];

    var tarT = targetRect['top'],
        tarR = targetRect['right'],
        tarB = targetRect['bottom'],
        tarL = targetRect['left'];
    //true表示碰撞上了 false表示没撞上
    return curR >= tarL && curL <= tarR && curB >= tarT && curT <= tarB;
}
function getTarget(ele) {
    var min=Infinity,node=null;
    for (var i=0;i<len;i++){
        if (boxItem[i]!==ele&&crashTest(ele,boxItem[i])){
            if (min>distance(ele,boxItem[i])){
                min=distance(ele,boxItem[i]);
                node=boxItem[i];
            }
        }
    }
    return node;
}
function distance(ele1,ele2) {
    var x=ele1.offsetLeft-ele2.offsetLeft;
    var y=ele1.offsetTop-ele2.offsetTop;
    return Math.sqrt(x*x,y*y);
}
function addStyle(obj) {
    for (var i=0;i<len;i++){
        boxItem[i].style.border='';
    }
    if (obj){
        obj.style.border='2px solid #000';
    }
}
function changeposition(current,target,originInfo) {
    if (target){
        var arrTar=[target.offsetLeft,target.offsetTop];
        mv.animation(current,{left:arrTar[0],top:arrTar[1]},200)
        mv.animation(target,{left:originInfo[0],top:originInfo[1]},200)
        target.style.border='';
    }else {
        mv.animation(current,{left:originInfo[0],top:originInfo[1]},200)
    }
}

