class MobileNavbar{
    constructor(mobileMenu, navList, navLink){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelector(navLink);
        this.activeClass = 'active'

    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log('Hey :>'));
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}


