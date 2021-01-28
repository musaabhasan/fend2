/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfmenuItems = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function createmenuItem() {
  for (section of sections) {
    sTitle = section.getAttribute('data-nav');
    sLink = section.getAttribute('id');
    // create menu item for each section
    menuItem = document.createElement('li');
    //Add the menu item text and link
    menuItem.innerHTML = `<a class='menu__link' href='#${sLink}'>${sTitle}</a>`;
    //append it to the navigation menu
    menu.appendChild(menuItem);
  }
}

// check if there is focus on the section

function sectionInViewPort(element) {
  let sectionPos = element.getBoundingClientRect();
  return (sectionPos.top >= 0);
}

//change the section appearance
function toggleActiveClass() {
  for (section of sections) {
    //if section is in focus
    if (!section.classList.contains('your-active-class')) {
      //add the class name
      section.classList.add('your-active-class');
    } else { 
        //if not, remove the class name
      section.classList.remove('your-active-class');
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
createmenuItem();

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll', toggleActiveClass);




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
