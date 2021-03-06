// Nguyễn Hải Đăng - B1910054
//Show Menu
var search = {

    menuMobileChild: function() {
        var showMenuChild = document.querySelector('.header__menu--box-item-fixx');

        var menuChild = document.querySelector('.header__menu--show');

        var hideMenuChild = document.querySelector('.header__menu--item-hide');


        //Hiện Menu phụ
        showMenuChild.addEventListener('click', function() {
                menuChild.classList.add('block-menu')
                hideMenuChild.style.display = 'block';
            })
            //Ẩn Menu phụ
        hideMenuChild.addEventListener('click', function() {
            menuChild.classList.remove('block-menu')
            hideMenuChild.style.display = 'none';
        })
    },
    //Show menu trên mobile
    showMenuMobile: function() {
        var menu = document.querySelector('.header__menu--icon');

        var boxMenu = document.querySelector('.header__menu--box');

        var closeMenu = document.querySelector('.close')
            //Hiện menu
        menu.addEventListener('click', function() {
                boxMenu.classList.add('header__menu--box-block')
            })
            //Ẩn menu
        closeMenu.addEventListener('click', function() {
            boxMenu.classList.remove('header__menu--box-block')
        })
    },
    //Hiện Icon back-to-top khi scroll
    home: function() {
        window.addEventListener('scroll', function() {
            var topHome = document.querySelector('.back-to-top');

            topHome.classList.toggle('top-home', this.window.scrollY > 600)
        })
    },

    // Thực hiện các công việc trên
    searchStart: function() {
        this.home();
        this.menuMobileChild();
        this.showMenuMobile();
    }
}

search.searchStart()