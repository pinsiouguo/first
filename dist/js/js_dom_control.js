let uid = document.querySelector('#uid');

let doing = document.querySelector('#doing');

doing.addEventListener('click', () => {
    uid.style.color = 'red';
    uid.style.fontSize = '100px';
    uid.style.backgroundColor = 'yellow';
});

let addClass = document.querySelector('#add-class');

addClass.addEventListener('click', () => {
    uid.classList.add('active');
});

let removeClass = document.querySelector('#remove-class');

removeClass.addEventListener('click', () => {
    uid.classList.remove('active');
});

let mobileIcon = document.querySelector('#mobile-icon');


mobileIcon.addEventListener('click', () => {
    if (mobileIcon.classList.contains('active')) {
        mobileIcon.classList.remove('active');
    } else {
        mobileIcon.classList.add('active');
    }
});

const lazyLoad = () => {
    let images = document.querySelectorAll('.image-block img');
    images.forEach(img => {
        let src = img.dataset.src;
        if (src) {
            img.src = src;
        }
    });
}


setTimeout(() => {
    lazyLoad();
}, 5000)