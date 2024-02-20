// js modal
const buyBtns = document.querySelectorAll('.js-buy-btn');
const closeTicket = document.querySelector('.js-close-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container')

function showTicket(){
     modal.classList.add('open')
};
function hidenTicket(){
    modal.classList.remove('open')
};

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showTicket)
};
closeTicket.addEventListener('click',hidenTicket);
modal.addEventListener('click', hidenTicket);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
});

// js reponsive

const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu-btn");
const headerHight = header.clientHeight;
mobileMenu.onclick = function(){
    const isClose = header.clientHeight === headerHight;
    if(isClose){
        header.style.height = 'auto';
    } else {
        header.style.height = null ;
    }
}

const menuItems = document.querySelectorAll('.nav li a[href*="#"]');
for(var i = 0; i< menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(event){
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu){
            event.preventDefault();
        }   else {
            header.style.height = null ;
            }
    } 
}
