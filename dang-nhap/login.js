// Nguyễn Hải Đăng - B1910054
var login = {
    //Show menu child
    menuMobileChild: function() {
        var showMenuChild = document.querySelector('.header__menu--box-item-fixx');

        var menuChild = document.querySelector('.header__menu--show');

        var hideMenuChild = document.querySelector('.header__menu--item-hide');



        showMenuChild.addEventListener('click', function() {
            menuChild.classList.add('block-menu')
            hideMenuChild.style.display = 'block';
        })

        hideMenuChild.addEventListener('click', function() {
            menuChild.classList.remove('block-menu')
            hideMenuChild.style.display = 'none';
        })
    },
    //Show menu mobile
    showMenuMobile: function() {
        var menu = document.querySelector('.header__menu--icon');

        var boxMenu = document.querySelector('.header__menu--box');

        var closeMenu = document.querySelector('.close')

        menu.addEventListener('click', function() {
            boxMenu.classList.add('header__menu--box-block')
        })

        closeMenu.addEventListener('click', function() {
            boxMenu.classList.remove('header__menu--box-block')
        })
    },


    //Xử lí ràng buộc đăng nhập
    loginBtn: function() {

        // click Đăng Nhập
        var buttonOk = document.querySelector('.button-login');

        var loginTitle = document.querySelector('.login-title')

        var userLogin = document.querySelector('.user-login');

        // click Thử lại

        var retryBtn = document.querySelector('.retry');

        var loginError = document.querySelector('.login-title-error');

        var error = document.querySelector('.error')

        buttonOk.addEventListener('click', function() {
            loginTitle.style.display = 'none';
            userLogin.style.display = 'none';
            loginError.style.display = 'block';
            error.style.display = 'block';
        })

        retryBtn.addEventListener('click', function() {
            loginTitle.style.display = 'block';
            userLogin.style.display = 'block';
            loginError.style.display = 'none';
            error.style.display = 'none';
        })
    },
    //Thực hiện các công việc
    loginStart: function() {
        this.loginBtn();
        this.menuMobileChild();
        this.showMenuMobile();
    }
}

login.loginStart()