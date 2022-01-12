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
	console.log(slideIndex)
});

nextBtn.addEventListener("click",() => {
		updateIndex(slideIndex +1 );
		console.log(slideIndex)
});

function slideShows(){

	for (var i = 0; i < carousel.length; i++){
		carousel[i].style.opacity = "0";				
	 }
	
 	slideIndex++;
 	updateIndex(slideIndex-1);
 	// carousel[updateIndex(slideIndex-1)].style.opacity = "1";
 	if(slideIndex > carousel.length){slideIndex = 1}

 	let carousel_interval = setInterval( () => {
 			if(pause === true){
 				slideShows();
 			// updateIndex(slideIndex + 1);
 			}
 	},3000);
 	return () => {
 		if(carousel_interval){
 			clearInterval(carousel_interval)
 		}
 	} 	
 }

let prevscroll = window.scrollY;
function scrollFunc(){
	let currentscroll = window.scrollY;
	let nav = document.getElementsByTagName("nav")[0];

	// if(scrolly >= 50){
	// 	nav.style.backgroundImage ="linear-gradient( #076a62, #076d79 , #076e82 )";
	// 	nav.style.padding = "20px 20px";
	// 	nav.style.transition = ".3s ease";
	// 	nav.style.color = "white";

	// }else if(scrolly <= 50){
	// 	nav.style.background = "none";
	// 		nav.style.padding = "10px 10px"
	// }
	if(prevscroll < currentscroll){
		nav.style.top = "-50px";

		nav.style.position ="relative";
	}else{
		nav.style.top = "0"
		nav.style.position ="fixed";
	}

	// console.log({prevscroll,currentscroll})
	prevscroll = currentscroll
	// console.log({prevscroll,currentscroll})
}
 window.addEventListener("scroll", scrollFunc);
window.addEventListener("load", () => {
	if("serviceWorker" in navigator){
		navigator.serviceWorker.register("/sw.js");
	}
})

// async function checkNetworkAndReload(){
// 	try{
// 		const res = await fetch(".");
// 		// console.log(res)
// 		if(res.status > 200 && res.status <500){
// 			window.location.reload();
// 			return
// 		}
// 	}catch(err){
// 		console.log(err)
// 	}
// 	window.setTimeout(checkNetworkAndReload());
// }

// checkNetworkAndReload();

const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

/* Put code here */



/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	deferredPrompt = e;
	showInstalledPromotion();
	console.log("event was fire")

})
