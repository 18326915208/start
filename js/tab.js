function Tabe(){
   //this->allTab
	this.oFirst=document.getElementById("pic").getElementsByTagName("img");
	this.oLilist=document.getElementById("list").getElementsByTagName("li");
}
Tabe.prototype.tabPic=function(){
	//console.log(this)
	This=this;//this->allTab
	for(var i=0;i<this.oLilist.length;i++){
		this.oLilist[i].index=i;
		this.oLilist[i].onclick=function(){
			This.Tab(this);//this->this.oLilist[i]
		};
	}
}

Tabe.prototype.Tab=function(obj){
	//alert(this.tagName)
	//this->this.oLilist[i]
	//this->allTab
	for(var j=0;j<this.oLilist.length;j++){
		this.oLilist[j].className="";
		this.oFirst[j].className="";
	}
	obj.className="lifirst";
	this.oFirst[obj.index].className="first";
}

var allTab=new Tabe();
allTab.tabPic();



