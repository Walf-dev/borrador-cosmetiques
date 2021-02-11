window.addEventListener("load", event => {

    // Sticky menu 

    window.onscroll = function () {

        if (window.pageYOffset >= 90) {
            iconMenu.classList.add('sticky');

        } else {
            iconMenu.classList.remove('sticky');
        }
    }
    // open menu

    const iconMenu = document.querySelector('.icon-menu'),
        menuOverlay = document.querySelector('.main-nav'),
        body = document.querySelector('body');

    iconMenu.addEventListener("click", openMenu);

    // Sticky menu 

    window.onscroll = function () {

        if (window.pageYOffset >= 90) {
            iconMenu.classList.add('sticky');

        } else {
            iconMenu.classList.remove('sticky');
        }
    }


    function openMenu() {

        if (iconMenu.classList.contains('icon-open')) {
            menuOverlay.classList.add('menu-close');
            iconMenu.classList.remove('icon-open');
            body.classList.remove('no-scroll');
            iconMenu.classList.remove('sticky');

            setTimeout(function () {
                menuOverlay.classList.remove('menu-open');
            }, 600);
            setTimeout(function () {
                menuOverlay.classList.remove('menu-close');
            }, 900);

        } else {
            menuOverlay.classList.remove('menu-close');
            menuOverlay.classList.add('menu-open');
            iconMenu.classList.add('icon-open');
            body.classList.add('no-scroll');

            setTimeout(function () {
                iconMenu.classList.remove('sticky');
            }, 500);

        }
    }

    // open modal video

    const videoItem = document.querySelectorAll('.video-item'),
        modalVideo = document.querySelector('.modal-video'),
        iconCloseVideo = document.querySelector('.close-video'),
        videoFrame = document.querySelector(".video-code iframe"),
        videoOpen = document.querySelector(".video-open");



    videoItem.forEach(function (el) {
        el.addEventListener("click", openVideo);
    })

    iconCloseVideo.addEventListener("click", closeVideo);
    // body.addEventListener("click", closeVideo);


    function openVideo(e) {
        const videoSrc = e.currentTarget.dataset.video;

        body.classList.add('no-scroll');

        modalVideo.classList.add('video-open');

        videoFrame.src = videoSrc;

    }

    // ytLink.href = videoUrl;



    function closeVideo() {

        body.classList.remove('no-scroll');
        modalVideo.classList.remove('video-open');
        videoFrame.src = "";

    }

});