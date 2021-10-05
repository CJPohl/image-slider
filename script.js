const image1 = document.getElementById('image0');
const image2 = document.getElementById('image1');
const image3 = document.getElementById('image2');

const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');

const dot0 = document.getElementById('0');
const dot1 = document.getElementById('1');
const dot2 = document.getElementById('2');
const dots = [dot0, dot1, dot2];

const images = [image1, image2, image3];
const DEFAULT_IMAGE = images[1];
const DEFAULT_RIGHT_INDEX = 2;
const DEFAULT_LEFT_INDEX = 0;

let currentImage = DEFAULT_IMAGE;
let nextIndex = DEFAULT_RIGHT_INDEX;
let pastIndex = DEFAULT_LEFT_INDEX;


 const initPage = () => {
    currentImage.classList.add('active');
    updateDots();
    startInterval();
}

const goLeft = () => {
    checkIndex();

    const leftImage = images[pastIndex];
    currentImage.classList.remove('active');
    leftImage.classList.add('active')
    currentImage = leftImage;

    pastIndex--;
    updateDots();
}

const goRight = () => {
    checkIndex();

    const rightImage = images[nextIndex];
    currentImage.classList.remove('active');
    rightImage.classList.add('active')
    currentImage = rightImage;

    nextIndex++;
    updateDots();
}

const checkIndex = () => {
    if (nextIndex === 3) {
        nextIndex = 0;
    }

    if (pastIndex === -1) {
        pastIndex = 2;
    }
}

const changeImage = (e) => {
    const index = e.target.id;
    const newImage = images[index];

    if (newImage !== undefined) {
        currentImage.classList.remove('active');
        newImage.classList.add('active');

        currentImage = newImage;
    }
    updateDots();
}

const updateDots = () => {
    for (let i=0; i<images.length; i++) {
        if (images[i].classList[1] === 'active') {
            dots[i].classList.remove('far');
            dots[i].classList.remove('fa-circle');
            dots[i].classList.add('fas');
            dots[i].classList.add('fa-circle');
        }
        else {
            dots[i].classList.remove('fas');
            dots[i].classList.remove('fa-circle');
            dots[i].classList.add('far');
            dots[i].classList.add('fa-circle');
        }
    }
}

const startInterval = () => {
    setTimeout(5000);
    setInterval(goRight, 5000);
}

rightArrow.addEventListener('click', goRight);
leftArrow.addEventListener('click', goLeft);

dots.forEach(dot => dot.addEventListener('click', changeImage));

window.onload = () => {
    initPage();
}