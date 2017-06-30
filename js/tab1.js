function TabE(){
	this.oFirst=document.getElementById("pic").getElementsByTagName("img");
	this.oLilist=document.getElementById("list").getElementsByTagName("li");
}
TabE.prototype.Tabpic=function(){
	var This=this;
	for(var i=0;i<this.oLilist.length;i++){
		this.oLilist[i].index=i;
		this.oLilist[i].onclick=function(){
			This.Tab(this);
		};
	}
}

TabE.prototype.Tab=function(obj){
	for(var j=0;j<this.oLilist.length;j++){
		this.oLilist[j].className="";
		this.oFirst[j].className="";
	}
	//console.log(this)
	obj.className="lifirst";
	this.oFirst[obj.index].className="first";
}
var allTab=new TabE();
allTab.Tabpic();




