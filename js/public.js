//获取id名 类名 标签名 ..
function $(para,obj){
	obj=obj||document;
	var oPara=typeof para;
	oPara=oPara.toLowerCase();
	if(oPara=="function"){
		window.onload=para;
	}else if(oPara=="string"){
		if(para.charAt(0)=="#"){
			para=para.substr(1);
			return obj.getElementById(para);
		}else if(para.charAt(0)=="."){
			para=para.substring(1);
			if(document.getElementsByClassName){
				return obj.getElementsByClassName(para);
			}else{
				var classN=[];
				var all=obj.getElementsByTagName("*");
				for(var i=0;i<all.length;i++){
					var alls=all[i].className.split(" ");
					for(var j=0;j<alls.length;j++){
						classN.push(all[i]);
					}
				}
				return classN;
			}
		}
		return obj.getElementsByTagName(para);
		}
	}

function css(obj,mJson){
	for(var attr in mJson){
		oBox.style[attr]=mJson[attr];
	}
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}


//cookie封装
//设置cookie
function setCookie(key,value,day){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+day);
	document.cookie=key+"="+value+";expires="+oDate;
}

//获取cookie
function getCookie(key){
	var arr=document.cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split("=");
		if(arr2[0]==key){
			return arr2[1];
		}
	}
	return "";
}
//删除cookie
function deleteCookie(key){
	setCookie(key,"value",-1);
}

//运动封装 obj运动对象 target运动目标值  attr运动属性值
var time=null;
//匀速运动
function linear(obj,target,attr,fn){
	var speed;
	clearInterval(obj.time);
	obj.time=setInterval(function (){
		var current=parseInt(getStyle(obj,attr));
		speed=target>current ? 25 : -25 ;
		if( Math.abs(target-current)<=Math.abs(speed)){
			clearInterval(obj.time);
			obj.style[attr]=target+"px";
			fn&&fn();
		}else{
			obj.style[attr]=current+speed+"px";
		}
	},14)
}

//加速运动
function accelitor(obj,target,attr){
	var speed=5;
	var current=parseInt(getStyle(obj,attr));
	speed=current>target ? -speed : speed ;
	clearInterval(obj.time)
	obj.time=setInterval(function (){
		if(speed>0){
			speed++;
		}else{
			speed--;
		}
		if( Math.abs(current-target)<Math.abs(speed)){
			clearInterval(obj.time);
			obj.style[attr]=target+"px";
		}else{
			obj.style[attr]=current+speed+"px";
			current=current+speed;
		}
	},14)
}

//缓冲运动
function buffer(obj,attr,target,fn){
	var speed;
	target=parseInt(target);
	clearInterval(obj.time);
	obj.time=setInterval(function(){
		if(attr=="opacity"){
			var current=parseInt(getStyle(obj,attr)*100);
			if(isNaN(current)){
				current=100;
			}
		}else{
			var current=parseInt(getStyle(obj,attr));
		}
		if(current>target){
			speed=Math.floor((target-current)/10);
		}else{
			speed=Math.ceil((target-current)/10);
		}
		if(current==target){
			clearInterval(obj.time);
			fn&&fn.call(obj);
		}else{
			if(attr=="opacity"){
				obj.style[attr]=(current+speed)/100;
				obj.style.filter="alpha(opacity="+(current+speed)+")";
			}else{
				obj.style[attr]=current+speed+"px";
			}
		}
	},14)
}
//获取元素属性
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}

//
function move(obj,Mjson,fn){
var speed=0;
var current=0;
var target;
clearInterval(obj.time);
obj.time=setInterval(function(){
	var onOff=true;
	for(var attr in Mjson){
		target=parseInt(Mjson[attr]);
		//console.log(target);
		if(attr=="opacity"){
			current=parseInt(getStyle(obj,attr)*100);
		}else{
			current=parseInt(getStyle(obj,attr));
		}
		if(current>target){
			speed=Math.floor((target-current)/2);
		}else{
			speed=Math.ceil((target-current)/2);
		}
		if(!onOff){
			clearInterval(obj.time);
		}
		if(attr=="opacity"){
			obj.style[attr]=(current+speed)/100;
			obj.style.opacity="alpha(opacity="+(current+speed)+")";
		}else{
			obj.style[attr]=current+speed+"px";
		}
	}
	},14)
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}








