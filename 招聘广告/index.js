//初始化部分
var hash,type,page;
window.location.hash='#sh&&1';
createLeft();
createRight();
createNav();
window.onhashchange=function () {
    createLeft();
    createRight();
    createNav();
}
function createLeft() {
    hash=window.location.hash.substr(1);
    type=hash.split('&&')[0];
    var leftList=document.querySelector('#leftList');
    var dataLeft=data.list,str=``;
    var leftChildren=leftList.children;
    //dataLeft.forEach
    dataLeft.forEach(function (item,i) {
        str += `<li class="${type === item.lx ? "active" : ''}" data-type="${item.lx}"><span>${item.text}</span>${item.eng}</li>`
    });
    leftList.innerHTML=str;
    Array.from(leftChildren).forEach(function (item,i) {
        item.onclick=function () {
            //样式的添加
            for (var i=0;i<leftChildren.length;i++){
                leftChildren[i].classList.remove('active');
            }
            this.classList.add('active');
            window.location.hash=this.dataset.type+'&&1';
        }
    })
}
function createRight() {
    //type为招聘类型   page为当前显示的页数
    hash = window.location.hash.substr(1);
    type =  hash.split('&&')[0];
    page = hash.split('&&')[1]*1;
    var rightList = document.querySelector('#rightList');
    var dataRight = data[type].text, len = dataRight.length, i, str = ``;
    for(i=(page-1)*4; i<page*4; i++){
        console.log('哔哩哔哩动画');
        if(!dataRight[i]) break;   //如果数据没有那一项 证明已经循环完毕
        str += `<li >
										<span class="num">0${(i+1)}</span>
										<div class="list">
											<a href="javascript:;"><span class="job">职位需求：${dataRight[i].zw}</span><span>需求人数：${dataRight[i].rs}名</span><time>${data.formatDate(dataRight[i].sj)}</time></a>
											<p><span class="text">岗位要求：${dataRight[i].info[0].l.join('')}</span><a href="content.html#${type}&&${i+1}" class="check">查看详情>></a></p>
										</div>
									</li>`
    }
    rightList.innerHTML = str;
}
function createNav() {
//type为招聘类型   page为当前显示的页数
    hash = window.location.hash.substr(1);
    type =  hash.split('&&')[0];
    page = hash.split('&&')[1]*1;

    var nav = document.querySelector('#nav');
    var dataRight = data[type].text, len = dataRight.length, i, num = Math.ceil(len / 4);//每页4个  一共多少页
    var str = `<a href="javascript:;">&lt;</a>`;
    for(i=0; i<num; i++){
        str += `<a href="#${type}&&${i+1}" class="${page === (i+1) ? "active" : ''}">${i+1}</a>`
    }
    str += `<a href="javascript:;">&gt;</a>`;
    nav.innerHTML=str;
    nav.firstElementChild.onclick=function () {
        page=page>1?--page:1;
        window.location.hash=type+'&&'+page;
    }
    nav.lastElementChild.onclick=function () {
        page=page<num?++page:num;
        window.location.hash=type+'&&'+page;
    }
}