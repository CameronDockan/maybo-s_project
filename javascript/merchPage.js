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

window.onload = () => {
    isTouchDevice();
}

// clickable variables
const carousel1 = document.querySelector('#carousel1')
const carousel2 = document.querySelector('#carousel2')
const carousel3 = document.querySelector('#carousel3')

const damonHitboxL = document.querySelector('#damon-hitBox-left');
const damonHitboxR = document.querySelector('#damon-hitBox-right');
const mayboHitbox = document.querySelector('#maybo-jinpo-hitBox');
const sehoHitbox = document.querySelector('#seho-hitBox');

// class changing variables
const damonFrontColorIMG = document.querySelector('#damon-front-color');
const mayboColorIMG = document.querySelector('#maybo-jinpo-color');
const sehoColorIMG = document.querySelector('#seho-color');
const damonBackColorIMG = document.querySelector('#damon-back-color');

// moon images
const sehoMoon = document.querySelector('#seho-moon')
const mjMoon = document.querySelector('#mj-moon')
const damonMoon = document.querySelector('#damon-moon')
const planet = document.querySelector('.planet')

const sehoMoonIMG = document.querySelector('#seho-moon-img')
const mjMoonIMG = document.querySelector('#mj-moon-img')
const damonMoonIMG = document.querySelector('#damon-moon-img')

const addOpac1 = () => {
    damonFrontColorIMG.style.opacity = "1";
    mayboColorIMG.style.opacity = "0";
    sehoColorIMG.style.opacity = "0";
    damonBackColorIMG.style.opacity = "1";
}
const addOpac2 = () => {
    damonFrontColorIMG.style.opacity = "0";
    mayboColorIMG.style.opacity = "1";
    sehoColorIMG.style.opacity = "0";
    damonBackColorIMG.style.opacity = "0";
}
const addOpac3 = () => {
    damonFrontColorIMG.style.opacity = "0";
    mayboColorIMG.style.opacity = "0";
    sehoColorIMG.style.opacity = "1";
    damonBackColorIMG.style.opacity = "0";
}

const addOpac_Mobile_1 = () => {
    damonMoonIMG.style.opacity = "1";
    mjMoonIMG.style.opacity = "0";
    sehoMoonIMG.style.opacity = "0";
}

const addOpac_Mobile_2 = () => {
    damonMoonIMG.style.opacity = "0";
    mjMoonIMG.style.opacity = "1";
    sehoMoonIMG.style.opacity = "0";
}

const addOpac_Mobile_3 = () => {
    damonMoonIMG.style.opacity = "0";
    mjMoonIMG.style.opacity = "0";
    sehoMoonIMG.style.opacity = "1";
}

const addDropShadow1 = () => {
    damonFrontColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)");
    mayboColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)");
    sehoColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)");
    damonBackColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)");
}
const addDropShadow2 = () => {
    damonFrontColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)");
    mayboColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)");
    sehoColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0, rgba(0,0,0,0)");
    damonBackColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0, rgba(0,0,0,0)");
}
const addDropShadow3 = () => {
    damonFrontColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)");
    mayboColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)");
    sehoColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)");
    damonBackColorIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0, rgba(0,0,0,0)");
}

const addDropShadow_Mobile_1 = () => {
    damonMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)")
    mjMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)")
    sehoMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)")
}

const addDropShadow_Mobile_2 = () => {
    damonMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)")
    mjMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)")
    sehoMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)")
}

const addDropShadow_Mobile_3 = () => {
    damonMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)")
    mjMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 0 rgba(0,0,0,0)")
    sehoMoonIMG.style.setProperty("-webkit-filter", "drop-shadow(0 0 20px aqua)")
}





const brightenImage1 = () => {
    addOpac1();
    addDropShadow1();
}
const brightenImage2 = () => {
    addOpac2();
    addDropShadow2();
}
const brightenImage3 = () => {
    addOpac3();
    addDropShadow3();
}

const brightenMoon1 = () => {
    addOpac_Mobile_1();
    addDropShadow_Mobile_1();
}
const brightenMoon2 = () => {
    addOpac_Mobile_2();
    addDropShadow_Mobile_2();
}
const brightenMoon3 = () => {
    addOpac_Mobile_3();
    addDropShadow_Mobile_3();
}

