let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);

let bars = document.querySelector(".bars");

let mobileNav = document.querySelector(".mobile-nav");

document.addEventListener("click", (e) => {
    if (check(e.target, "fa-bars")) {
        toggle(mobileNav, "show");
    }
    else if (mobileNav.contains(e.target)) {
        add(mobileNav, "show");
    }
    else {
        remove(mobileNav, "show");
    }

})