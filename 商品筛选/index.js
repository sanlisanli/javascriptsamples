var oUl=document.querySelector('#type');
var choiceWrap=document.querySelector('.choose');
var aLi=Array.prototype.slice.call(oUl.children);
var choiceType={brand:null,size:null,system:null,net:null}

oUl.onclick=function(e){//oUl.onclick
	var e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName==='A'){
		var type=target.parentNode.className;//key
		choiceType[type]=target.innerHTML;//value
		choiceWrap.innerHTML=createChoice();
		cleanGroup(type);
		target.className='active';
	}
}
choiceWrap.onclick=function(e){
	var e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName==='A'){
		var className=target.dataset.key;
		cleanGroup(className);
		choiceType[className]=null;
		target.parentNode.remove();
	}
}
function createChoice(){
	var str='';
	for(var key in choiceType){
		if(choiceType[key]){
			 str += `<mark>${choiceType[key]}<a data-key = "${key}" href="javascript:;">X</a></mark>`
		}
	}
	return str
}
//清楚一个分类的active
function cleanGroup(className){
	aLi.forEach(function(value,index){
		if(value.classList.contains(className)){
			var childs=value.children,len=childs.length;
			for(var i=0;i<len;i++){
				//清楚当前a的active
				childs[i].className='';
			}
		}
	})
}