document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", (event) => {
    const winScrollTop = window.pageYOffset; // Высота прокрутки
    const winWidth = document.documentElement.clientWidth; // Ширина окна
    const heightContent = document.querySelector(".content").offsetHeight; // Высота контентной части
    const heightParallax = document.querySelector(".parallax").offsetHeight; // Высота верхнего блока parallax
    const persentContent = (winScrollTop / heightContent) * 100; // Процентное соотношение высоты прокрутки документа к высоте контента
    const persentParallax = (winScrollTop / heightParallax) * 100;
    const opacity = 1 - persentParallax / 100;
    const zoom_1 = 1 + (winWidth / 10000) * persentParallax;
    const fog = document.querySelector(".parallax__fog");
    fog.style.cssText = `transform: scale(${zoom_1});
    -moz-transform: scale(${zoom_1});
    -ms-transform: scale(${zoom_1});
    -webkit-transform: scale(${zoom_1});
    -o-transform: scale(${zoom_1});
    opacity: ${opacity}`;
    const zoom_2 = 1 + (winScrollTop / 300000) * persentContent;
    const montain_1 = document.querySelector(".parallax__montain_1");
    montain_1.style.cssText = `transform: scale(${zoom_2});
    -moz-transform: scale(${zoom_2});
    -ms-transform: scale(${zoom_2});
    -webkit-transform: scale(${zoom_2});
    -o-transform: scale(${zoom_2});`;

    const offsetX = (winScrollTop / 2000) * persentParallax;
    const zoom_3 = 1 + winScrollTop * 0.000005 * persentParallax;
    const montain_2 = document.querySelector(".parallax__montain_2");
    montain_2.style.cssText = `transform: translate3d(${offsetX}px,0,0) scale(${zoom_3});
    -moz-transform: translate3d(${offsetX}px,0,0) scale(${zoom_3});
    -ms-transform: translate3d(${offsetX}px,0,0) scale(${zoom_3});
    -webkit-transform: translate3d(${offsetX}px,0,0) scale(${zoom_3});
    -o-transform: translate3d(${offsetX}px,0,0) scale(${zoom_3});`;

    const offsetX_2 = (winScrollTop / 1500) * persentParallax;
    const zoom_4 = 1 + winScrollTop * 0.00001 * persentParallax;
    const montain_3 = document.querySelector(".parallax__montain_3");
    montain_3.style.cssText = `transform: translate3d(${offsetX_2}px,0,0) scale(${zoom_4});
    -moz-transform: translate3d(${offsetX_2}px,0,0) scale(${zoom_4});
    -ms-transform: translate3d(${offsetX_2}px,0,0) scale(${zoom_4});
    -webkit-transform: translate3d(${offsetX_2}px,0,0) scale(${zoom_4});
    -o-transform: translate3d(${offsetX_2}px,0,0) scale(${zoom_4});`;
  });
});
