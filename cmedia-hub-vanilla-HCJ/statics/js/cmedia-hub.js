const navToggler = document.getElementById('nav-toggler');
const navSideBar = document.getElementById('nav-sidebar');


const moreNavRight = document.getElementById('more-nav-right');
const moreNavRightHidden = document.getElementById('more-nav-right-hidden');

const filterTrigger = document.querySelector(".filter-container-trigger");
const filterContainer = document.getElementById("filter-container");
const filterCancel = document.querySelector(".filter-cancel");



    
navToggler.addEventListener('click', () => {
  if (navSideBar.style.display == "none" ) {
  navSideBar.style.display = "flex";
  }
  else{
  navSideBar.style.display = "none";
  }
});
  
/* JavaScript to toggle the filter container */
filterTrigger.addEventListener('click', () => {
  if (filterContainer.style.display == "none" ) {
    filterContainer.style.display = "block";
  }
  else{
  filterContainer.style.display = "none";
  }
});
filterCancel.addEventListener("click", function() {
  filterContainer.style.display = "none";
});

moreNavRight.addEventListener('click', () => {
    if (noreNavRightHidden.style.display == "none" ) {
        moreNavRightHidden.style.display = "flex";
    }
    else{
        moreNavRightHidden.style.display = "none";
    }
});
