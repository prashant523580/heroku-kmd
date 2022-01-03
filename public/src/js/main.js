//let carousel = document.getElementsByClassName("carousel")[0];
//console.log(carousel);//
let slideIndex = 0;
slideShows();
function slideShows(){

let carousel = document.getElementsByClassName("carousel-img");
for (var i = 0; i < carousel.length; i++){
			carousel[i].style.opacity = "0";
			
 }
 slideIndex++;
 	if(slideIndex > carousel.length){slideIndex = 1}
 	carousel[slideIndex-1].style.opacity = "1";

 	carousel[slideIndex-1].style.transition = ".3s ease";
 
 	setTimeout(slideShows,6000);
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

	console.log({prevscroll,currentscroll})
	prevscroll = currentscroll
	// console.log({prevscroll,currentscroll})
}
 window.addEventListener("scroll", scrollFunc);