
function showOnScroll(){	
	[].forEach.call(document.querySelectorAll(".profile-container"), pc => {
		if(pc.getBoundingClientRect().top <= window.innerHeight - pc.offsetHeight){
			pc.style.animation = "fadeInUp .4s ease-out";
			pc.style.opacity = '1';
		}
	});

	[].forEach.call(document.querySelectorAll("h1,h2,h3,h4,h5,h6,p"), h => {
		if(h.getBoundingClientRect().top <= window.innerHeight - h.offsetHeight){
			h.style.animation = "fadeInUp .5s ease-out";
			h.style.opacity = '1';
		}
	});
}

function shaddowContainer(container,element1,element2){

	var limiar = Math.abs(element2.scrollHeight*0.2);

	if(limiar > element1.scrollTop){

		if(window.innerWidth >= 641 && window.innerWidth <= 1200){
			container.style.boxShadow = "-5px 0 10px rgba(0, 0, 0, .5), 0 -5px 50px -10px rgba(0, 0, 0, .5) inset";
		}
		else{
			container.style.boxShadow = "0 -5px 50px -10px rgba(0, 0, 0, .5) inset";
		}
	}
	else{
		if(window.innerWidth >= 641 && window.innerWidth <= 1200){
			container.style.boxShadow = "-5px 0 10px rgba(0, 0, 0, .5)";
		}
		else{
			container.style.boxShadow = "none";
		}
	}
}