let section3 = document.querySelector('.merchPage-section3-container');
let section4 = document.querySelector('.merchPage-section4-container');
let section5 = document.querySelector('.merchPage-section5-container');
let section6 = document.querySelector('.merchPage-section6-container');

const displaySections = () => {
    section4.style.display = "flex";
    section5.style.display = "flex";
    section6.style.display = "flex";
}
const negateDisplaySections = () => {
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
}

const scroll_To_Jersey = () => {
    carousel3.scrollIntoView({ behavior: "smooth", block: "center", inline:"center" });
}
const scroll_To_Sweater = () => {
    carousel1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}
const scroll_To_Shirt = () => {
    carousel2.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}
const scroll_To_Section_3 = () => {
    section3.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

}
const handleSelectButt_Touchstart = () => {
    let m1 = parseFloat(damonMoon.dataset.visibilityPercentage);
    let m2 = parseFloat(mjMoon.dataset.visibilityPercentage);
    let m3 = parseFloat(sehoMoon.dataset.visibilityPercentage);

    if (m1 > 10) {
        changeBG_White_SelectMoonButt();
        brightenMoon1();
        displaySections();
    } else if (m2 > 10) {
        changeBG_White_SelectMoonButt();
        brightenMoon2();
        displaySections();
    } else if(m3 > 10) {
        changeBG_White_SelectMoonButt();
        brightenMoon3();
        displaySections();
    } else if (!solarSystem.inMotion) {
        orbit_Clockwise();
        changeBG_White_SelectMoonButt();
        console.log(solarSystem.inMotion)
    } else {
        changeBG_White_SelectMoonButt();
        alert("I don't see a model in view to select.");
    }

}

const handleSelectButt_Touchend = () => {
    let m1 = parseFloat(sehoMoon.dataset.visibilityPercentage);
    let m2 = parseFloat(mjMoon.dataset.visibilityPercentage);
    let m3 = parseFloat(damonMoon.dataset.visibilityPercentage);

    if (m1 > 0) {
        changeBG_Transparent_SelectMoonButt();
        scroll_To_Sweater();
    } else if (m2 > 0) {
        changeBG_Transparent_SelectMoonButt();
        scroll_To_Shirt();
    } else if(m3 > 0) {
        changeBG_Transparent_SelectMoonButt();
        scroll_To_Jersey();
    } else {
        changeBG_Transparent_SelectMoonButt();
    }
}

const fatherFunction1 = () => {
    brightenImage1();
    displaySections();
    scroll_To_Jersey();
}
const fatherFunction2 = () => {
    brightenImage2();
    displaySections();
    scroll_To_Shirt();
}
const fatherFunction3 = () => {
    brightenImage3();
    displaySections();
    scroll_To_Sweater();
}
const fatherFunction_Mobile1 = () => {
    brightenMoon1();
    displaySections();
    scroll_To_Jersey();
}
const fatherFunction_Mobile2 = () => {
    brightenMoon2();
    displaySections();
    scroll_To_Shirt();
}
const fatherFunction_Mobile3 = () => {
    brightenMoon3();
    displaySections();
    scroll_To_Sweater();
}

damonHitboxL.addEventListener("click", fatherFunction1);
damonHitboxR.addEventListener("click", fatherFunction1);
mayboHitbox.addEventListener("click", fatherFunction2);
sehoHitbox.addEventListener("click", fatherFunction3);

damonMoon.addEventListener("click", fatherFunction_Mobile1);
mjMoon.addEventListener("click", fatherFunction_Mobile2);
sehoMoon.addEventListener("click", fatherFunction_Mobile3);


// slider functionality
const slider1 = document.querySelector('#slider1');
const slider2 = document.querySelector('#slider2');
const slider3 = document.querySelector('#slider3');

const prevButt1 = document.querySelector('#prev-button1');
const nextButt1 = document.querySelector('#next-button1');
const prevButt2 = document.querySelector('#prev-button2');
const nextButt2 = document.querySelector('#next-button2');
const prevButt3 = document.querySelector('#prev-button3');
const nextButt3 = document.querySelector('#next-button3');
// mobile prev and next buttons
let fixedPrevButt = document.querySelector('#fixed-prev-button');
let fixedNextButt = document.querySelector('#fixed-next-button');
let selectMoonButt = document.querySelector('.select-moon-btn');

