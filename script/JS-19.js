window.onload = function(){
	var FUN = {
			getById:function(id){
				return document.getElementById(id);
		    },
			getByTag:function(Tnam){
				return document.getElementsByTagName(Tnam);
		    },
			crEle:function(Enam){
				return document.createElement(Enam);
			}

		}
		function rand(){
			var nwd = Math.floor(Math.random()*200+0)+1;//随机数(0,200];
			return nwd;
		}
		var Nlis = FUN.getByTag("LI");//Nodelist对象
		var lis = Array.prototype.slice.call(Nlis,0);
		var arr = new Array();
		lasts = [];//定义全局变量 而不是 var last;
		lis.forEach(function(item,index){
			arr.push(lis[index].lastChild);
			this.lasts = arr;
		},this);
		for(var i in lasts){
			var nwd = rand();
			lasts[i].style.width = nwd +'px';
		}
}