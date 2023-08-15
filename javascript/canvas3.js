/**@type {HTMLCanvasElement}*/




import { img1, img2, img3, img4, img5 } from "./barberPage.js";

const cnvs3 = document.getElementById("cnvs3");
const ctx3 = cnvs3.getContext("2d");
let cnvs3Container = document.querySelector('.cnvs3-container');
let barberListContainer = document.querySelector('.barber-list-container');
// console.log(cnvs3Container.style);

let particleText = 'Select A Barber'



window.onload = function () {
    resizeCanvasWidth3();
    resizeCanvasHeight3();
    effect.resize(cnvs3.width, cnvs3.height)
    effect.wrapText(particleText)
}

window.onresize = function () {
    resizeCanvasWidth3();
    resizeCanvasHeight3();
    effect.resize(cnvs3.width, cnvs3.height)
    effect.wrapText(particleText)

}

const resizeCanvasWidth3 = () => {
    if (window.innerWidth > 475) {
        cnvs3.width = window.innerWidth * .45;
    }
    if (window.innerWidth <= 475) {
        cnvs3.width = window.innerWidth * .8;
    }

    
}
const resizeCanvasHeight3 = () => {
    cnvs3.height = window.innerHeight *.5;
}










const mayboColors = [
    'rgba(4, 25, 27, 1)',
    'rgba(151, 161, 145, 1)',
    'rgba(254, 195, 135, 1)',
    'rgba(196, 71, 45, 1)',
    'rgba(245, 172, 157, 12)'
]
const christinaColors = [
    'rgba(185, 225, 116, 1)',
    'rgba(91, 172, 122, 1)',
    'rgba(178, 97, 51, 1)',
    'rgba(233, 211, 175, 1)',
    'rgba(138, 62, 56, 1)'
]

const tenin1Colors = [
    'rgba(240, 159, 79, 1)',
    'rgba(142, 163, 184, 1)',
    'rgba(255, 153, 77, 1)',
    'rgba(228, 190, 160, 1)',
    'rgba(124, 134, 142, 1)'
]

const tenin2Colors = [
    'rgba(125, 24, 25, 1)',
    'rgba(46, 22, 23, 1)',
    'rgba(70, 77, 70, 1)',
    'rgba(207, 189, 186, 1)',
    'rgba(152, 105, 78, 1)'
]

const tenin3Colors = [
    'rgba(3, 40, 48, 1)',
    'rgba(93, 93, 110, 1)',
    'rgba(155, 146, 148, 1)',
    'rgba(45, 27, 27, 1)',
    'rgba(1, 138, 128, 1)'
]

class Particle1 {
    constructor() {
        this.x = cnvs3.width * .5;
        this.y = cnvs3.height * .5;
        this.radius = Math.random() * 3 + 1;
        this.fillStyle = "purple";
        this.radians = Math.random() * (Math.PI * 2);
        this.velocity = .02;
        this.startingPoint = 0;
        this.distanceFromCenter = Math.floor(Math.random() * (150 - 50 + 1) + 50); // rndmNumber between 50 and 100
        // this.color = undefined;
        this.colorNumber = Math.floor(Math.random() * 5);
        // initialized during instantiation
        // updated inside draw() method
        this.chooseColor = function () {
            if (img1.classList.contains("barber-img-active")) {
                switch (this.colorNumber) {
                    case 0:
                        return mayboColors[0];
                        break;
                    case 1:
                        return mayboColors[1];
                        break;
                    case 2:
                        return mayboColors[2];
                        break;
                    case 3:
                        return mayboColors[3];
                        break;
                    case 4:
                        return mayboColors[4];
                        break;
                    default:
                        console.log('didnt match cases 0-4');
                }
            }

            if (img2.classList.contains("barber-img-active")) {
                switch (this.colorNumber) {
                    case 0:
                        return christinaColors[0];
                        break;
                    case 1:
                        return christinaColors[1];
                        break;
                    case 2:
                        return christinaColors[2];
                        break;
                    case 3:
                        return christinaColors[3];
                        break;
                    case 4:
                        return christinaColors[4];
                        break;
                    default:
                        console.log('didnt match cases 0-4');
                }
            }

            if (img3.classList.contains("barber-img-active")) {
                switch (this.colorNumber) {
                    case 0:
                        return tenin1Colors[0];
                        break;
                    case 1:
                        return tenin1Colors[1];
                        break;
                    case 2:
                        return tenin1Colors[2];
                        break;
                    case 3:
                        return tenin1Colors[3];
                        break;
                    case 4:
                        return tenin1Colors[4];
                        break;
                    default:
                        console.log('didnt match cases 0-4');
                }
            }

            if (img4.classList.contains("barber-img-active")) {
                switch (this.colorNumber) {
                    case 0:
                        return tenin2Colors[0];
                        break;
                    case 1:
                        return tenin2Colors[1];
                        break;
                    case 2:
                        return tenin2Colors[2];
                        break;
                    case 3:
                        return tenin2Colors[3];
                        break;
                    case 4:
                        return tenin2Colors[4];
                        break;
                    default:
                        console.log('didnt match cases 0-4');
                }
            }

            if (img5.classList.contains("barber-img-active")) {
                switch (this.colorNumber) {
                    case 0:
                        return tenin3Colors[0];
                        break;
                    case 1:
                        return tenin3Colors[1];
                        break;
                    case 2:
                        return tenin3Colors[2];
                        break;
                    case 3:
                        return tenin3Colors[3];
                        break;
                    case 4:
                        return tenin3Colors[4];
                        break;
                    default:
                        console.log('didnt match cases 0-4');
                }
            }

        }
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs3.width * .5;
            let yCenter = cnvs3.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();

    }
    draw(lastPoint) {
        // arc
        // ctx3.fillStyle = this.fillStyle;
        // ctx3.beginPath();
        // ctx3.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        // ctx3.fill();
        // ctx3.closePath();

        // lines from prev to current
        ctx3.beginPath();
        ctx3.strokeStyle = this.chooseColor();
        ctx3.lineWidth = this.radius;
        ctx3.moveTo(lastPoint.x, lastPoint.y);
        ctx3.lineTo(this.x, this.y);
        ctx3.stroke();
        ctx3.closePath();
    }
}


