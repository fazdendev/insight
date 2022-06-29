(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    const body = document.body;
    const header = document.querySelector(".header");
    document.querySelector(".menu-header");
    document.getElementsByClassName("menu-open");
    const popupShown = document.getElementsByClassName("popup-shown");
    document.documentElement.clientWidth;
    const popup = document.querySelector(".popup");
    document.querySelector(".main-button__button");
    function addClass(elementClass, сlassName) {
        elementClass.classList.add(сlassName);
    }
    function removeClass(elementClass, сlassName) {
        elementClass.classList.remove(сlassName);
    }
    function toggleClass(elementClass, сlassName) {
        elementClass.classList.toggle(сlassName);
    }
    document.addEventListener("click", (function(e) {
        if (e.target.closest(".icon-menu")) {
            toggleClass(header, "menu-open");
            toggleClass(body, "lock");
        } else if (!e.target.closest(".menu-header") || e.target.closest(".icon-menu")) {
            removeClass(header, "menu-open");
            removeClass(body, "lock");
        }
        if (popupShown) {
            if (e.target.closest("[data-link=blank]")) addClass(popup, "popup-scale");
            setTimeout(removeClass, 300, popup, "popup-scale");
        }
        if (e.target.closest("[data-link=blank]")) {
            addClass(popup, "popup-shown");
            e.preventDefault();
            setTimeout(addClass, 1700, popup, "popup-waning");
            setTimeout(removeClass, 2e3, popup, "popup-waning");
            setTimeout(removeClass, 2e3, popup, "popup-shown");
        }
        if (e.target.closest(".popup__main-button")) {
            addClass(popup, "popup-waning");
            setTimeout(removeClass, 300, popup, "popup-waning");
            setTimeout(removeClass, 300, popup, "popup-shown");
        }
    }));
})();