let imgIndex1 = 0;
let imgIndex2 = 0;
let imgIndex3 = 0;

let direction1 = -1;
let direction2 = -1;
let direction3 = -1;
// PWPI === percent of (slider) width per img
let PWPI;

const calculate_PWPI_1 = () => {
    // multiply decimal by 100 because translate() in functions below uses % sign
    PWPI = (1/slider1.children.length)*(100);
    return PWPI;
}
const calculate_PWPI_2 = () => {
    PWPI = (1/slider2.children.length)*(100);
    return PWPI;
}
const calculate_PWPI_3 = () => {
    PWPI = (1/slider3.children.length)*(100);
    return PWPI;
}

// INFINITE SLIDER 
const moveRight1 = () => {
    calculate_PWPI_1();
    if (direction1 === 1) {
        slider1.prepend(slider1.lastElementChild);
        carousel1.style.justifyContent = 'flex-start';
        direction1 = -1;
      }
      slider1.style.transform = `translateX(${-PWPI}%)`;
}
const moveLeft1 = () => {
    calculate_PWPI_1();
    if (direction1 === -1) {
        slider1.appendChild(slider1.firstElementChild);
        carousel1.style.justifyContent = 'flex-end';
        direction1 = 1;
    }
    slider1.style.transform = `translate(${PWPI}%)`;
}
const appendOrPrepend1 = () => {
    if (direction1 === -1) {
        slider1.appendChild(slider1.firstElementChild);
    } else if (direction1 === 1) {
        slider1.prepend(slider1.lastElementChild);
    }
    slider1.style.transition = 'none';
    slider1.style.transform = 'translate(0)';
    // content inside setTimeout executed at end of append_First_To_Last() definitively;
    setTimeout(() => {
        slider1.style.transition = 'all .25s ease-out'
    })
}

const moveRight2 = () => {
    calculate_PWPI_2();
    if (direction2 === 1) {
        slider2.prepend(slider2.lastElementChild);
        carousel2.style.justifyContent = 'flex-start';
        direction2 = -1;
      }
      slider2.style.transform = `translateX(${-PWPI}%)`;
}
const moveLeft2 = () => {
    calculate_PWPI_2();
    if (direction2 === -1) {
        slider2.appendChild(slider2.firstElementChild);
        carousel2.style.justifyContent = 'flex-end';
        direction2 = 1;
    }
    slider2.style.transform = `translate(${PWPI}%)`;
}
const appendOrPrepend2 = () => {
    if (direction2 === -1) {
        slider2.appendChild(slider2.firstElementChild);
    } else if (direction2 === 1) {
        slider2.prepend(slider2.lastElementChild);
    }
    slider2.style.transition = 'none';
    slider2.style.transform = 'translate(0)';
    // content inside setTimeout executed at end of append_First_To_Last() definitively;
    setTimeout(() => {
        slider2.style.transition = 'all .25s ease-out'
    })
}

const moveRight3 = () => {
    calculate_PWPI_3();
    if (direction3 === 1) {
        slider3.prepend(slider3.lastElementChild);
        carousel3.style.justifyContent = 'flex-start';
        direction3 = -1;
      }
      slider3.style.transform = `translateX(${-PWPI}%)`;
}
const moveLeft3 = () => {
    calculate_PWPI_3();
    if (direction3 === -1) {
        slider3.appendChild(slider3.firstElementChild);
        carousel3.style.justifyContent = 'flex-end';
        direction3 = 1;
    }
    slider3.style.transform = `translate(${PWPI}%)`;
}
const appendOrPrepend3 = () => {
    if (direction3 === -1) {
        slider3.appendChild(slider3.firstElementChild);
    } else if (direction3 === 1) {
        slider3.prepend(slider3.lastElementChild);
    }
    slider3.style.transition = 'none';
    slider3.style.transform = 'translate(0)';
    // content inside setTimeout executed at end of append_First_To_Last() definitively;
    setTimeout(() => {
        slider3.style.transition = 'all .25s ease-out'
    })
}

const moveRight_Mobile = () => {
    let n1 = section4.dataset.visibilityPercentage;
    let n2 = section5.dataset.visibilityPercentage;
    let n3 = section6.dataset.visibilityPercentage;
    if (n1 >= 50) {
        moveRight1();
    }
    if (n2 >= 50) {
        moveRight2();
    }
    if (n3 >= 50) {
        moveRight3();
    }
}

