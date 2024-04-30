// ---------------------------------------Image Slider of Header--------------------------------------------
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = `translateX(-${n * 100}%)`;
    }
}

function prevSlide() {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
}

function nextSlide() {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
}

setInterval(nextSlide, 4000);

prev_btn.addEventListener('click', (e) => {
    prevSlide();
});

next_btn.addEventListener('click', (e) => {
    nextSlide();
});

// -------------------------------------Product Slider-----------------------------------------------//
const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (e) => {
        // e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}


// -----------------------------------Side Navigation bar--------------------------------------------------
const allIcon = document.querySelector('.open-sidebar');
const addClass = document.querySelector('.sidebar-details');
const hideMenuBar = document.querySelector('.cross-icon');

allIcon.addEventListener('click', (e) => {
    addClass.classList.toggle('sidebar-show');
    document.querySelector('.sidebar-menu-outer').style.display = 'block';
});

document.addEventListener('click', (e) => {
    if (!addClass.contains(e.target) && document.querySelector('.sidebar-menu-outer').contains(e.target) || hideMenuBar.contains(e.target)) {
        addClass.classList.toggle('sidebar-show');
        document.querySelector('.sidebar-menu-outer').style.display = 'none';
    }
})

// -------------------country OR address OR location popup--------------------------------------
const addressPopUpId = document.querySelector('#delivery-outer-id');
const countryClick = document.querySelector('.nav-country')

countryClick.addEventListener('click', (e) => {
    addressPopUpId.classList.add('delivery-outer');
    document.querySelector('.delivery-popup').style.display = 'block';
    timeLoader();
});

document.addEventListener('click', (e) => {
    if (addressPopUpId.contains(e.target) && !document.querySelector('.delivery-popup').contains(e.target)) {
        addressPopUpId.classList.remove('delivery-outer');
        document.querySelector('.delivery-popup').style.display = 'none';
        document.querySelector(".popup-content").style.display = "none";
    }
});

function timeLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    document.querySelector(".popup-content").style.display = "none";
    
    setTimeout(() => {
        loader.style.display = 'none';
        document.querySelector(".popup-content").style.display = "block";
    }, 500);
}