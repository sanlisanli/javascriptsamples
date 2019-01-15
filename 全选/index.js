var count=0;
var aList=document.querySelectorAll('.inner ul li');
var allSelect=document.querySelector('.control input');
var len=aList.length;
for(var i=0;i<len;i++){
	aList[i].onChecked=false;
	aList[i].onclick=function(){
		this.onChecked=!this.onChecked;
		count=this.onChecked?++count:--count;
		if(this.onChecked){
			this.firstElementChild.checked=true;
			this.className='active';
		}else{
			this.firstElementChild.checked=false;
			this.className='';
		}
		if(count==len){
			allSelect.checked=true;
		}else{
			allSelect.checked=false;
		}
	}
}
allSelect.onclick=function(){
	count=this.checked?len:0;
	for(var i=0;i<len;i++){
		if(this.checked){
			aList[i].className='active';
			aList[i].onChecked=false;
			aList[i].firstElementChild.checked=true;
		}else{
			aList[i].className='';
			aList[i].onChecked=false;
			aList[i].firstElementChild.checked=false;
		}
	}
}