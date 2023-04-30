class MobileNavbar{
    constructor(mobileMenu, navList, navLink){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelector(navLink);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick(){
        let text = document.querySelector('.text-box')
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass)
        text.style.position = 'relative'
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
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


