var tickWrap = document.querySelector('.tick');
			var hour = document.querySelector('.hour');
			var min = document.querySelector('.minute');
			var sec = document.querySelector('.second');
			
			//生成
			var str = '';
			
			for(var i =0 ;i<60;i++){
				
				str += `<li style ="transform:rotate(${i*6}deg)"></li>`;
			}
			tickWrap.innerHTML = str;
			
			
			
			(function timeGo(){
				window.requestAnimationFrame(timeGo);
				var nowTime = new Date();
				
				var s = nowTime.getSeconds(), m = nowTime.getMinutes() + (s/60), h = nowTime.getHours() + m/60;
				
				hour.style.transform = `rotate(${h*30}deg)`;
				min.style.transform = `rotate(${m*6}deg)`;
				sec.style.transform = `rotate(${s*6}deg)`;
			})();