function changecolor() {
    document.getElementsByClassName('plan').style.border = 'thick solid #f53838';
}















// Slider
let sliders = document.querySelectorAll('.slide');
let slidesContent = document.querySelectorAll('.slider-content');
let points = document.querySelectorAll('.point');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0,
    order = 0;

let arrowRedLeft = document.querySelector('.arrow-red-left');
let arrowWhiteLeft = document.querySelector('.arrow-white-left');
let arrowRedRight = document.querySelector('.arrow-red-right');
let arrowWhiteRight = document.querySelector('.arrow-white-right');

function reset() {
    for (let i = 0; i < sliders.length; i++) {
        slidesContent[i].style.border = '2px solid #ddd';
        points[i].style.width = '15px';
        points[i].style.background = '#dde0e4';
    }
}

function startSlider() {
    reset();
    slidesContent[current].style.border = '2px solid #f53838';
    points[current].style.width = '45px';
    points[current].style.background = '#f53838';
}

startSlider();

arrowRight.addEventListener('click', goRight);
arrowRight.addEventListener('mouseover', overRight);
arrowRight.addEventListener('mouseout', outRight);

function overRight() {
    arrowRight.style.background = '#f53838';
    arrowWhiteRight.style.display = "block";
    arrowRedRight.style.display = "none";
}

function outRight() {
    arrowRight.style.background = '#fff';
    arrowWhiteRight.style.display = "none";
    arrowRedRight.style.display = "block";
}

function goRight() {
    reset();

    let tmp = order + 1;
    let tmpC = tmp.toString();
    sliders[current].style.order = tmpC;
    if (current === (sliders.length - 1)) {
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.order = '0';
        }
        current = 0;
        slidesContent[current].style.border = '2px solid #f53838';
        points[current].style.width = '45px';
        points[current].style.background = '#f53838';
    } else {
        current++;
        slidesContent[current].style.border = '2px solid #f53838';
        points[current].style.width = '45px';
        points[current].style.background = '#f53838';
    }
}

arrowLeft.addEventListener('click', goLeft);
arrowLeft.addEventListener('mouseover', overLeft);
arrowLeft.addEventListener('mouseout', outLeft);

function overLeft() {
    arrowLeft.style.background = '#f53838';
    arrowRedLeft.style.display = 'none';
    arrowWhiteLeft.style.display = 'block';
}

function outLeft() {
    arrowLeft.style.background = '#fff';
    arrowRedLeft.style.display = 'block';
    arrowWhiteLeft.style.display = 'none';
}

function goLeft() {
    reset();
    let tmp = order - 1;
    let tmpC = tmp.toString();
    sliders[current].style.order = tmpC;
    if (current === 0) {
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].style.order = '1';
        }
        current = sliders.length - 1;
        slidesContent[current - 3].style.border = '2px solid #f53838';
        points[current - 3].style.width = '45px';
        points[current - 3].style.background = '#f53838';
    } else {
        current--;
        slidesContent[current + 1].style.border = '2px solid #f53838';
        points[current + 1].style.width = '45px';
        points[current + 1].style.background = '#f53838';
    }
}

points[0].addEventListener('click', point1);
points[1].addEventListener('click', point2);
points[2].addEventListener('click', point3);
points[3].addEventListener('click', point4);

function point1() {
    reset();
    points[0].style.background = '#f53838';
    points[0].style.width = '45px';
    for (let i = 0; i < sliders.length; i++) {
        if (i === 0) {
            slidesContent[i].style.border = '2px solid #f53838';
            let tmp = order;
            console.log(order);
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else if (i > 0) {
            let tmp = order + 1;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else {
            let tmp = order + 2;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        }
    }
}
function point2() {
    reset();
    points[1].style.background = '#f53838';
    points[1].style.width = '45px';
    for (let i = 0; i < sliders.length; i++) {
        if (i === 1) {
            slidesContent[i].style.border = '2px solid #f53838';
            let tmp = order;
            console.log(order);
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else if (i > 1) {
            let tmp = order;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else {
            let tmp = order + 1;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        }
    }
}
function point3() {
    reset();
    points[2].style.background = '#f53838';
    points[2].style.width = '45px';
    for (let i = 0; i < sliders.length; i++) {
        if (i === 2) {
            slidesContent[i].style.border = '2px solid #f53838';
            let tmp = order;
            console.log(order);
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else if (i > 2) {
            let tmp = order + 1;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else {
            let tmp = order + 2;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        }
    }
}
function point4() {
    reset();
    points[3].style.background = '#f53838';
    points[3].style.width = '45px';
    for (let i = 0; i < sliders.length; i++) {
        if (i === 3) {
            slidesContent[i].style.border = '2px solid #f53838';
            let tmp = order;
            console.log(order);
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else if (i > 3) {
            let tmp = order + 1;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        } else {
            let tmp = order + 2;
            let tmpC = tmp.toString();
            sliders[i].style.order = tmpC;
        }
    }
}