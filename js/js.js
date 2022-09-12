window.addEventListener("scroll", function(){
		var footerArriba = document.querySelector("footer");
		footerArriba.classList.toggle("arriba",window.scrollY>1300);
})
