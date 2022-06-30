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
    const popup = document.querySelector(".popup");
    document.querySelector(".main-button__button");
    let popupShown;
    let popupTimer = 0;
    let popupInterval;
    function addClass(elementClass, сlassName) {
        elementClass.classList.add(сlassName);
    }
    function removeClass(elementClass, сlassName) {
        elementClass.classList.remove(сlassName);
    }
    function toggleClass(elementClass, сlassName) {
        elementClass.classList.toggle(сlassName);
    }
    function popupAnim() {
        popupTimer += 500;
        if (4500 == popupTimer) addClass(popup, "popup-waning");
        if (5e3 == popupTimer) {
            removeClass(popup, "popup-waning");
            removeClass(popup, "popup-shown");
            popupTimer = 0;
            popupShown = 0;
        }
    }
    document.addEventListener("click", (function(e) {
        if (e.target.closest(".icon-menu")) {
            toggleClass(header, "menu-open");
            toggleClass(body, "lock");
        } else if (!e.target.closest(".menu-header") || e.target.closest(".icon-menu")) {
            removeClass(header, "menu-open");
            removeClass(body, "lock");
        }
        if (e.target.closest("[data-link=blank]")) {
            popupShown = document.querySelector(".popup-shown");
            e.preventDefault();
            if (popupShown) {
                addClass(popup, "popup-scale");
                setTimeout(removeClass, 300, popup, "popup-scale");
                popupTimer = 0;
            } else {
                addClass(popup, "popup-shown");
                clearInterval(popupInterval);
                popupInterval = setInterval(popupAnim, 500);
            }
        }
        if (e.target.closest(".popup__main-button")) {
            addClass(popup, "popup-waning");
            setTimeout(removeClass, 500, popup, "popup-waning");
            setTimeout(removeClass, 500, popup, "popup-shown");
            popupShown = 0;
            popupTimer = 0;
        }
    }));
})();