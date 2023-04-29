class MobileNavbar{
    constructor(mobileMenu, navList, navLink){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelector(navLink);
        this.activeClass = 'active'
        this.handleClick = this.handleClick.bind()
    }

    handleClick(){
        this.ul.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => this.handleClick());
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    "nav",
    "ul",
    "ul li",
);

mobileNavbar.init()


