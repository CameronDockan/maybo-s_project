/**@type {HTMLCanvasElement}*/

const cnvs7 = document.getElementById("cnvs7");
const ctx7 = cnvs7.getContext("2d");
cnvs7.width = window.innerWidth * .7;
cnvs7.height = 250;
let gravity7 = .15;
let gameFrame7 = 0;

window.onload = function () {
    resizeCanvasWidth7();
    displayOrNot7();
}

const resizeCanvasWidth7 = () => {
    cnvs7.width = window.innerWidth * .7;
}

window.onresize = function () {
    resizeCanvasWidth7();
    displayOrNot7();
}


const displayOrNot7 = () => {
    if (window.innerWidth <= 500) cnvs7.style.display = "block";
    else cnvs7.style.display = "none";
}




// figma images exported at .2X

const mayboMidJourney7 = new Image();
mayboMidJourney7.src = "../canvas-images/Maybo-midjourney.png"

const buttonRedIMG7 = new Image();
buttonRedIMG7.src = "../canvas-images/button-red.png"

const buttonGrayIMG7 = new Image();
buttonGrayIMG7.src = "../canvas-images/button-gray.png"

const poofSprite7 = new Image();
poofSprite7.src = "../canvas-images/poof.png"

const clippersIMG7 = new Image();
clippersIMG7.src = "../canvas-images/clippers.png"

class MayboMidSmallest7 {
    constructor () {
        this.w = 512;
        this.h = 512;
        this.x = 0 - 25;
        this.y = cnvs7.height - this.h *.80;
        this.frameX = 0;
        this.frameY = 0;
        this.moveArm = false;
        this.pushButton = true;
    }

    draw () {
        ctx7.save();
        ctx7.scale(.25,.25)
        ctx7.drawImage(mayboMidJourney7, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx7.restore();
    }
    
    update () {

        const triggerArmMovement = () => {
            if (peep1Smallest7.inHaircutZone && buttonGraySmallest7.readyToPress) this.moveArm = true;
        }
        triggerArmMovement();

        const moveArm = () => {
            if (gameFrame7 % 10 === 0) {
                if (this.moveArm && this.frameY < 5 && !buttonGraySmallest7.activate) this.frameY++;
                else this.moveArm = false, this.frameY = 0;
            }
        }
        moveArm();

        const pushButton = () => {
            if (this.frameY === 4) buttonGraySmallest7.activate = true;
        }
        pushButton();
    }
}

const mayboMidSmallest7 = new MayboMidSmallest7();

class ButtonSmallest7 {
    constructor () {
        this.w = 100;
        this.h = 100;
        this.x = 0;
        this.y = -100;
        this.lowestPoint = cnvs7.height - 200;
        this.frameX = 0;
        this.frameY = 0;
        this.activate = false;
        this.lightOn = false;
        this.readyToPress = false;
        this.dropSpeed = 10;
        this.riseSpeed = 10;
    }
    draw () {
        ctx7.save();
        ctx7.scale(.25,.25);
        ctx7.drawImage(buttonGrayIMG7, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx7.restore();
    }
    update() {
        const drop = () => {
            if (peep1Smallest7.inHaircutZone && this.y < this.lowestPoint) this.y += this.dropSpeed;
        }
        drop();

        const rise = () => {
            if (!peep1Smallest7.inHaircutZone && this.y >= -100) this.y -= this.riseSpeed;
        }
        rise();

        const readyToPress = () => {
            if (this.y >= this.lowestPoint) this.readyToPress = true;
        }
        readyToPress();

        const lightUp = () => {
            if (gameFrame7 % 10 === 0) {
                if (this.activate && this.frameY < 4) this.frameY++;
                else if (this.activate && this.frameY >= 4) this.lightOn = true;
            }
        }
        lightUp();

        const persistLight = () => {
            if (this.lightOn) this.frameY = 4, mayboMidSmallest7.moveArm = false;
        }
        persistLight();

    }
}

const buttonGraySmallest7 = new ButtonSmallest7();

class HaircutZoneSmallest7 {
    constructor () {
        this.x = 470;
        this.y = 0;
        this.w = 20;
        this.h = cnvs7.height;
    }
    draw () {
        const drawHaircutZone = () => {
            ctx7.save();
            ctx7.fillStyle = "rgba(50, 200, 50, .5)"
            ctx7.fillRect(this.x, this.y, this.w, this.h);
            ctx7.restore();
        }
        drawHaircutZone();
    }
}

const zone1Smallest7 = new HaircutZoneSmallest7();

class ClippersSmallest7 {
    constructor () {
        this.w = 250;
        this.h = 250;
        this.x = 0 - this.w;
        this.y= 0;
        this.t = 0;
        this.speed = .02;
        this.touchaku = false;
        this.disappear = false;
    }

