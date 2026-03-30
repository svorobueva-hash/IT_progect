document.addEventListener('DOMContentLoaded', () => {

const slider = tns({
    container: '.slider-track',
    items: 2.2,
    slideBy: 1,
    gutter: 32,
    loop: true,
    mouseDrag: true,
    swipeAngle: false,
    speed: 500,
    nav: false,
    controls: false,
    autoplay: false,
    edgePadding: 16,
    responsive: {
        0: {
            items: 1.2
        },
        576: {
            items: 2.4
        },
        992: {
            items: 2.2
        },
        1230: {
            items: 2.4
        },
        1440: {
            items: 2.4
        },
        1920: {
            items: 3
        }
    }
});

const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

leftBtn.addEventListener('click', () => {
    slider.goTo('prev');
});

rightBtn.addEventListener('click', () => {
    slider.goTo('next');
});

});

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn1');
    const qrPopup = document.getElementById('qr-popup');
    const qrClose = document.getElementById('qr-close');

    let qrCode;

    btn.addEventListener('click', function() {
        // Telegram ссылка
        const telegramURL = "https://t.me/YourTelegramUsername"; // <-- замени на свой ник

        // Если QR еще не создан — создаем
        if(!qrCode) {
            qrCode = new QRCode(document.getElementById("qr-code"), {
                text: telegramURL,
                width: 200,
                height: 200,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }

        qrPopup.style.display = "block"; // показываем popup
    });

    qrClose.addEventListener('click', function() {
        qrPopup.style.display = "none"; // закрываем popup
    });
});
