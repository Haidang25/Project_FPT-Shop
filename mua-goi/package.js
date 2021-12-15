var packages = {


    menuMobileChild: function () {
        var showMenuChild = document.querySelector('.header__menu--box-item-fixx');

        var menuChild = document.querySelector('.header__menu--show');

        var hideMenuChild = document.querySelector('.header__menu--item-hide');



        showMenuChild.addEventListener('click', function () {
            menuChild.classList.add('block-menu')
            hideMenuChild.style.display = 'block';
        })

        hideMenuChild.addEventListener('click', function () {
            menuChild.classList.remove('block-menu')
            hideMenuChild.style.display = 'none';
        })
    },

    showMenuMobile: function () {
        var menu = document.querySelector('.header__menu--icon');

        var boxMenu = document.querySelector('.header__menu--box');

        var closeMenu = document.querySelector('.close')

        menu.addEventListener('click', function () {
            boxMenu.classList.add('header__menu--box-block')
        })

        closeMenu.addEventListener('click', function () {
            boxMenu.classList.remove('header__menu--box-block')
        })
    },

    more: function () {

        var showMore = document.querySelector('.more');

        var description = document.querySelector('.package-description-show-item');

        var hideMore = document.querySelector('.more-hide');

        showMore.addEventListener('click', function () {
            description.style.display = 'inline-block';
            showMore.style.display = 'none';
            hideMore.style.display = 'inline-block';
        })

        hideMore.addEventListener('click', function () {
            description.style.display = 'none';
            showMore.style.display = 'inline-block';
            hideMore.style.display = 'none';
        })

    },

    vip: function () {

        var moreVip = document.querySelector('.more-vip');

        var fullHide = document.querySelector('.package-vip-full-hide');

        var fullHide2 = document.querySelector('.package-vip-full-hide2');

        var fullHide3 = document.querySelector('.package-vip-full-hide3');

        var fullHide4 = document.querySelector('.package-vip-full-hide4');

        var hideItem = document.querySelector('.package-vip-full-hide-item');

        var widthOff = document.querySelector('.package-chanel-vip');

        var An = document.querySelector('.more-hide-vip');

        moreVip.addEventListener('click', function () {
            fullHide.style.display = 'block';
            fullHide2.style.display = 'block';
            fullHide3.style.display = 'block';
            fullHide4.style.display = 'block';
            hideItem.style.display = 'block';
            An.style.display = 'inline-block';
            moreVip.style.display = 'none';
        })

        An.addEventListener('click', function () {
            fullHide.style.display = 'none';
            fullHide2.style.display = 'none';
            fullHide3.style.display = 'none';
            fullHide4.style.display = 'none';
            hideItem.style.display = 'none';
            An.style.display = 'none';
            moreVip.style.display = 'inline-block';
        })

    },

    packagesStart: function () {
        this.more()
        this.vip();
        this.menuMobileChild();
        this.showMenuMobile();
    }
};

packages.packagesStart();
