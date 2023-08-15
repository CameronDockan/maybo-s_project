import mainNavContainer from "./nav.js";

let barberIMGS = document.querySelectorAll('.barber-img');

let img1 = document.querySelector('#barber-img-1');
let img2 = document.querySelector('#barber-img-2');
let img3 = document.querySelector('#barber-img-3');
let img4 = document.querySelector('#barber-img-4');
let img5 = document.querySelector('#barber-img-5');

let item1 = document.querySelector('#barber-list-item-1');
let item2 = document.querySelector('#barber-list-item-2');
let item3 = document.querySelector('#barber-list-item-3');
let item4 = document.querySelector('#barber-list-item-4');
let item5 = document.querySelector('#barber-list-item-5');

let items = document.querySelectorAll(".barber-list-item");

let name1 = document.querySelector('#barber-list-item-p1');
let name2 = document.querySelector('#barber-list-item-p2');
let name3 = document.querySelector('#barber-list-item-p3');
let name4 = document.querySelector('#barber-list-item-p4');
let name5 = document.querySelector('#barber-list-item-p5');

let arrow1 = document.querySelector('#right-arrow-container1')
let arrow2 = document.querySelector('#right-arrow-container2')
let arrow3 = document.querySelector('#right-arrow-container3')
let arrow4 = document.querySelector('#right-arrow-container4')
let arrow5 = document.querySelector('#right-arrow-container5')

let book1 = document.querySelector('#book-appointment-p1');
let book2 = document.querySelector('#book-appointment-p2');
let book3 = document.querySelector('#book-appointment-p3');
let book4 = document.querySelector('#book-appointment-p4');
let book5 = document.querySelector('#book-appointment-p5');

const changeItemClass1 = () => {
    item1.classList.add("barber-list-item-active");
    item2.classList.remove("barber-list-item-active");
    item3.classList.remove("barber-list-item-active");
    item4.classList.remove("barber-list-item-active");
    item5.classList.remove("barber-list-item-active");

    book1.classList.add("book-active");
    book2.classList.remove("book-active");
    book3.classList.remove("book-active");
    book4.classList.remove("book-active");
    book5.classList.remove("book-active");

    arrow1.classList.add("arrow-active");
    arrow2.classList.remove("arrow-active");
    arrow3.classList.remove("arrow-active");
    arrow4.classList.remove("arrow-active");
    arrow5.classList.remove("arrow-active");
}
const changeItemClass2 = () => {
    item1.classList.remove("barber-list-item-active");
    item2.classList.add("barber-list-item-active");
    item3.classList.remove("barber-list-item-active");
    item4.classList.remove("barber-list-item-active");
    item5.classList.remove("barber-list-item-active");

    book1.classList.remove("book-active");
    book2.classList.add("book-active");
    book3.classList.remove("book-active");
    book4.classList.remove("book-active");
    book5.classList.remove("book-active");

    arrow1.classList.remove("arrow-active");
    arrow2.classList.add("arrow-active");
    arrow3.classList.remove("arrow-active");
    arrow4.classList.remove("arrow-active");
    arrow5.classList.remove("arrow-active");
}
const changeItemClass3 = () => {
    item1.classList.remove("barber-list-item-active");
    item2.classList.remove("barber-list-item-active");
    item3.classList.add("barber-list-item-active");
    item4.classList.remove("barber-list-item-active");
    item5.classList.remove("barber-list-item-active");

    book1.classList.remove("book-active");
    book2.classList.remove("book-active");
    book3.classList.add("book-active");
    book4.classList.remove("book-active");
    book5.classList.remove("book-active");

    arrow1.classList.remove("arrow-active");
    arrow2.classList.remove("arrow-active");
    arrow3.classList.add("arrow-active");
    arrow4.classList.remove("arrow-active");
    arrow5.classList.remove("arrow-active");
}
const changeItemClass4 = () => {
    item1.classList.remove("barber-list-item-active");
    item2.classList.remove("barber-list-item-active");
    item3.classList.remove("barber-list-item-active");
    item4.classList.add("barber-list-item-active");
    item5.classList.remove("barber-list-item-active");

    book1.classList.remove("book-active");
    book2.classList.remove("book-active");
    book3.classList.remove("book-active");
    book4.classList.add("book-active");
    book5.classList.remove("book-active");

    arrow1.classList.remove("arrow-active");
    arrow2.classList.remove("arrow-active");
    arrow3.classList.remove("arrow-active");
    arrow4.classList.add("arrow-active");
    arrow5.classList.remove("arrow-active");
}
const changeItemClass5 = () => {
    item1.classList.remove("barber-list-item-active");
    item2.classList.remove("barber-list-item-active");
    item3.classList.remove("barber-list-item-active");
    item4.classList.remove("barber-list-item-active");
    item5.classList.add("barber-list-item-active");

    book1.classList.remove("book-active");
    book2.classList.remove("book-active");
    book3.classList.remove("book-active");
    book4.classList.remove("book-active");
    book5.classList.add("book-active");

    arrow1.classList.remove("arrow-active");
    arrow2.classList.remove("arrow-active");
    arrow3.classList.remove("arrow-active");
    arrow4.classList.remove("arrow-active");
    arrow5.classList.add("arrow-active");
}

item1.addEventListener('click', changeItemClass1);
item2.addEventListener('click', changeItemClass2);
item3.addEventListener('click', changeItemClass3);
item4.addEventListener('click', changeItemClass4);
item5.addEventListener('click', changeItemClass5);


const changeImageClass1 = () => {
    img1.classList.add("barber-img-active");
    img2.classList.remove("barber-img-active");
    img3.classList.remove("barber-img-active");
    img4.classList.remove("barber-img-active");
    img5.classList.remove("barber-img-active");
}
const changeImageClass2 = () => {
    img1.classList.remove("barber-img-active");
    img2.classList.add("barber-img-active");
    img3.classList.remove("barber-img-active");
    img4.classList.remove("barber-img-active");
    img5.classList.remove("barber-img-active");
}
const changeImageClass3 = () => {
    img1.classList.remove("barber-img-active");
    img2.classList.remove("barber-img-active");
    img3.classList.add("barber-img-active");
    img4.classList.remove("barber-img-active");
    img5.classList.remove("barber-img-active");}
const changeImageClass4 = () => {
    img1.classList.remove("barber-img-active");
    img2.classList.remove("barber-img-active");
    img3.classList.remove("barber-img-active");
    img4.classList.add("barber-img-active");
    img5.classList.remove("barber-img-active");}
const changeImageClass5 = () => {
    img1.classList.remove("barber-img-active");
    img2.classList.remove("barber-img-active");
    img3.classList.remove("barber-img-active");
    img4.classList.remove("barber-img-active");
    img5.classList.add("barber-img-active");}

item1.addEventListener('mouseover', changeImageClass1);
item2.addEventListener('mouseover', changeImageClass2);
item3.addEventListener('mouseover', changeImageClass3);
item4.addEventListener('mouseover', changeImageClass4);
item5.addEventListener('mouseover', changeImageClass5);


const lowerListItemsZIndex = () => {
    if (mainNavContainer.classList.contains("main-nav-container-clicked")) {
        items.forEach(item => {
            item.style.zIndex = "-1";
        });
    } else {
        items.forEach(item => {
            item.style.zIndex = "1";
    })
    // console.log(mainNavContainer.zIndex)
    }
}
document.addEventListener('click', lowerListItemsZIndex);

export {img1, img2, img3, img4, img5};