const moveLeft_Mobile = () => {
    let n1 = section4.dataset.visibilityPercentage;
    let n2 = section5.dataset.visibilityPercentage;
    let n3 = section6.dataset.visibilityPercentage;
    if (n1 >= 50) {
        moveLeft1();
    }
    if (n2 >= 50) {
        moveLeft2();
    }
    if (n3 >= 50) {
        moveLeft3();
    }
}


nextButt1.addEventListener('click', moveRight1)
prevButt1.addEventListener('click', moveLeft1)
nextButt2.addEventListener('click', moveRight2)
prevButt2.addEventListener('click', moveLeft2)
nextButt3.addEventListener('click', moveRight3)
prevButt3.addEventListener('click', moveLeft3)



const changeBG_White_FixedPrevButt = () => {
    fixedPrevButt.style.backgroundColor = 'aliceBlue';
}
const changeBG_White_FixedNextButt = () => {
    fixedNextButt.style.backgroundColor = 'aliceBlue';
}
const changeBG_Transparent_FixedPrevButt = () => {
    fixedPrevButt.style.backgroundColor = 'rgba(0,0,0,.5)';
}
const changeBG_Transparent_FixedNextButt = () => {
    fixedNextButt.style.backgroundColor = 'rgba(0,0,0,.5)';
}
const changeBG_White_SelectMoonButt = () => {
    selectMoonButt.style.backgroundColor = 'aliceBlue';
}
const changeBG_Transparent_SelectMoonButt = () => {
    selectMoonButt.style.backgroundColor = 'rgba(0,0,0,.5)';
}

if (fixedNextButt) fixedNextButt.addEventListener('click', moveRight_Mobile)
if (fixedPrevButt) fixedPrevButt.addEventListener('click', moveLeft_Mobile)

if (fixedNextButt) fixedNextButt.addEventListener('mousedown', changeBG_White_FixedNextButt)
if (fixedPrevButt) fixedPrevButt.addEventListener('mousedown', changeBG_White_FixedPrevButt)
if (fixedNextButt) fixedNextButt.addEventListener('touchstart', changeBG_White_FixedNextButt)
if (fixedPrevButt) fixedPrevButt.addEventListener('touchstart', changeBG_White_FixedPrevButt)

if (fixedNextButt) fixedNextButt.addEventListener('mouseup', changeBG_Transparent_FixedNextButt)
if (fixedPrevButt) fixedPrevButt.addEventListener('mouseup', changeBG_Transparent_FixedPrevButt)
if (fixedNextButt) fixedNextButt.addEventListener('touchend', changeBG_Transparent_FixedNextButt)
if (fixedPrevButt) fixedPrevButt.addEventListener('touchend', changeBG_Transparent_FixedPrevButt)


if (selectMoonButt) selectMoonButt.addEventListener('mousedown', handleSelectButt_Touchstart);
if (selectMoonButt) selectMoonButt.addEventListener('mouseup', handleSelectButt_Touchend);
if (selectMoonButt) selectMoonButt.addEventListener('touchstart', handleSelectButt_Touchstart);
if (selectMoonButt) selectMoonButt.addEventListener('touchend', handleSelectButt_Touchend);



slider1.addEventListener('transitionend', appendOrPrepend1)
slider2.addEventListener('transitionend', appendOrPrepend2)
slider3.addEventListener('transitionend', appendOrPrepend3)







let fixedArrowContainer = document.querySelector('.fixed-arrow-container');
let upArrow = document.querySelector('#up-arrow');
let downArrow = document.querySelector('#down-arrow')


const sections = document.querySelectorAll('.slider-section')

options = {
    threshold: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
}

for (let i = 0; i <= 1.0; i += 0.01) {
    options.threshold.push(i);
  }

const sec4_Observer = new IntersectionObserver(entries => {
    let visibilityPercentage = Math.floor(entries[0].intersectionRatio * 100);
    section4.dataset.visibilityPercentage = visibilityPercentage;
}, options)

sec4_Observer.observe(section4)

const sec5_Observer = new IntersectionObserver(entries => {
    let visibilityPercentage = Math.floor(entries[0].intersectionRatio * 100);
    section5.dataset.visibilityPercentage = visibilityPercentage;
}, options)

