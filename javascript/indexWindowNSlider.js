import {cnvs} from './canvas.js'

const indexCarousel = document.querySelector('.index-carousel');
const indexSlider = document.querySelector('.index-slider');

let ICWidth;

const calculateICWidth = () => {
    ICWidth = indexCarousel.offsetWidth
    // console.log(ICWidth)
  }

// TOUCH or MOUSE
let deviceType = "";
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
}
isTouchDevice();
console.log(deviceType)
window.onresize = () => {
    resizeCanvasWidth();
    resizeCanvasHeight();
    calculateICWidth();
}

window.onload = () => {
    resizeCanvasWidth();
    resizeCanvasHeight();
    calculateICWidth();
    isTouchDevice();

}
const resizeCanvasWidth = () => {
    cnvs.width = window.innerWidth * .7;
}
const resizeCanvasHeight = () => {
    if (window.innerWidth > 900) {
        cnvs.height = 500;
    } else if (window.innerWidth <= 900 && window.innerWidth > 500) {
        cnvs.height = 250;
    } else {
        cnvs.height = 125;
    }
}




// SLIDER FUNCTIONALITY
// desktop MOUSE EVENTS

const scrollIndexSlider = (e) => {
    if (deviceType === "touch") {
        return;
    } else {
        let rect = indexCarousel.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        
        let oldMin = 0;
        let oldMax = ICWidth;
        let oldRange = (oldMax - oldMin)
        let oldValue = x;

        let newMin = -100;
        let newMax = indexSlider.offsetWidth - ICWidth + 100;
        let newRange;
        let newValueX;

        if (oldRange === 0) {
            newValueX = newMin;
        } else {
            newRange = (newMax - newMin); 
            newValueX = (((oldValue - oldMin) * newRange) / oldRange) + newMin;
        }  
        // console.log(newValueX)
        // console.log(newMax)

        indexSlider.style.transform = `translate(${-newValueX}px,-50%)`;

        console.log(indexSlider.offsetWidth, ICWidth)
    }
}

indexCarousel.addEventListener('mousemove', scrollIndexSlider);






//TOUCH EVENTS
let swipeMultipier = 2;
const ts = (e) => {
    let rect = indexCarousel.getBoundingClientRect();
    let startX = e.touches[0].clientX - rect.left;
    indexCarousel.dataset.touchDownX = startX;


}

const tm = (e) => {
    e.preventDefault();
    if(deviceType === "mouse") {
        return
    } else {
        let rect = indexCarousel.getBoundingClientRect();
        let deltaX = parseFloat(indexCarousel.dataset.touchDownX) - (e.touches[0].clientX - rect.left);

        
        let nextDeltaX = parseFloat(indexCarousel.dataset.prevDeltaX) + deltaX;

    
        let initialMin = -100;
        let initialMax = indexSlider.offsetWidth - ICWidth + 100
        
        if (nextDeltaX < initialMin) nextDeltaX = initialMin;
        if (nextDeltaX > (initialMax)) nextDeltaX = initialMax;
    
        // data-set-delta-x strictly used to transfer value to touchend event
        indexCarousel.dataset.deltaX = nextDeltaX;
    
        // most common console.log used
        // console.log(nextDeltaX)
    
        let nextDeltaX_Multiplied = nextDeltaX * 4;
        if (nextDeltaX_Multiplied < initialMin ) nextDeltaX_Multiplied = initialMin;
        if (nextDeltaX_Multiplied > initialMax) nextDeltaX_Multiplied = initialMax;
    
        indexSlider.style.transform = `translate(${(nextDeltaX_Multiplied * -1)}px,-50%)`;
        // console.log(newestValueX)
    }

}

const te = (e) => {
    indexCarousel.dataset.touchDownX = "0";
    // data-set-percentage passed to update prevDeltaX

    // this check ensures code doesn't break if touchmove isn't triggered on carousel as is the case when
    // gofullScreen is called before any slider functionality is initiated.
    if (indexCarousel.dataset.deltaX === undefined) indexCarousel.dataset.deltaX = 0;

    indexCarousel.dataset.prevDeltaX = indexCarousel.dataset.deltaX;



}

indexCarousel.addEventListener("touchstart", ts);
indexCarousel.addEventListener("touchmove", tm);
indexCarousel.addEventListener("touchend", te);





// FULL SCREEN


const indexPage_Fullscreen_IMG_Container = document.querySelector('.indexPage-fullscreen-img-container');
const indexPage_Fullscreen_IMG = document.querySelector('.indexPage-fullscreen-img');
const indexPage_Fullscreen_IMG_Ex_Butt = document.querySelector('.indexPage-fullscreen-img-ex-button');

let index_Slider_IMGS = document.querySelectorAll('.index-slider-img');

function goFullScreen () {
    indexPage_Fullscreen_IMG.src = this.src;

    indexPage_Fullscreen_IMG_Container.style.display = "flex";
    indexPage_Fullscreen_IMG_Ex_Butt.style.display = "block";

    let w = indexPage_Fullscreen_IMG.offsetWidth;
    let h = indexPage_Fullscreen_IMG.offsetHeight;

    if (w > h) {
        indexPage_Fullscreen_IMG.classList.add('wide-img');
        indexPage_Fullscreen_IMG.classList.remove('tall-img');
    } else {
        indexPage_Fullscreen_IMG.classList.add('tall-img');
        indexPage_Fullscreen_IMG.classList.remove('wide-img');
    }

}

function exitFullScreen () {
    indexPage_Fullscreen_IMG_Container.style.display = "none";
    indexPage_Fullscreen_IMG_Ex_Butt.style.display = "none";

    // enable scroll
    // document.body.style.overflow = "visible"

}

index_Slider_IMGS.forEach(img => {
    img.addEventListener('click', goFullScreen)
});

indexPage_Fullscreen_IMG_Ex_Butt.addEventListener('click', exitFullScreen);