let particles1 = []
for (let i = 0; i < 200; i++) {
    particles1.push(new Particle1());
}

const displayLargeCircle = () => {
    particles1.forEach(particle1 => {
        particle1.update();
    });
}

class Particle2 extends Particle1 {
    constructor () {
        super();
        this.radius = Math.random() * 1 + 1;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 50 + 1) + 50); // rndmNumber between 50 and 100
    }
}

let particles2 = []
for (let i = 0; i < 200; i++) {
    particles2.push(new Particle2());
}

const displayMediumCircle = () => {
    particles2.forEach(particle2 => {
        particle2.update();
    });
}

class Particle3 extends Particle1 {
    constructor () {
        super();
        this.radius = Math.random() * 1 + 1;
        this.distanceFromCenter = Math.floor(Math.random() * (50 - 25 + 1) + 25); // rndmNumber between 50 and 100
    }
}

let particles3 = []
for (let i = 0; i < 200; i++) {
    particles3.push(new Particle3());
}

const displaySmallCircle = () => {
    particles3.forEach(particle3 => {
        particle3.update();
    });
}







const displayCircles = () => {

        ctx3.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx3.fillRect(0, 0, cnvs3.width, cnvs3.height);

        // same height conditions
        if (window.innerHeight > 660 && window.innerWidth > 750) {
            displayLargeCircle();
        }
        if (window.innerHeight > 660 && window.innerWidth < 750 && window.innerWidth > 500) {
            displayMediumCircle();
        }
        if (window.innerHeight > 660 && window.innerWidth <= 500) {
            displaySmallCircle();
        }
    
        //same height conditions
        if (window.innerHeight <= 660 && window.innerHeight > 500 && window.innerWidth > 750) {
            displayMediumCircle();
        }
        if (window.innerHeight <= 660 && window.innerHeight > 500 && window.innerWidth <= 750 && window.innerWidth > 600) {
            displayMediumCircle();
        }
        if (window.innerHeight <= 660 && window.innerHeight > 500 && window.innerWidth <= 600) {
            displaySmallCircle();
        }
    
        // same height conditions
        if (window.innerHeight <= 500) {
            displaySmallCircle();
        }
}













// TEXT
class TextParticle {
    constructor (effect, x, y, color) {
        this.effect = effect;
        this.x = Math.random() * this.effect.canvasWidth;
        this.y = this.effect.canvasHeight;
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = Math.random() * 0.6 * + 0.15;       // number between .15 and (.6 + .15)
        this.ease = Math.random() * 0.1 + 0.03;    // was .005
    }
    draw() {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy; // cut out Math.sqrt() and added large value for mouse.radius because sqrt is an expensive operation since I'm not squar rooting the distance value
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
        }
        // if ease is not used, the particle snaps back in place in one frame so it must be multiplied by a decimal to get an easing effect
        // simple push
        // this.x += (this.vx) + (this.originX - this.x) * this.ease; 
        // this.y += (this.vy) + (this.originY - this.y) * this.ease;

        // push and return
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease; 
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }
}