sec5_Observer.observe(section5)

const sec6_Observer = new IntersectionObserver(entries => {
    let visibilityPercentage = Math.floor(entries[0].intersectionRatio * 100);
    section6.dataset.visibilityPercentage = visibilityPercentage;
}, options)

sec6_Observer.observe(section6)


const displayFixedArrows = () => {
    let n1 = section4.dataset.visibilityPercentage
    let n2 = section5.dataset.visibilityPercentage
    let n3 = section6.dataset.visibilityPercentage

    if (n1 >= 50) {
        fixedArrowContainer.style.zIndex = "1"
        fixedArrowContainer.style.opacity = "1";
        downArrow.style.opacity = "1";
    } else if (n2 >= 50) {
        fixedArrowContainer.style.zIndex = "1"
        fixedArrowContainer.style.opacity = "1";
        downArrow.style.opacity = "1";
    } else if (n3 >= 50) {
        fixedArrowContainer.style.zIndex = "1"
        fixedArrowContainer.style.opacity = "1";
        downArrow.style.opacity = ".3";
    } else {
        fixedArrowContainer.style.opacity = "0"
        fixedArrowContainer.style.zIndex = "-99"
    }
}

document.addEventListener('scroll', displayFixedArrows);

const scrollDown = () => {
    let n1 = section4.dataset.visibilityPercentage;
    let n2 = section5.dataset.visibilityPercentage;
    // let n3 = section6.dataset.visibilityPercentage

    if (n1 >= 50) scroll_To_Shirt();
    if (n2 >= 50) scroll_To_Jersey();
}

const scrollUp = () => {
    let n1 = section4.dataset.visibilityPercentage;
    let n2 = section5.dataset.visibilityPercentage;
    let n3 = section6.dataset.visibilityPercentage;

    if (n3 >= 50) scroll_To_Shirt();
    if (n2 >= 50) scroll_To_Sweater();
    if (n1 >= 50) scroll_To_Section_3();
}

downArrow.addEventListener('click', scrollDown);
upArrow.addEventListener('click', scrollUp);





// e.currentTarget
// always refers to the element to which the event handler has been attached,
// e.target, identifies the element on which the event occurred and which may be its descendant.
// but currentTarget doesn't work for touch events

const changeBG_White = (e) => {
    e.currentTarget.style.backgroundColor = 'aliceBlue'
}
const changeBG_White_Mobile_UpArrow = () => {
    upArrow.style.backgroundColor = 'aliceBlue'
}
const changeBG_White_Mobile_DownArrow = () => {
    downArrow.style.backgroundColor = 'aliceBlue'
}

const changeBG_Transparent = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,.5)';
}
const changeBG_Transparent_Mobile_UpArrow = () => {
    upArrow.style.backgroundColor = 'rgba(0,0,0,.5)';
}
const changeBG_Transparent_Mobile_DownArrow = () => {
    downArrow.style.backgroundColor = 'rgba(0,0,0,.5)';
}

const remove_UpArrow = () => {
    upArrow.style.display = 'none'
}

const display_UpArrow = () => {
    upArrow.style.display = 'flex'
}



downArrow.addEventListener('mousedown', changeBG_White)
downArrow.addEventListener('mouseup', changeBG_Transparent)

upArrow.addEventListener('mousedown', changeBG_White)
nextButt1.addEventListener('mousedown', changeBG_White)
prevButt1.addEventListener('mousedown', changeBG_White)
nextButt2.addEventListener('mousedown', changeBG_White)
prevButt2.addEventListener('mousedown', changeBG_White)
nextButt3.addEventListener('mousedown', changeBG_White)
prevButt3.addEventListener('mousedown', changeBG_White)

upArrow.addEventListener('mouseup', changeBG_Transparent)
nextButt1.addEventListener('mouseup', changeBG_Transparent)
prevButt1.addEventListener('mouseup', changeBG_Transparent)
nextButt2.addEventListener('mouseup', changeBG_Transparent)
prevButt2.addEventListener('mouseup', changeBG_Transparent)
nextButt3.addEventListener('mouseup', changeBG_Transparent)
prevButt3.addEventListener('mouseup', changeBG_Transparent)

upArrow.addEventListener('touchstart', changeBG_White_Mobile_UpArrow)
downArrow.addEventListener('touchstart', changeBG_White_Mobile_DownArrow)

