'use strict';

//variable for navbar menu toggle

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

//variable for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

//navbar toggle function
function navIsActive() {
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

//navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

//Read more sinopsis
function readFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lebih banyak";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lebih Sedikit";
      moreText.style.display = "inline";
    }
  }

  //Read more about
function screenFunction() {
  var dot = document.getElementById("dot");
  var moresText = document.getElementById("mores");
  var btnText = document.getElementById("mBtn");

  if (dot.style.display === "none") {
    dot.style.display = "flex";
    btnText.innerHTML = "Lebih banyak";
    moresText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Lebih Sedikit";
    moresText.style.display = "flex";
  }
}

// Load more 
let loadMoreBtn = document.querySelector('.load-more');
let currentItem = 10;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.movie-card')];
    for (var i = currentItem; i < currentItem + 2; i++){
        boxes[i].style.display = 'grid';
    }
    currentItem += 2;

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}

//show and hidden password
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}