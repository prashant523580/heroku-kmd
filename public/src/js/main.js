let prevBtnCarousel = document.getElementById("prev");
let nextBtnCarousel = document.getElementById("next");
let pause = false;
let slideIndex = 0;
let carouselMain = document.getElementById("carousel");
let carousel = document.getElementsByClassName("carousel-img");
let products = document.getElementsByClassName("products");
let gallery = document.getElementsByClassName("product-gallery");
// slideShows();

//products list page

let prevBtn = document.getElementById("prevBtn");
	let nextBtn = document.getElementById("nextBtn");
	let listing = document.getElementById("product-list");
	let span_page= document.getElementById("page");
	let paginateNo = document.getElementById("paginate-no");
	let tbody = document.getElementById("tbody");
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



// product view Into Scroll animate
function isElementIntoView(ele){
	let rect = ele.getBoundingClientRect();
	// console.log(rect)
	return rect.bottom >= 0 && rect.right >= 0 
		&& rect.top < (window.innerHeight || document.documentElement.clientHeight)
		&& rect.left < (window.innerWidth || document.documentElement.clientWidth) 
}
function cb () {


	if(products){
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
	}
else {
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
window.addEventListener("load", cb);
////////////////////product list page/////////////////======================================
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
	let productLists = JSON.parse(localStorage.getItem("products"));
	let productsItems = productLists.products;
	let current_page = 1;
	let itemsPerPage = 9;
	function itemOnPage(){
		console.log(this)
	}
function nextPage(){
	if(current_page < noOfPages()){
	current_page++;
	changePage(current_page)
	
}
}
function prevPage(){
	if(current_page > 1){
		current_page--;
		changePage(current_page)
	}
}
function changePage(page){

	if(page < 1) page = 1;
	if(page> noOfPages()) page = noOfPages();
	
	span_page.innerHTML =` ${page} of ${noOfPages()}`;
	// console.log((page -1)* itemsPerPage, (page* itemsPerPage))
	listing.innerHTML = "";
	for(var i = (page-1) * itemsPerPage; i < (page * itemsPerPage); i++){
		//console.log(i);
		listing.innerHTML += `
					<div class="product">
				<div class="product-img">
					<img src="/images/products/blood_bank.jpg" alt="product-name">
				</div>
			<div class="product-body">
				 ${productsItems[i].name}
				<div> Brand : ${productsItems[i].brand}</div>
				<div> manufacturer : ${productsItems[i].manufacturer} </div>
				<div> model : ${productsItems[i].model} </div>
			</div>
			<div class="img-desc">
				${productsItems[i].name}
				<div> Brand : ${productsItems[i].brand}</div>
				<div> manufacturer : ${productsItems[i].manufacturer} </div>
				<div> model :${productsItems[i].model} </div>
		
				<p> Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease.....</p>
			</div> 
			</div>

		`;
	}
	if(page == 1){
		prevBtn.style.visibility = "hidden";
	}else{
		prevBtn.style.visibility = "visible";
	}
	if(page == noOfPages()){
		nextBtn.style.visibility = "hidden"; 
	}else{
		nextBtn.style.visibility = "visible";
	}
}
function noOfPages(){
	return Math.ceil(productsItems.length / itemsPerPage);
}
window.onload = function () {
	changePage(1)
}


console.log(paginateNo)
for(var i = 0; i < noOfPages(); i++){

	let noDiv = document.createElement("div");
	if(i == 0){
			noDiv.className = "pagi active";
	}else{


			noDiv.className = "pagi";
	}
	 noDiv.innerHTML = i+1;
	paginateNo.appendChild(noDiv);
}

for(var i =0; i < paginateNo.children.length; i++){
		paginateNo.children[i].addEventListener('click',() => {

				let currentActive = document.getElementsByClassName("active");
	 // paginateNo.children[current_page-1];
	currentActive[0].className = currentActive[0].className.replace(" active" ,"");
	// if(page !== current_page){
	// 	currentActive.classList.remove("active");
	// }
	this.className += ' active'
		})

}