class Effect {
    constructor (context, canvasWidth, canvasHeight) {
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.textX = this.canvasWidth * .5;
        this.textY = this.canvasHeight * .5;
        this.fontSize = 100;
        this.lineHeight = this.fontSize * 0.8;
        this.maxTextWidth = this.canvasWidth * 0.8;
        // 44min
        this.verticleOffset = 0;

        // particle text
        this.particles = [];
        this.gap = 3;
        this.mouse = {
            radius: 30000, // was 20000
            x: 0,
            y: 0,
        }
        
        window.addEventListener('mousemove', (e) => {

            let rect = cnvs3.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

    }
    wrapText(text) {
        // let x0 = this.canvasWidth * .5;
        // let y0 = this.canvasHeight * .5;
        // let r0 = 100;
        // let x1 = x0;
        // let y1 = y0
        // let r1 = r0 * 2;
        // const gradient = this.context.createRadialGradient(x0, y0, r0, x1, y1, r1);
        // gradient.addColorStop(0, 'aqua');
        // gradient.addColorStop(0.5, 'red');
        // this.context.fillStyle = gradient;
        this.context.fillStyle = 'aliceBlue'
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle'
        this.context.lineWidth = 3;
        this.context.strokeStyle = 'aliceBlue';
        this.context.font = this.fontSize + 'px Helvetica';



        const adjustY = () => {
            if (window.innerWidth > 850) {
                this.verticleOffset = 0;
                this.fontSize = 100;
                this.lineHeight = this.fontSize * 0.8;
            } else if (window.innerWidth <= 850 && window.innerWidth > 600) {
                this.verticleOffset = 0;
                this.fontSize = 70;
                this.lineHeight = this.fontSize * 0.8;
            } else if (window.innerWidth <= 600 && window.innerWidth > 475) {
                this.verticleOffset = -10;
                this.fontSize = 50;
                this.lineHeight = this.fontSize * 0.8;
            } else if (window.innerWidth <= 475 && window.innerWidth > 430) {
                this.verticleOffset = -40;
                this.fontSize = 100;
                this.lineHeight = this.fontSize * 0.8;
            } else if (window.innerWidth <= 430 && window.innerWidth > 375) {
                this.verticleOffset = 0;
                this.fontSize = 80;
                this.lineHeight = this.fontSize * 0.8;
            } else {
                this.verticleOffset = -45;
                this.fontSize = 80;
                this.lineHeight = this.fontSize * 0.8;
            }
        }
        adjustY();

        // rect around text
        // this.context.strokeStyle = 'aliceBlue'
        // this.context.strokeRect(0, 0, this.canvasWidth, this.canvasHeight);
        // 38.57 timestamp

        // break multiline text
        let linesArray = [];
        let words = text.split(' ');
        let lineCounter = 0;
        let line = '';
        for (let i=0; i<words.length; i++) {
            let testLine = line + words[i] + ' ';
            if (this.context.measureText(testLine).width > this.maxTextWidth) {
                line = words[i] + ' ';
                lineCounter++;
            } else {
                line = testLine;
            }
            linesArray[lineCounter] = line;
        }
        let textHeight = this.lineHeight * lineCounter;
        this.textY = this.canvasHeight * .5 - textHeight * .5 + this.verticleOffset;
        linesArray.forEach((el, index) => {
            this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
            // this.context.strokeText(el, this.textX, this.textY + (index * this.lineHeight));
        })

        this.convertToParticles();




    }
    convertToParticles() {
        this.particles = [];
        const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // might need to change to ctx3.fillRect(0, 0, cnvs3.width, cnvs3.height) or don't change at all cuzz fillRect is being called inside the animation loop..... although its supposed to be used to clear the text behind the particles and only called once since wrap text is called outside RAF

        for (let y=0; y<this.canvasHeight; y+= this.gap) {
            for (let x=0; x<this.canvasWidth; x+=this.gap) {
                const index = (y * this.canvasWidth + x) * 4;        // 4x because each index represents either R,B,G, or A
                const alpha = pixels[index + 3];
                if (alpha > 0) {
                    const red = pixels[index];
                    const green = pixels[index + 1]
                    const blue = pixels[index + 2]
                    const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                    this.particles.push(new TextParticle(this, x, y, color));       // 'this' refers to effect here
                }
            }
        }
        // console.log(this.particles);
    }
    render() {
        this.particles.forEach(particle => {
            particle.update();
            particle.draw();
        })
    }
    resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.textX = this.canvasWidth * .5;
        this.textY = this.canvasHeight * .5;
        this.maxTextWidth = this.canvasWidth * .8;
    }
}

let effect = new Effect(ctx3, cnvs3.width, cnvs3.height);
effect.wrapText(particleText);
// effect.render();



function animate() {


    if (
        img1.classList.contains("barber-img-active") ||
        img2.classList.contains("barber-img-active") ||
        img3.classList.contains("barber-img-active") ||
        img4.classList.contains("barber-img-active") ||
        img5.classList.contains("barber-img-active")
    ) {
        displayCircles();
    } else {
        ctx3.clearRect(0, 0, cnvs3.width, cnvs3.height);
        effect.render();

    }








    requestAnimationFrame(animate);
}
animate();


export {cnvs3};





