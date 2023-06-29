class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {

        this.mobileMenu=document.querySelector(mobileMenu);
        this.navList=document.querySelector(navList);
        this.navLinks=document.querySelectorAll(navLinks);
        this.activeClass="active";
        this.handleClick=this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index)=>{
            link.style.animation
            ?(link.style.animation="")
            :(link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const acessoA = document.querySelectorAll('#a');
const projetoA = document.querySelectorAll('.caixaProjetos>:nth-child(1)');

projetoA.forEach((element) => {
    element.addEventListener("mouseover", () => {
        acessoA.forEach((el) => {
            el.style.display = 'flex';
        });
    });
});
projetoA.forEach((element) => {
    element.addEventListener("mouseout", () => {
        acessoA.forEach((el) => {
            el.style.display = 'none';
        });
    });
});

const acessoB = document.querySelectorAll('#b');
const projetoB = document.querySelectorAll('.caixaProjetos>:nth-child(2)');

projetoB.forEach((element) => {
    element.addEventListener("mouseover", () => {
        acessoB.forEach((el) => {
            el.style.display = 'flex';
        });
    });
});
projetoB.forEach((element) => {
    element.addEventListener("mouseout", () => {
        acessoB.forEach((el) => {
            el.style.display = 'none';
        });
    });
});

const acessoc = document.querySelectorAll('#c');
const projetoc = document.querySelectorAll('.caixaProjetos>:nth-child(3)');

projetoc.forEach((element) => {
    element.addEventListener("mouseover", () => {
        acessoc.forEach((el) => {
            el.style.display = 'flex';
        });
    });
});
projetoc.forEach((element) => {
    element.addEventListener("mouseout", () => {
        acessoc.forEach((el) => {
            el.style.display = 'none';
        });
    });
});