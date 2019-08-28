//script to toggle navbar dropdown menu in mobile view
var navbarBurgers = document.getElementsByClassName('navbar-burger');
console.log(navbarBurgers.length);
if (navbarBurgers.length > 0) {

    //this is used to check that the website is in mobile view because the navbar-burger only appears on mobile site
    if (window.getComputedStyle(navbarBurgers[0], null).getPropertyValue('display') == 'block') {
        //hide navbar dropdown menus on first load
        var navbarDropdowns = document.getElementsByClassName('navbar-dropdown');
        for (var i=0; i<navbarDropdowns.length; i++) {
            navbarDropdowns[i].style.display = 'none';
        }

        var navbarDropdown;
        var navbarItemLinks;
        var navbarItems = document.getElementsByClassName('navbar-item has-dropdown');
        for (var i=0; i<navbarItems.length; i++) {


            //toggle navbar dropdown menu              
            navbarItemLinks = navbarItems[i].getElementsByClassName('navbar-link');                
            if (navbarItemLinks.length > 0) {
                navbarItemLinks[0].addEventListener('click', function (event) {
                    event.preventDefault();
                    var navbarDropdown = this.nextSibling;
                    while (navbarDropdown.className.indexOf('navbar-dropdown') == -1) {
                        navbarDropdown = navbarDropdown.nextSibling;
                    }
                    if (navbarDropdown.style.display == 'none') {
                        navbarDropdown.style.display = 'block';
                        this.className = this.className + ' is-active';
                    } else {
                        navbarDropdown.style.display = 'none';
                        this.className = this.className.replace('is-active','').trim();
                    }
                });
            }
        }

        //add back-to-top button in mobile view
        var mainContent = document.getElementById('main-content');            
        if (mainContent !== null) {
            var backToTopBtn = document.createElement("BUTTON");
            backToTopBtn.setAttribute("id", "back-to-top-mobile");
            var inner = document.createElement("i");
            inner.setAttribute("class", "sgds-icon sgds-icon-arrow-up is-size-4");
            backToTopBtn.appendChild(inner);
            backToTopBtn.onclick = function(){
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            };
            window.onscroll = function() {
                if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
            };

            //append button to the end of main-content
            mainContent.appendChild(backToTopBtn);
        }
    }
}  
