const fullscreen_IMG_Container = document.querySelector('.fullscreen-img-container')
const fullscreen_IMG = document.querySelector('.fullscreen-img')
const fullscreen_Ex_Butt = document.querySelector('.fullscreen-img-ex-button')
const grid_Div_IMG = document.querySelectorAll('.grid-div img')


// using named function because 'THIS' 
// refers to object where function was called
// arrow func's THIS would refer to window object
function goFullScreen () {
    fullscreen_IMG.src = this.src;

    fullscreen_IMG_Container.style.display = "flex";
    fullscreen_Ex_Butt.style.display = "block";

    let w = fullscreen_IMG.offsetWidth;
    let h = fullscreen_IMG.offsetHeight;

    if (w > h) {
        fullscreen_IMG.classList.add('wide-img');
        fullscreen_IMG.classList.remove('tall-img');
    } else {
        fullscreen_IMG.classList.add('tall-img');
        fullscreen_IMG.classList.remove('wide-img');
    }


}

function exitFullScreen () {
    fullscreen_IMG_Container.style.display = "none";
    fullscreen_Ex_Butt.style.display = "none";
}



grid_Div_IMG.forEach(element => {
    element.addEventListener('click', goFullScreen)
});

fullscreen_Ex_Butt.addEventListener('click', exitFullScreen)
