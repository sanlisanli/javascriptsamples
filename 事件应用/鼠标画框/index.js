document.onmousedown=function(e){
	var startX=e.pageX,
	    startY=e.pageY;
	var squr=document.createElement('div');
	squr.style.position='absolute';
	squr.style.left='-9999px';
	squr.style.top='-9999px';
	squr.style.zIndex=9999;
	squr.style.border='1px dashed black';
	document.body.appendChild(squr);
	document.onmousemove=function(e){
		var curX=e.pageX,
		    curY=e.pageY;
			squr.style.width=Math.abs(curX-startX)+'px';
			squr.style.height=Math.abs(curY-startY)+'px';
			squr.style.top=Math.min(curY,startY)+'px';
			squr.style.left=Math.min(curX,startX)+'px';
	}
	document.onmouseup=function(e){
		document.onmousemove=null;
		document.onmouseup=null;
		squr.remove();
	}
	
}