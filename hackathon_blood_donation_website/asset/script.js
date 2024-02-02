const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link"); //scrool up top selection
const scrollUp = document.querySelector("#scroll-up");

hamburger.addEventListener("click", openMenu);

const checkbox = document.querySelector("#checkbox");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


checkbox.addEventListener("change", () => {

 document.body.classList.toggle("dark");
});



/* // applying js to donor nav-item


const item1=document.getElementById('.tab-item');
const item1contents=document.querySelectorAll('.donorContent');

// select tab item
function selectItem(e){
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  //Grab content from DOM
  const tabContentItem = document.querySelector(`#${this.id}`)
  tabContentItem.classList.add('show')
}



function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));

}
item1.forEach(item => item.addEventListener('click',selectItem))


function removeShow(){
  item1contents.forEach(item => item.classList.remove('show'));

}

function select(e){
  removeBorder();
    this.classList.add('tab-border')
}


function show(){
   item1.style.display=none;  
   item1.style.cssText = 'color: red; background-color: yellow;';


} */





// to make the images dynamic


/* fetch('images.json')
  .then(response => response.json())
  .then(images => {
    const container = document.querySelector('.container');
    images.forEach(image => {
      const div = document.createElement('div');
      div.className = 'thumbnail';
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      div.appendChild(img);
      container.appendChild(div);
    });
  });
 */


// to print each copy the below code in different html file 


const tabItems = document.querySelectorAll('.nav-item a');
const tabContentItems = document.querySelectorAll('.nav-item a');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});



  