    draw () {
        ctx7.save();
        ctx7.scale(.25,.25);
        ctx7.drawImage(clippersIMG7, this.x, this.y, this.w, this.h);
        ctx7.restore();

    }

    update () {
        const clippersBezierMovement = () => {
            let [p0, p1, p2, p3] = clippersBezierPointsSmallest;
            //calculate the coefficient based on where the clippers currently are in the animation
        
            let cx = 3 * (p1.x -p0.x);
            let bx = 3 * (p2.x -p1.x) - cx;
            let ax = p3.x - p0.x - cx - bx;
        
            let cy = 3 * (p1.y - p0.y);
            let by = 3 * (p2.y - p1.y) - cy;
            let ay = p3.y - p0.y - cy - by;
        
            let t = this.t;
        
            this.t += this.speed;
        
            // calculate new X and Y values of clippers
            let xt = ax*(t*t*t) + bx*(t*t) + cx*t + p0.x;
            let yt = ay*(t*t*t) +  by*(t*t) + cy*t + p0.y;
        
            if (this.t > 1) this.t = 1;
        
            this.x = xt;
            this.y = yt;

            const triggerTouchaku = () => {
                if (this.t >= 1) this.touchaku = true;
            }
            triggerTouchaku();

            const triggerDisappear = () => {
                if (this.touchaku) this.disappear = true;
            }
            triggerDisappear();

        }
        if (buttonGraySmallest7.activate === true) clippersBezierMovement();

    }
}

const clippers1Smallest7 = new ClippersSmallest7();

class CordSmallest7 {
    constructor() {
        this.x1 = 50;
        this.y1 = 0;
        this.x2 = 46;
        // this.y2 = -100; //150;
        this.cp1x = 0;
        this.cp1y = 100;
        this.cp2x = 100;
        this.cp2y = 100;
        this.lineWidth = 2;
        this.lineCap = "round";
        this.lineJoin = "round";
        this.strokeStyle = "blue";
    }
    draw () {
        ctx7.save();
        ctx7.scale(.25,.25);
        ctx7.lineWidth = this.lineWidth;
        ctx7.strokeStyle = this.strokeStyle;
        ctx7.beginPath();
        ctx7.moveTo(this.x1, this.y1);
        ctx7.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x2, buttonGraySmallest7.y + 25);
        ctx7.stroke();
        ctx7.restore();
    }
}
//instantiation
const cord1Smallest7 = new CordSmallest7();

class PoofSmallest7 {
    constructor () {
        this.w = 200;
        this.h = 179;
        this.x = 450;
        this.y = 45;
        this.frameX = 0;
        this.frameY = 0;
        this.disappear = false;
    }
    draw () {
        ctx7.save();
        ctx7.scale(.25,.25);
        ctx7.drawImage(poofSprite7, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx7.restore();
    }
    update () {
        const poofAnimation = () => {
            if (gameFrame7 % 10 === 0 && clippers1Smallest7.touchaku) {
                if (this.frameX < 5) this.frameX++;
                else if (clippers1Smallest7.touchaku && this.frameX >= 5) {
                    this.disappear = true;
                    this.frameX = 0;
                    clippers1Smallest7.disappear = true;
                }
            }
        }
        poofAnimation();
    }
}

const poof1Smallest7 = new PoofSmallest7();

class PeepSmallest7 {
    constructor () {
        this.w = 328;
        this.h = 527;
        this.x = cnvs7.width * 4 - this.w;
        this.y = cnvs7.height - this.h + 100;
        this.dx = 0;
        this.dy = -1.2;
        this.walkSpeed = 3 * 3;
        this.p1 = new Image();
        this.p1.src = "../canvas-images/peep1.png";
        this.p2 = new Image();
        this.p2.src = "../canvas-images/peep2.png";
        this.p3 = new Image();
        this.p3.src = "../canvas-images/peep3.png";
        this.p4 = new Image();
        this.p4.src = "../canvas-images/peep4.png";
        this.p5 = new Image();
        this.p5.src = "../canvas-images/peep5.png";
        this.p6 = new Image();
        this.p6.src = "../canvas-images/peep6.png";
        this.orderNumber = 0;
        this.hitBox = true;
        this.hitBoxX = this.x + 80;
        this.hitBoxY = this.y
        this.hitBoxW = 165;
        this.hitBoxH = 200;
        this.fillStyle = "rgba(50,50,200, .5)"
        this.frameX = 0;
        this.frameY = 0;
        this.moveRight= false;
        this.moveLeft = true;
        this.hairCut = false;
        this.walk = true;
        this.inHaircutZone = false;
        this.goHome = false;
        this.disappear = false;
        this.shortWait = 0;
    }
    draw () {
        const drawPeep = () => {
            if (this.orderNumber === 0) {
                ctx7.save();
                ctx7.scale(.25,.25);
                ctx7.drawImage(this.p1, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx7.restore();
            }
            if (this.orderNumber === 1) {
                ctx7.save();
                ctx7.scale(.25,.25);
                ctx7.drawImage(this.p2, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx7.restore();
            }
            if (this.orderNumber === 2) {
                ctx7.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p3, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 3) {
                ctx7.save();
                ctx7.scale(.25,.25);
                ctx7.drawImage(this.p4, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx7.restore();
            }
            if (this.orderNumber === 4) {
                ctx7.save();
                ctx7.scale(.25,.25);
                ctx7.drawImage(this.p5, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx7.restore();
            }
            if (this.orderNumber === 5) {
                ctx7.save();
                ctx7.scale(.25,.25);
                ctx7.drawImage(this.p6, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx7.restore();
            }
        }
        drawPeep();
        
        const drawHitBox = () => {
            if (this.hitbox = true) {
                ctx7.save();
                ctx7.scale(.25,.25);
                ctx7.fillStyle = this.fillStyle;
                ctx7.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxW, this.hitBoxH);
                ctx7.restore();
            }
        }
        // drawHitBox();

    }
    update () {
        const bodyDirection = () => {
            if (this.moveRight) this.frameX = 1;
            else if (this.moveLeft) this.frameX = 0;
        }
        bodyDirection();

        const touchakuTriggersHaircut = () => {
            if (clippers1Smallest7.touchaku) this.hairCut = true;
        }
        touchakuTriggersHaircut();

        const changeHair = () => {
            if (this.hairCut) this.frameY = 1;
            else if(!this.hairCut) this.frameY = 0;
        }
        changeHair();

        const peepMovement = () => {
            // up down
            if (this.walk === true) {
            this.dy += gravity7;
            this.y += this.dy;
            this.hitBoxY += this.dy;
            }
            if(this.walk === true && this.y > (cnvs7.height - this.h + 100)) {
                this.dy = -1.2;
            }
            // right
            if (this.moveRight === true) {
                this.x += this.walkSpeed;
                this.hitBoxX += this.walkSpeed;
            }
            // left
            if (this.moveLeft === true) {
                this.x -= this.walkSpeed;
                this.hitBoxX -= this.walkSpeed
            }
        }
        peepMovement();

        const stopWalking = () => {
            if (this.inHaircutZone) this.walk = false, this.moveLeft = false, this.moveRight = false;
        }
        stopWalking();

        const peep_HaircutZoneCollisions = () => {

            let x1 = this.hitBoxX;
            let y1 = this.hitBoxY;
            let w1 = this.hitBoxW;
            let h1 = this.hitBoxH;

            let x2 = zone1Smallest7.x;
            let y2 = zone1Smallest7.y;
            let w2 = zone1Smallest7.w;
            let h2 = zone1Smallest7.h;

            if (x1 > x2 + w2 ||
                x1 + w1 < x2 ||
                y1 > y2 + h2 ||
                y1 + h1 < y2) {
                    this.inHaircutZone = false;
            } else {
                    this.inHaircutZone = true;
            }

        }
        peep_HaircutZoneCollisions();

        const triggerGoHome = () => {

            if (this.hairCut) {
                this.shortWait++;
            }

            if (this.shortWait > 50) {
                this.goHome = true;
            }

        }
        triggerGoHome();

        const goHome = () => {
            if (this.goHome === true) {
                this.moveLeft = false;
                this.moveRight = true;
                this.walk = true;
            }
        }
        goHome();

        const resetOrderNumber = () => {
            if (peep1Smallest7.orderNumber > 5) peep1Smallest7.orderNumber = 0;
        }
        resetOrderNumber();

        const resetAll = () => {
            if (this.x > cnvs7.width * 4) {
                mayboMidSmallest7.w = 512;
                mayboMidSmallest7.h = 512;
                mayboMidSmallest7.x = 0 - 25;
                mayboMidSmallest7.y = cnvs7.height - mayboMidSmallest7.h * .80;
                mayboMidSmallest7.frameX = 0;
                mayboMidSmallest7.frameY = 0;
                mayboMidSmallest7.moveArm = false;
                mayboMidSmallest7.pushButton = true;

                buttonGraySmallest7.w = 100;
                buttonGraySmallest7.h = 100;
                buttonGraySmallest7.x = 0;
                buttonGraySmallest7.y = -100;
                buttonGraySmallest7.lowestPoint = cnvs7.height - 200;
                buttonGraySmallest7.frameX = 0;
                buttonGraySmallest7.frameY = 0;
                buttonGraySmallest7.activate = false;
                buttonGraySmallest7.lightOn = false;
                buttonGraySmallest7.readyToPress = false;
                buttonGraySmallest7.dropSpeed = 10;
                buttonGraySmallest7.riseSpeed = 10;

                clippers1Smallest7.w = 250;
                clippers1Smallest7.h = 250;
                clippers1Smallest7.x = 0 - clippers1Smallest7.w;
                clippers1Smallest7.y= 0;
                clippers1Smallest7.t = 0;
                clippers1Smallest7.speed = .02;
                clippers1Smallest7.touchaku = false;
                clippers1Smallest7.disappear = false;

                poof1Smallest7.w = 200;
                poof1Smallest7.h = 179;
                poof1Smallest7.x = 450;
                poof1Smallest7.y = 45;
                poof1Smallest7.frameX = 0;
                poof1Smallest7.frameY = 0;
                poof1Smallest7.disappear = false;

                peep1Smallest7.w = 328;
                peep1Smallest7.h = 527;
                peep1Smallest7.x = cnvs7.width * 4 - peep1Smallest7.w;
                peep1Smallest7.y = cnvs7.height - peep1Smallest7.h + 100;
                peep1Smallest7.dx = 0;
                peep1Smallest7.dy = -1.2;
                peep1Smallest7.walkSpeed = 3 * 3;
                peep1Smallest7.p1 = new Image();
                peep1Smallest7.p1.src = "../canvas-images/peep1.png";
                peep1Smallest7.p2 = new Image();
                peep1Smallest7.p2.src = "../canvas-images/peep2.png";
                peep1Smallest7.orderNumber += 1;
                peep1Smallest7.hitBox = true;
                peep1Smallest7.hitBoxX = peep1Smallest7.x + 80;
                peep1Smallest7.hitBoxY = peep1Smallest7.y
                peep1Smallest7.hitBoxW = 165;
                peep1Smallest7.hitBoxH = 200;
                peep1Smallest7.fillStyle = "rgba(50,50,200, .5)"
                peep1Smallest7.frameX = 0;
                peep1Smallest7.frameY = 0;
                peep1Smallest7.moveRight= false;
                peep1Smallest7.moveLeft = true;
                peep1Smallest7.hairCut = false;
                peep1Smallest7.walk = true;
                peep1Smallest7.inHaircutZone = false;
                peep1Smallest7.goHome = false;
                peep1Smallest7.disappear = false;
                peep1Smallest7.shortWait = 0;

                clippersBezierPointsSmallest7 = [
                    {x:clippers1Smallest7.x, y:clippers1Smallest7.y},
                    {x:200, y:0 - 150},
                    {x:250, y:0 - 100},
                    {x: zone1Smallest7.x - 100, y: 0 - 40}
                ]
            }
        }
        resetAll();
    }
}

const peep1Smallest7 = new PeepSmallest7()

let clippersBezierPointsSmallest7 = [
    {x:clippers1Smallest7.x, y:clippers1Smallest7.y},
    {x:200, y:0 - 150},
    {x:250, y:0 - 100},
    {x: zone1Smallest7.x - 100, y: 0 - 40}
]

const [pZeroSmallest7, pOneSmallest7, pTwoSmallest7, pThreeSmallest7] = clippersBezierPointsSmallest7;

let showBezPointsSmallest7 = true;

const drawCroppingRectSmallest7 = () => {
    ctx7.save();
    ctx7.fillStyle = "rgba(101,99,95,1)";
    ctx7.fillRect(0, cnvs7.height * .25, cnvs7.width, cnvs7.height * .75);
    ctx7.restore();
}

const poleColors7 = [
    'rgba(11, 36, 78, 1)',
    'rgba(22, 57, 138, 1)',
    'rgba(106, 149, 213, 1)',
    'rgba(182, 179, 176, 1)',
    'rgba(7, 28, 47, 1)'
];

const IRLLogoColors7 = [
    'rgba(98, 161, 142, 1)',
    'rgba(132 211 199, 1)',
    'rgba(178, 217, 214, 1)',
    'rgba(93, 93, 82, 1)',
    'rgba(151, 136, 142, 1)'
];

function animate () {
    gameFrame7++;
    ctx7.clearRect(0, 0, cnvs7.width, cnvs7.height);

    if (window.innerWidth < 500) {
        // smallest animation with cropping rect
        mayboMidSmallest7.draw();
        mayboMidSmallest7.update();

        if (!peep1Smallest7.disappear) {
            peep1Smallest7.draw();
            peep1Smallest7.update();
        }

        buttonGraySmallest7.draw();
        buttonGraySmallest7.update();

        cord1Smallest7.draw();

        if (!clippers1Smallest7.disappear) clippers1Smallest7.draw();
        clippers1Smallest7.update();

        if (clippers1Smallest7.touchaku && !poof1Smallest7.disappear) poof1Smallest7.draw();
        poof1Smallest7.update();

        // zone1Smallest7.draw();

        drawCroppingRectSmallest7();

    }

    }

    requestAnimationFrame(animate);

animate();

