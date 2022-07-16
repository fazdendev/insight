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
    const popup = document.querySelector(".popup");
    const dropdowns = document.querySelectorAll(".dropdown");
    let clientWidth = document.documentElement.clientWidth;
    function addClass(elementClass, сlassName) {
        elementClass.classList.add(сlassName);
    }
    function removeClass(elementClass, сlassName) {
        elementClass.classList.remove(сlassName);
    }
    function toggleClass(elementClass, сlassName) {
        elementClass.classList.toggle(сlassName);
    }
    function initMobileMenu() {
        const headerContainer = document.querySelector(".header__container");
        document.addEventListener("click", menuOpen);
        function menuOpen(e) {
            if (e.target.closest(".icon-menu")) {
                toggleClass(header, "menu-open");
                toggleClass(body, "lock");
            } else if (!e.target.closest(".header") || e.target.closest(".icon-menu")) {
                removeClass(header, "menu-open");
                removeClass(body, "lock");
            }
        }
        function scrollLockMobile() {
            document.addEventListener("touchstart", (function(e) {
                if (e.target.closest(".header__container")) addClass(body, "lock"); else removeClass(body, "lock");
                document.addEventListener("touchmove", (function(e) {
                    if (e.target.closest(".header__container")) addClass(body, "lock");
                }));
                document.addEventListener("mousemove", (function(e) {
                    headerContainer.addEventListener("mouseenter", (function(e) {
                        let menuOpen = document.querySelector(".menu-open");
                        if (menuOpen) {
                            addClass(body, "lock");
                            console.log(menuOpen);
                        }
                    }));
                    headerContainer.addEventListener("mouseleave", (function(e) {
                        removeClass(body, "lock");
                    }));
                }));
            }));
        }
        scrollLockMobile();
    }
    function initPopup() {
        let popupShown, popupInterval, popupWaning, popupTimer = 0;
        function popupAnim() {
            popupTimer += 500;
            if (4500 == popupTimer) {
                addClass(popup, "popup-waning");
                popupWaning = 1;
            }
            if (5e3 == popupTimer) {
                removeClass(popup, "popup-waning");
                removeClass(popup, "popup-shown");
                popupTimer = 0;
                popupShown = 0;
                popupWaning = 0;
            }
        }
        document.addEventListener("click", (function(e) {
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
                if (popupWaning) {
                    removeClass(popup, "popup-waning");
                    popupTimer = 0;
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
    }
    function initDropdowns() {
        let dropdownBody, dropdownBodyHeight, dropdownTitle, dropdownElements;
        let heightZeroTimeout;
        for (let index = 0; index < dropdowns.length; index++) {
            let dropdown = dropdowns[index];
            initDropdown(dropdown);
        }
        function initDropdown(dropdown) {
            initDropdownVars(dropdown);
            DoRollUp();
        }
        function disInitDropdown(dropdown) {
            initDropdownVars(dropdown);
            undoRollUp(dropdown);
        }
        function initDropdownVars(dropdown) {
            dropdownBody = dropdown.querySelector(".dropdown__body");
            dropdownElements = dropdown.querySelector(".dropdown__elements");
            dropdownTitle = dropdown.querySelector(".dropdown__title");
            dropdownBodyHeight = dropdownBody.offsetHeight;
        }
        function DoRollUp() {
            dropdownBodyHeight = dropdownBody.offsetHeight;
            let dropdownOffset = dropdownBodyHeight + 100;
            dropdownElements.style.marginTop = `-${dropdownOffset}px`;
            clearTimeout(heightZeroTimeout);
            heightZeroTimeout = setTimeout(dropdownElementsHeightZero, 400);
            function dropdownElementsHeightZero() {
                dropdownElements.style.height = `0px`;
            }
        }
        function undoRollUp(dropdown) {
            clearTimeout(heightZeroTimeout);
            dropdownElements.style.marginTop = ``;
            dropdownElements.style.height = ``;
        }
        function listenDoRollUp() {
            document.addEventListener("click", (function(e) {
                if (e.target.closest(".dropdown__title")) {
                    const dropdown = e.target.closest(".dropdown");
                    if (!dropdown.classList.contains("dropdown-disabled")) {
                        initDropdownVars(dropdown);
                        if (!dropdown.classList.contains("dropdown-open")) {
                            dropdown.classList.add("dropdown-open");
                            dropdown.classList.remove("dropdown-closed");
                            undoRollUp(dropdown);
                            dropdown.classList.remove("dropdown-user-disabled");
                        } else {
                            DoRollUp();
                            dropdown.classList.remove("dropdown-open");
                            dropdown.classList.add("dropdown-closed");
                            dropdown.classList.add("dropdown-user-disabled");
                        }
                    }
                }
            }));
        }
        function initDdisableOnBreakpoint() {
            function disableOnBreakpoint(breakpointOpen = 1020) {
                if (clientWidth > breakpointOpen) for (let index = 0; index < dropdowns.length; index++) {
                    let dropdown = dropdowns[index];
                    dropdown.classList.add("dropdown-disabled");
                    dropdown.classList.remove("dropdown-open");
                    dropdown.classList.remove("dropdown-closed");
                    disInitDropdown(dropdown);
                } else for (let index = 0; index < dropdowns.length; index++) {
                    let dropdown = dropdowns[index];
                    dropdown.classList.remove("dropdown-disabled");
                    if (dropdown.classList.contains("dropdown-user-disabled")) {
                        dropdown.classList.remove("dropdown-open");
                        dropdown.classList.add("dropdown-closed");
                        initDropdown(dropdown);
                    } else {
                        dropdown.classList.add("dropdown-open");
                        dropdown.classList.remove("dropdown-closed");
                        disInitDropdown(dropdown);
                    }
                }
            }
            disableOnBreakpoint();
            window.addEventListener("resize", (function(e) {
                clientWidth = document.documentElement.clientWidth;
                disableOnBreakpoint();
            }));
        }
        listenDoRollUp();
        initDdisableOnBreakpoint();
    }
    new SmoothScroll("a[data-scroll]", {
        speed: 100,
        speedAsDuration: true
    });
    if (header) initMobileMenu();
    if (popup) initPopup();
    if (dropdowns.length) initDropdowns();
})();