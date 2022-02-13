let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let pause = false;
let slideIndex = 0;
let carouselMain = document.getElementById("carousel");
let carousel = document.getElementsByClassName("carousel-img");

slideShows();

function updateIndex(currentIndex){
	if(currentIndex < 0){
		currentIndex = carousel.length -1
	}else if(currentIndex>= carousel.length){
		currentIndex = 0
	}
	carousel[slideIndex].style.opacity = "1";
	return  slideIndex =currentIndex;
}
// carouselMain.addEventListener("mouseenter",() => pause = true);
carouselMain.addEventListener("mouseleave",() => pause = false);
prevBtn.addEventListener("click",() =>{
	updateIndex(slideIndex - 1)
});

nextBtn.addEventListener("click",() => {
		updateIndex(slideIndex +1 );
});

function slideShows(){

	for (var i = 0; i < carousel.length; i++){
		carousel[i].style.opacity = "0";				
	 }
	
 	slideIndex++;
 		carousel[slideIndex].style.opacity = "1";
 		setTimeout(() => {
 			slideIndex++
 		},2000);
 }

let prevscroll = window.scrollY;
function scrollFunc(e){
	let currentscroll = window.scrollY;
	let nav = document.getElementsByTagName("nav")[0];
	if(prevscroll < currentscroll){
		nav.style.top = "-50px";
		nav.style.position ="relative";
	}else{
		nav.style.top = "0"
		nav.style.position ="fixed";
	}

	// console.log({prevscroll,currentscroll})
	prevscroll = currentscroll

	console.log(e)
}
 window.addEventListener("scroll", scrollFunc);
	if("serviceWorker" in navigator){
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("/serviceWorker.js");
			
		})
	}

