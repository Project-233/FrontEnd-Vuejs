"use strict";

//window.onload = function(e) {
$(function(){
	//document.body.addEventListener('mousemove', app.colorOnMove);
	//var id=$(this).attr('data-open') || $(this).data('open');
	//$('.answer[data-id]'+id+']' )...
	var mainMenuItems = document.querySelectorAll('.main-menu .item');
	
	for(var i=0; i<mainMenuItems.length; i++){
		mainMenuItems[i].addEventListener('click', app.switchMainMenuItem);
	}
});


var app ={}

app.switchMainMenuItem = function(e){
	console.log(this.getAttribute('name'));
	var target = document.body.firstChild;
	target.parentNode.insertBefore(document.createTextNode(this.innerHTML), target);
	this.classList.toggle('selected-menu-item');
}

app.colorOnMove = function(e){
        console.log(e);
        var color = ["green", "grey", "cyan", "blue"];
	var domElem = (typeof e !== "undefined") ? e.target : document.querySelector("BODY"); //document.getElementsByTagName("BODY")[0];
	
	domElem.style.background = color[Math.floor(Math.random()*color.length)];
        };

app.colorOnMove();