upArrow.addEventListener('touchend', changeBG_Transparent_Mobile_UpArrow)
downArrow.addEventListener('touchend', changeBG_Transparent_Mobile_DownArrow)





// planet and moons slider

const moons = document.querySelectorAll('.moon');
const prevMoonButt = document.querySelector('.prev-moon-btn');
const nextMoonButt = document.querySelector('.next-moon-btn');

const changeBG_White_PrevMoonButt = () => {
    prevMoonButt.style.backgroundColor = 'aliceBlue';
}
const changeBG_Transparent_PrevMoonButt = () => {
    prevMoonButt.style.backgroundColor = 'rgba(0, 0, 0, .5)';
}
const changeBG_White_NextMoonButt = () => {
    nextMoonButt.style.backgroundColor = 'aliceBlue';
}
const changeBG_Transparent_NextMoonButt = () => {
    nextMoonButt.style.backgroundColor = 'rgba(0, 0, 0, .5)';
}

let counter0 = 0;
let counter1 = 1;
let counter2 = 2;
let solarSystem = {
    inMotion: false,
}

const set_InMotion_Truthy = () => {
    solarSystem.inMotion = true;
}

const orbit_Clockwise = () => {
    set_InMotion_Truthy();

    counter0 += 1;
    counter1 += 1;
    counter2 += 1;
    setTimeout(
        moons.forEach((moon, i) => {
            if (i == 0) i = counter0;
            else if (i == 1) i = counter1;
            else if (i == 2) i = counter2;
            else i = i;
            let rotation = 360 / 3 * i;
            moon.style.transform =
             `translate(-50%, -110%) 
             rotateZ(${rotation}deg)`
        })
    )

}

const orbit_Counterclockwise = () => {
    set_InMotion_Truthy();

    counter0 -= 1;
    counter1 -= 1;
    counter2 -= 1;
    moons.forEach((moon, i) => {
        if (i == 0) i = counter0;
        else if (i == 1) i = counter1;
        else if (i == 2) i = counter2;
        else i = i;
        let rotation = 360 / 3 * i;
        moon.style.transform =
         `translate(-50%, -110%) 
         rotateZ(${rotation}deg)`
    })
}

moonOptions = {
    threshold: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1],
}

for (let i = 0; i <= 1.0; i += 0.01) {
    moonOptions.threshold.push(i);
  }

const seho_Moon_Observer = new IntersectionObserver(entries => {
    let visibilityPercentage = Math.floor(entries[0].intersectionRatio * 100);
    sehoMoon.dataset.visibilityPercentage = visibilityPercentage;
}, moonOptions)
seho_Moon_Observer.observe(sehoMoon)

const mj_Moon_Observer = new IntersectionObserver(entries => {
    let visibilityPercentage = Math.floor(entries[0].intersectionRatio * 100);
    mjMoon.dataset.visibilityPercentage = visibilityPercentage;
}, moonOptions)
mj_Moon_Observer.observe(mjMoon)

const damon_Moon_Observer = new IntersectionObserver(entries => {
    let visibilityPercentage = Math.floor(entries[0].intersectionRatio * 100);
    damonMoon.dataset.visibilityPercentage = visibilityPercentage;
}, moonOptions)
damon_Moon_Observer.observe(damonMoon)

const handle_Moon_And_PrevMoonButt = () => {
    changeBG_White_PrevMoonButt();
    orbit_Counterclockwise();
}

const handle_Moon_And_NextMoonButt = () => {
    changeBG_White_NextMoonButt();
    orbit_Clockwise();
}

prevMoonButt.addEventListener('touchstart', handle_Moon_And_PrevMoonButt);
prevMoonButt.addEventListener('touchend', changeBG_Transparent_PrevMoonButt);
nextMoonButt.addEventListener('touchstart', handle_Moon_And_NextMoonButt);
nextMoonButt.addEventListener('touchend', changeBG_Transparent_NextMoonButt);

prevMoonButt.addEventListener('mousedown', handle_Moon_And_PrevMoonButt);
prevMoonButt.addEventListener('mouseup', changeBG_Transparent_PrevMoonButt);
nextMoonButt.addEventListener('mousedown', handle_Moon_And_NextMoonButt);
nextMoonButt.addEventListener('mouseup', changeBG_Transparent_NextMoonButt);
