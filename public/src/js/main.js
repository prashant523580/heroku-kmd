let prevBtnCarousel = document.getElementById("prev");
let nextBtnCarousel = document.getElementById("next");
let pause = false;
let slideIndex = 0;
let carouselMain = document.getElementById("carousel");
let carousel = document.getElementsByClassName("carousel-img");

// slideShows();

//products list page

//===================================

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






// product list page///////////////////////////////////////==========================
function fetchProduct (){
	// let res = await fetch('http://localhost:3000/getProducts',{
	// 	methods:"get",
	// 	headers:{
	// 		"Content-Type": "application/json"
	// 	}
	// })
	// .then((res) => 	 res.json())
	// .then((data) => {
	// 	return	productLists = data;
	// });
	// // console.log(res)
	// if(res.products.length > 0){

	// 	return res
	// }
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){

		if(this.readyState === 4 && this.status === 200){
			// console.log(this.responseText)
			localStorage.setItem("products", this.responseText);
		}
	}
	xhr.open('GET',"https://kamla-medicine.herokuapp.com/getProducts", true);
	xhr.send();
}
	fetchProduct();