const imgData=[
    {text:'园林酒店',src:'./img/2.jpg'},
    {text:'情侣酒店',src:'./img/3.jpg'},
    {text:'设计师酒店',src:'./img/4.jpg'},
    {text:'青年旅社',src:'./img/2.jpg'},
    {text:'特色客栈',src:'./img/3.jpg'},
    {text:'海岛酒店',src:'./img/4.jpg'},
    {text:'海岛温泉',src:'./img/3.jpg'},
]
const DEFAULTWIDTH = 172 // 图片容器默认宽度
const CONTENTWIDTH = DEFAULTWIDTH * imgData.length // 总宽度
const HOVERWIDTH = 400 // hover后图片容器宽度
const HOVEROTHERWIDTH = (CONTENTWIDTH - HOVERWIDTH) / (imgData.length - 1)// 没有被选中的其他图片容器宽度
let picContent = document.getElementsByClassName('pics')[0]
let picList = document.getElementsByClassName('pic-list')
let picStr = ``

imgData.forEach((item)=>{
    picStr+=`
    <li class="pic-list">
    <a href="javascript:;">
    <div class="mask">
    <h4>${item.text}</h4>
    </div>
    <div class="bg-box" style="background-image: url(${item.src})"></div>
    </a>
    </li>
    `
})
picContent.style.width=CONTENTWIDTH+'px';
picContent.innerHTML=picStr;
//Array.from(list).forEach
Array.from(picList).forEach((item,i)=>{
    //onmouseenter
    item.onmouseenter=function () {
        this.style.width=HOVERWIDTH+'px';
        for (let j=0;j<picList.length;j++){
            if (j!==i){
                picList[j].style.width=HOVEROTHERWIDTH+'px';
            }
        }
    }
    //onmouseleave
    item.onmouseleave=function () {
        for (let j=0;j<picList.length;j++){
            picList[j].style.width=DEFAULTWIDTH+'px';
        }
    }
})