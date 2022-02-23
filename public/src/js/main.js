let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let pause = false;
let slideIndex = 0;
let carouselMain = document.getElementById("carousel");
let carousel = document.getElementsByClassName("carousel-img");
let products = document.getElementsByClassName("products");
let gallery = document.getElementsByClassName("product-gallery");
// slideShows();

function updateIndex(currentIndex){
	if(currentIndex < 0){
		currentIndex = carousel.length -1
	}else if(currentIndex>= carousel.length){
		currentIndex = 0
	}
	carousel[slideIndex].style.opacity = "1";
	return  slideIndex =currentIndex;
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

}
 // window.addEventListener("scroll", scrollFunc);
window.onscroll = function (){
	scrollFunc()
	scrollBtnFunc()
}
let scrollTopBtn = document.getElementById("scrollTop");
			if("serviceWorker" in navigator){
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("../serviceWorker.js");
			
		})
	}

function scrollBtnFunc () {
	let winScroll = window.scrollY;
		if(winScroll > 200){
			scrollTopBtn.style.opacity = "1";
		}else{
			scrollTopBtn.style.opacity = "0";
		}
}


scrollTopBtn.addEventListener("click",() => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})



// product view Into Scroll animate
function isElementIntoView(ele){
	let rect = ele.getBoundingClientRect();
	// console.log(rect)
	return rect.bottom >= 0 && rect.right >= 0 
		&& rect.bottom < (window.innerHeight || document.documentElement.clientHeight)
		&& rect.right < (window.innerWidth || document.documentElement.clientWidth) 
}
function cb () {

	if(products[0].children.length > 0){
		for(let product = 0; product < products[0].children.length; product++){
			let element = products[0].children[product];
			if(isElementIntoView(element)){
				if(product%2 == 0){
					element.classList.add("slide-right");
				}else{
					element.classList.add("slide-bottom");
				}
				// element.style.display = "block";
			}else{

				if(product%2 == 0){
					element.classList.remove("slide-right");
				}else{
					element.classList.remove("slide-bottom");
				}
			}
		}
	}else {
		return
	}
	if(gallery){
		for(let product of gallery){
			if(isElementIntoView(product)){
				product.classList.add("pop-up");
			}else{
				product.classList.remove("pop-up");
			}
		}
	}
}
window.addEventListener("scroll", cb);