/**@type {HTMLCanvasElement}*/

const cnvs = document.getElementById("cnvs");
const ctx = cnvs.getContext("2d");
cnvs.width = window.innerWidth * .7;
cnvs.height = 500;
cnvs.smallHeight = 250;
cnvs.smallestHeight = 125;
let gravity = .15;
let smallGravity = .30;
let gameFrame = 0;

// figma images exported at .2X

const mayboMidJourney = new Image();
mayboMidJourney.src = "../canvas-images/Maybo-midjourney.png"

const buttonRedIMG = new Image();
buttonRedIMG.src = "../canvas-images/button-red.png"

const buttonGrayIMG = new Image();
buttonGrayIMG.src = "../canvas-images/button-gray.png"

const poofSprite = new Image();
poofSprite.src = "../canvas-images/poof.png"

const clippersIMG = new Image();
clippersIMG.src = "../canvas-images/clippers.png"



class MayboMid {
    constructor () {
        this.w = 512;
        this.h = 512;
        this.x = 0 - 25;
        this.y = cnvs.height - this.h *.80;
        this.frameX = 0;
        this.frameY = 0;
        this.moveArm = false;
        this.pushButton = true;
    }

    draw () {
        ctx.drawImage(mayboMidJourney, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    
    update () {

        const triggerArmMovement = () => {
            if (peep1.inHaircutZone && buttonGray.readyToPress) this.moveArm = true;
        }
        triggerArmMovement();

        const moveArm = () => {
            if (gameFrame % 10 === 0) {
                if (this.moveArm && this.frameY < 5 && !buttonGray.activate) this.frameY++;
                else this.moveArm = false, this.frameY = 0;
            }
        }
        moveArm();

        const pushButton = () => {
            if (this.frameY === 4) buttonGray.activate = true;
        }
        pushButton();

        const changeX = () => {
            if (window.innerWidth < 500 && window.innerWidth > 385) mayboMid.x = -100;
            else if (window.innerWidth <= 385) mayboMid.x = -135;
            else mayboMid.x = -25;
        }
        changeX();
    }
}

const mayboMid = new MayboMid();

class MayboMidSmall {
    constructor () {
        this.w = 512;
        this.h = 512;
        this.x = 0 - 25;
        this.y = cnvs.smallHeight - 155;
        this.frameX = 0;
        this.frameY = 0;
        this.moveArm = false;
        this.pushButton = true;
    }

    draw () {
        ctx.save();
        ctx.scale(.5,.5)
        ctx.drawImage(mayboMidJourney, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    
    update () {

        const triggerArmMovement = () => {
            if (peep1Small.inHaircutZone && buttonGraySmall.readyToPress) this.moveArm = true;
        }
        triggerArmMovement();

        const moveArm = () => {
            if (gameFrame % 10 === 0) {
                if (this.moveArm && this.frameY < 5 && !buttonGraySmall.activate) this.frameY++;
                else this.moveArm = false, this.frameY = 0;
            }
        }
        moveArm();

        const pushButton = () => {
            if (this.frameY === 4) buttonGraySmall.activate = true;
        }
        pushButton();

        // const changeX = () => {
        //     if (window.innerWidth < 500 && window.innerWidth > 385) mayboMid.x = -100;
        //     else if (window.innerWidth <= 385) mayboMid.x = -135;
        //     else mayboMid.x = -25;
        // }
        // changeX();
    }
}

const mayboMidSmall = new MayboMidSmall();

class MayboMidSmallest {
    constructor () {
        this.w = 512;
        this.h = 512;
        this.x = 0 - 25;
        this.y = cnvs.smallestHeight - 30;
        this.frameX = 0;
        this.frameY = 0;
        this.moveArm = false;
        this.pushButton = true;
    }

    draw () {
        ctx.save();
        ctx.scale(.25,.25)
        ctx.drawImage(mayboMidJourney, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    
    update () {

        const triggerArmMovement = () => {
            if (peep1Smallest.inHaircutZone && buttonGraySmallest.readyToPress) this.moveArm = true;
        }
        triggerArmMovement();

        const moveArm = () => {
            if (gameFrame % 10 === 0) {
                if (this.moveArm && this.frameY < 5 && !buttonGraySmallest.activate) this.frameY++;
                else this.moveArm = false, this.frameY = 0;
            }
        }
        moveArm();

        const pushButton = () => {
            if (this.frameY === 4) buttonGraySmallest.activate = true;
        }
        pushButton();
    }
}

const mayboMidSmallest = new MayboMidSmallest();

class Button {
    constructor () {
        this.w = 100;
        this.h = 100;
        this.x = 0;
        this.y = -100;
        this.lowestPoint = cnvs.height - 200;
        this.frameX = 0;
        this.frameY = 0;
        this.activate = false;
        this.lightOn = false;
        this.readyToPress = false;
        this.dropSpeed = 10;
        this.riseSpeed = 10;
    }
    draw () {
        ctx.drawImage(buttonGrayIMG, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    update() {
        const drop = () => {
            if (peep1.inHaircutZone && this.y < this.lowestPoint) this.y += this.dropSpeed;
        }
        drop();

        const rise = () => {
            if (!peep1.inHaircutZone && this.y >= -100) this.y -= this.riseSpeed;
        }
        rise();

        const readyToPress = () => {
            if (this.y >= this.lowestPoint) this.readyToPress = true;
        }
        readyToPress();

        const lightUp = () => {
            if (gameFrame % 10 === 0) {
                if (this.activate && this.frameY < 4) this.frameY++;
                else if (this.activate && this.frameY >= 4) this.lightOn = true;
            }
        }
        lightUp();

        const persistLight = () => {
            if (this.lightOn) this.frameY = 4, mayboMid.moveArm = false;
        }
        persistLight();

    }
}

const buttonGray = new Button();

class ButtonSmall {
    constructor () {
        this.w = 100;
        this.h = 100;
        this.x = 0;
        this.y = -100;
        this.lowestPoint = cnvs.smallHeight + 40;
        this.frameX = 0;
        this.frameY = 0;
        this.activate = false;
        this.lightOn = false;
        this.readyToPress = false;
        this.dropSpeed = 10;
        this.riseSpeed = 10;
    }
    draw () {
        ctx.save();
        ctx.scale(.5,.5);
        ctx.drawImage(buttonGrayIMG, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    update() {
        const drop = () => {
            if (peep1Small.inHaircutZone && this.y < this.lowestPoint) this.y += this.dropSpeed;
        }
        drop();

        const rise = () => {
            if (!peep1Small.inHaircutZone && this.y >= -100) this.y -= this.riseSpeed;
        }
        rise();

        const readyToPress = () => {
            if (this.y >= this.lowestPoint) this.readyToPress = true;
        }
        readyToPress();

        const lightUp = () => {
            if (gameFrame % 10 === 0) {
                if (this.activate && this.frameY < 4) this.frameY++;
                else if (this.activate && this.frameY >= 4) this.lightOn = true;
            }
        }
        lightUp();

        const persistLight = () => {
            if (this.lightOn) this.frameY = 4, mayboMidSmall.moveArm = false;
        }
        persistLight();

    }
}

const buttonGraySmall = new ButtonSmall();

class ButtonSmallest {
    constructor () {
        this.w = 100;
        this.h = 100;
        this.x = 0;
        this.y = -100;
        this.lowestPoint = cnvs.smallestHeight + 160;
        this.frameX = 0;
        this.frameY = 0;
        this.activate = false;
        this.lightOn = false;
        this.readyToPress = false;
        this.dropSpeed = 10;
        this.riseSpeed = 10;
    }
    draw () {
        ctx.save();
        ctx.scale(.25,.25);
        ctx.drawImage(buttonGrayIMG, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    update() {
        const drop = () => {
            if (peep1Smallest.inHaircutZone && this.y < this.lowestPoint) this.y += this.dropSpeed;
        }
        drop();

        const rise = () => {
            if (!peep1Smallest.inHaircutZone && this.y >= -100) this.y -= this.riseSpeed;
        }
        rise();

        const readyToPress = () => {
            if (this.y >= this.lowestPoint) this.readyToPress = true;
        }
        readyToPress();

        const lightUp = () => {
            if (gameFrame % 10 === 0) {
                if (this.activate && this.frameY < 4) this.frameY++;
                else if (this.activate && this.frameY >= 4) this.lightOn = true;
            }
        }
        lightUp();

        const persistLight = () => {
            if (this.lightOn) this.frameY = 4, mayboMidSmallest.moveArm = false;
        }
        persistLight();

    }
}

const buttonGraySmallest = new ButtonSmallest();

class HaircutZone {
    constructor () {
        this.x = 470;
        this.y = 0;
        this.w = 20;
        this.h = cnvs.height;
    }
    draw () {
        const drawHaircutZone = () => {
            ctx.save();
            ctx.fillStyle = "rgba(50, 200, 50, .5)"
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.restore();
        }
        drawHaircutZone();
    }
}

const zone1 = new HaircutZone();

class HaircutZoneSmall {
    constructor () {
        this.x = 470;
        this.y = 0;
        this.w = 20;
        this.h = cnvs.height;
    }
    draw () {
        const drawHaircutZone = () => {
            ctx.save();
            ctx.fillStyle = "rgba(50, 200, 50, .5)"
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.restore();
        }
        drawHaircutZone();
    }
}

const zone1Small = new HaircutZoneSmall();

class HaircutZoneSmallest {
    constructor () {
        this.x = 470;
        this.y = 0;
        this.w = 20;
        this.h = cnvs.height;
    }
    draw () {
        const drawHaircutZone = () => {
            ctx.save();
            ctx.fillStyle = "rgba(50, 200, 50, .5)"
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.restore();
        }
        drawHaircutZone();
    }
}

const zone1Smallest = new HaircutZoneSmallest();

class Clippers {
    constructor () {
        this.w = 250;
        this.h = 250;
        this.x = 0 - this.w;
        this.y = 0;
        this.t = 0;
        this.speed = .02;
        this.touchaku = false;
        this.disappear = false;
    }

    draw () {
        ctx.drawImage(clippersIMG, this.x, this.y, this.w, this.h);
    }

    update () {
        const clippersBezierMovement = () => {
            let [p0, p1, p2, p3] = clippersBezierPoints;
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
        if (buttonGray.activate === true) clippersBezierMovement();

    }
}

const clippers1 = new Clippers();

class ClippersSmall {
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
        ctx.save();
        ctx.scale(.5,.5);
        ctx.drawImage(clippersIMG, this.x, this.y, this.w, this.h);
        ctx.restore();

    }

    update () {
        const clippersBezierMovement = () => {
            let [p0, p1, p2, p3] = clippersBezierPointsSmall;
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
        if (buttonGraySmall.activate === true) clippersBezierMovement();

    }
}

const clippers1Small = new ClippersSmall();

class ClippersSmallest {
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
        ctx.save();
        ctx.scale(.25,.25);
        ctx.drawImage(clippersIMG, this.x, this.y, this.w, this.h);
        ctx.restore();

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
        if (buttonGraySmallest.activate === true) clippersBezierMovement();

    }
}

const clippers1Smallest = new ClippersSmallest();

class Cord {
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
        ctx.save();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x2, buttonGray.y + 25);
        ctx.stroke();
        ctx.restore();
    }
}
//instantiation
const cord1 = new Cord();

class CordSmall {
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
        ctx.save();
        ctx.scale(.5,.5);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x2, buttonGraySmall.y + 25);
        ctx.stroke();
        ctx.restore();
    }
}
//instantiation
const cord1Small = new CordSmall();

class CordSmallest {
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
        ctx.save();
        ctx.scale(.25,.25);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x2, buttonGraySmallest.y + 25);
        ctx.stroke();
        ctx.restore();
    }
}
//instantiation
const cord1Smallest = new CordSmallest();

class Poof {
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
        ctx.drawImage(poofSprite, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    update () {
        const poofAnimation = () => {
            if (gameFrame % 10 === 0 && clippers1.touchaku) {
                if (this.frameX < 5) this.frameX++;
                else if (clippers1.touchaku && this.frameX >= 5) {
                    this.disappear = true;
                    this.frameX = 0;
                    clippers1.disappear = true;
                }
            }
        }
        poofAnimation();
    }
}

const poof1 = new Poof();

class PoofSmall {
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
        ctx.save();
        ctx.scale(.5,.5);
        ctx.drawImage(poofSprite, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    update () {
        const poofAnimation = () => {
            if (gameFrame % 10 === 0 && clippers1Small.touchaku) {
                if (this.frameX < 5) this.frameX++;
                else if (clippers1Small.touchaku && this.frameX >= 5) {
                    this.disappear = true;
                    this.frameX = 0;
                    clippers1Small.disappear = true;
                }
            }
        }
        poofAnimation();
    }
}

const poof1Small = new PoofSmall();

class PoofSmallest {
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
        ctx.save();
        ctx.scale(.25,.25);
        ctx.drawImage(poofSprite, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    update () {
        const poofAnimation = () => {
            if (gameFrame % 10 === 0 && clippers1Smallest.touchaku) {
                if (this.frameX < 5) this.frameX++;
                else if (clippers1Smallest.touchaku && this.frameX >= 5) {
                    this.disappear = true;
                    this.frameX = 0;
                    clippers1Smallest.disappear = true;
                }
            }
        }
        poofAnimation();
    }
}

const poof1Smallest = new PoofSmallest();

class Peep {
    constructor () {
        this.w = 328;
        this.h = 527;
        this.x = cnvs.width - this.w * .5;
        this.y = cnvs.height - this.h + 100;
        this.dx = 0;
        this.dy = -1.2;
        this.walkSpeed = 3;
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
                ctx.drawImage(this.p1, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
            }
            if (this.orderNumber === 1) {
                ctx.drawImage(this.p2, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
            }
            if (this.orderNumber === 2) {
                ctx.drawImage(this.p3, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
            }
            if (this.orderNumber === 3) {
                ctx.drawImage(this.p4, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
            }
            if (this.orderNumber === 4) {
                ctx.drawImage(this.p5, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
            }
            if (this.orderNumber === 5) {
                ctx.drawImage(this.p6, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
            }
        }
        drawPeep();
        
        const drawHitBox = () => {
            if (this.hitbox = true) {
                ctx.save();
                ctx.fillStyle = this.fillStyle;
                ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxW, this.hitBoxH);
                ctx.restore();
            }
        }
        // drawx();

    }
    update () {
        const bodyDirection = () => {
            if (this.moveRight) this.frameX = 1;
            else if (this.moveLeft) this.frameX = 0;
        }
        bodyDirection();

        const touchakuTriggersHaircut = () => {
            if (clippers1.touchaku) this.hairCut = true;
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
            this.dy += gravity;
            this.y += this.dy;
            this.hitBoxY += this.dy;
            }
            if(this.walk === true && this.y > (cnvs.height - this.h + 100)) {
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

            let x2 = zone1.x;
            let y2 = zone1.y;
            let w2 = zone1.w;
            let h2 = zone1.h;

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
            if (peep1.orderNumber > 5) peep1.orderNumber = 0;
        }
        resetOrderNumber();

        const resetAll = () => {
            if (this.x > cnvs.width) {
                mayboMid.w = 512;
                mayboMid.h = 512;
                mayboMid.x = 0 - 25;
                mayboMid.y = cnvs.height - mayboMid.h * .80;
                mayboMid.frameX = 0;
                mayboMid.frameY = 0;
                mayboMid.moveArm = false;
                mayboMid.pushButton = true;

                buttonGray.w = 100;
                buttonGray.h = 100;
                buttonGray.x = 0;
                buttonGray.y = -100;
                buttonGray.lowestPoint = cnvs.height - 200;
                buttonGray.frameX = 0;
                buttonGray.frameY = 0;
                buttonGray.activate = false;
                buttonGray.lightOn = false;
                buttonGray.readyToPress = false;
                buttonGray.dropSpeed = 10;
                buttonGray.riseSpeed = 10;

                clippers1.w = 250;
                clippers1.h = 250;
                clippers1.x = 0 - clippers1.w;
                clippers1.y= 0;
                clippers1.t = 0;
                clippers1.speed = .02;
                clippers1.touchaku = false;
                clippers1.disappear = false;

                poof1.w = 200;
                poof1.h = 179;
                poof1.x = 450;
                poof1.y = 45;
                poof1.frameX = 0;
                poof1.frameY = 0;
                poof1.disappear = false;

                peep1.w = 328;
                peep1.h = 527;
                peep1.x = cnvs.width - peep1.w * .5;
                peep1.y = cnvs.height - peep1.h + 100;
                peep1.dx = 0;
                peep1.dy = -1.2;
                peep1.walkSpeed = 3;
                peep1.p1 = new Image();
                peep1.p1.src = "../canvas-images/peep1.png";
                peep1.p2 = new Image();
                peep1.p2.src = "../canvas-images/peep2.png";
                peep1.orderNumber += 1;
                peep1.hitBox = true;
                peep1.hitBoxX = peep1.x + 80;
                peep1.hitBoxY = peep1.y
                peep1.hitBoxW = 165;
                peep1.hitBoxH = 200;
                peep1.fillStyle = "rgba(50,50,200, .5)"
                peep1.frameX = 0;
                peep1.frameY = 0;
                peep1.moveRight= false;
                peep1.moveLeft = true;
                peep1.hairCut = false;
                peep1.walk = true;
                peep1.inHaircutZone = false;
                peep1.goHome = false;
                peep1.disappear = false;
                peep1.shortWait = 0;

                clippersBezierPoints = [
                    {x:clippers1.x, y:clippers1.y},
                    {x:200, y:0 - 150},
                    {x:250, y:0 - 100},
                    {x: zone1.x - 100, y: 0 - 40}
                ]
            }
        }
        resetAll();
    }
}

const peep1 = new Peep()

class PeepSmall {
    constructor () {
        this.w = 328;
        this.h = 527;
        this.x = cnvs.width * 2 - this.w;
        this.y = cnvs.smallHeight - this.h + 325;
        this.dx = 0;
        this.dy = -2.4;
        this.walkSpeed = 3 * 2;
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
                ctx.save();
                ctx.scale(.5,.5);
                ctx.drawImage(this.p1, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 1) {
                ctx.save();
                ctx.scale(.5,.5);
                ctx.drawImage(this.p2, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 2) {
                ctx.save();
                ctx.scale(.5,.5);
                ctx.drawImage(this.p3, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 3) {
                ctx.save();
                ctx.scale(.5,.5);
                ctx.drawImage(this.p4, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 4) {
                ctx.save();
                ctx.scale(.5,.5);
                ctx.drawImage(this.p5, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 5) {
                ctx.save();
                ctx.scale(.5,.5);
                ctx.drawImage(this.p6, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
        }
        drawPeep();
        
        const drawHitBox = () => {
            if (this.hitbox = true) {
                ctx.save();
                ctx.scale(.5,.5);
                ctx.fillStyle = this.fillStyle;
                ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxW, this.hitBoxH);
                ctx.restore();
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
            if (clippers1Small.touchaku) this.hairCut = true;
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
            this.dy += gravity;
            this.y += this.dy;
            this.hitBoxY += this.dy;
            }
            if(this.walk === true && this.y > (cnvs.smallHeight - this.h + 325)) {
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

            let x2 = zone1Small.x;
            let y2 = zone1Small.y;
            let w2 = zone1Small.w;
            let h2 = zone1Small.h;

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
            if (peep1Small.orderNumber > 5) peep1Small.orderNumber = 0;
        }
        resetOrderNumber();

        const resetAll = () => {
            if (this.x > cnvs.width *2) {
                mayboMidSmall.w = 512;
                mayboMidSmall.h = 512;
                mayboMidSmall.x = 0 - 25;
                mayboMidSmall.y = cnvs.smallHeight -155;
                mayboMidSmall.frameX = 0;
                mayboMidSmall.frameY = 0;
                mayboMidSmall.moveArm = false;
                mayboMidSmall.pushButton = true;

                buttonGraySmall.w = 100;
                buttonGraySmall.h = 100;
                buttonGraySmall.x = 0;
                buttonGraySmall.y = -100;
                buttonGraySmall.lowestPoint = cnvs.smallHeight + 40;
                buttonGraySmall.frameX = 0;
                buttonGraySmall.frameY = 0;
                buttonGraySmall.activate = false;
                buttonGraySmall.lightOn = false;
                buttonGraySmall.readyToPress = false;
                buttonGraySmall.dropSpeed = 10;
                buttonGraySmall.riseSpeed = 10;

                clippers1Small.w = 250;
                clippers1Small.h = 250;
                clippers1Small.x = 0 - clippers1Small.w;
                clippers1Small.y= 0;
                clippers1Small.t = 0;
                clippers1Small.speed = .02;
                clippers1Small.touchaku = false;
                clippers1Small.disappear = false;

                poof1Small.w = 200;
                poof1Small.h = 179;
                poof1Small.x = 450;
                poof1Small.y = 45;
                poof1Small.frameX = 0;
                poof1Small.frameY = 0;
                poof1Small.disappear = false;

                peep1Small.w = 328;
                peep1Small.h = 527;
                peep1Small.x = cnvs.width * 2 - peep1Small.w;
                peep1Small.y = cnvs.smallHeight - this.h + 325;
                peep1Small.dx = 0;
                peep1Small.dy = -1.2;
                peep1Small.walkSpeed = 3 * 2;
                peep1Small.p1 = new Image();
                peep1Small.p1.src = "../canvas-images/peep1.png";
                peep1Small.p2 = new Image();
                peep1Small.p2.src = "../canvas-images/peep2.png";
                peep1Small.orderNumber += 1;
                peep1Small.hitBox = true;
                peep1Small.hitBoxX = peep1Small.x + 80;
                peep1Small.hitBoxY = peep1Small.y
                peep1Small.hitBoxW = 165;
                peep1Small.hitBoxH = 200;
                peep1Small.fillStyle = "rgba(50,50,200, .5)"
                peep1Small.frameX = 0;
                peep1Small.frameY = 0;
                peep1Small.moveRight= false;
                peep1Small.moveLeft = true;
                peep1Small.hairCut = false;
                peep1Small.walk = true;
                peep1Small.inHaircutZone = false;
                peep1Small.goHome = false;
                peep1Small.disappear = false;
                peep1Small.shortWait = 0;

                clippersBezierPointsSmall = [
                    {x:clippers1Small.x, y:clippers1Small.y},
                    {x:200, y:0 - 150},
                    {x:250, y:0 - 100},
                    {x: zone1Small.x - 100, y: 0 - 40}
                ]
            }
        }
        resetAll();
    }
}

const peep1Small = new PeepSmall()

class PeepSmallest {
    constructor () {
        this.w = 328;
        this.h = 527;
        this.x = cnvs.width * 4 - this.w;
        this.y = cnvs.smallestHeight - 80;
        this.dx = 0;
        this.dy = -1.2;
        this.walkSpeed = 3 * 2;
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
                ctx.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p1, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 1) {
                ctx.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p2, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 2) {
                ctx.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p3, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 3) {
                ctx.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p4, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 4) {
                ctx.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p5, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            if (this.orderNumber === 5) {
                ctx.save();
                ctx.scale(.25,.25);
                ctx.drawImage(this.p6, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
        }
        drawPeep();
        
        const drawHitBox = () => {
            if (this.hitbox = true) {
                ctx.save();
                ctx.scale(.25,.25);
                ctx.fillStyle = this.fillStyle;
                ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxW, this.hitBoxH);
                ctx.restore();
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
            if (clippers1Smallest.touchaku) this.hairCut = true;
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
            this.dy += gravity;
            this.y += this.dy;
            this.hitBoxY += this.dy;
            }
            if(this.walk === true && this.y > (cnvs.smallestHeight - 80)) {
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

            let x2 = zone1Small.x;
            let y2 = zone1Small.y;
            let w2 = zone1Small.w;
            let h2 = zone1Small.h;

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
            if (peep1Smallest.orderNumber > 5) peep1Smallest.orderNumber = 0;
        }
        resetOrderNumber();

        const resetAll = () => {
            if (this.x > cnvs.width * 4) {
                mayboMidSmallest.w = 512;
                mayboMidSmallest.h = 512;
                mayboMidSmallest.x = 0 - 25;
                mayboMidSmallest.y = cnvs.smallestHeight - 30;
                mayboMidSmallest.frameX = 0;
                mayboMidSmallest.frameY = 0;
                mayboMidSmallest.moveArm = false;
                mayboMidSmallest.pushButton = true;

                buttonGraySmallest.w = 100;
                buttonGraySmallest.h = 100;
                buttonGraySmallest.x = 0;
                buttonGraySmallest.y = -100;
                buttonGraySmallest.lowestPoint = cnvs.smallestHeight + 160;
                buttonGraySmallest.frameX = 0;
                buttonGraySmallest.frameY = 0;
                buttonGraySmallest.activate = false;
                buttonGraySmallest.lightOn = false;
                buttonGraySmallest.readyToPress = false;
                buttonGraySmallest.dropSpeed = 10;
                buttonGraySmallest.riseSpeed = 10;

                clippers1Smallest.w = 250;
                clippers1Smallest.h = 250;
                clippers1Smallest.x = 0 - clippers1Smallest.w;
                clippers1Smallest.y= 0;
                clippers1Smallest.t = 0;
                clippers1Smallest.speed = .02;
                clippers1Smallest.touchaku = false;
                clippers1Smallest.disappear = false;

                poof1Smallest.w = 200;
                poof1Smallest.h = 179;
                poof1Smallest.x = 450;
                poof1Smallest.y = 45;
                poof1Smallest.frameX = 0;
                poof1Smallest.frameY = 0;
                poof1Smallest.disappear = false;

                peep1Smallest.w = 328;
                peep1Smallest.h = 527;
                peep1Smallest.x = cnvs.width * 4 - peep1Smallest.w;
                peep1Smallest.y = cnvs.smallestHeight - 80;
                peep1Smallest.dx = 0;
                peep1Smallest.dy = -1.2;
                peep1Smallest.walkSpeed = 3 * 2;
                peep1Smallest.p1 = new Image();
                peep1Smallest.p1.src = "../canvas-images/peep1.png";
                peep1Smallest.p2 = new Image();
                peep1Smallest.p2.src = "../canvas-images/peep2.png";
                peep1Smallest.orderNumber += 1;
                peep1Smallest.hitBox = true;
                peep1Smallest.hitBoxX = peep1Smallest.x + 80;
                peep1Smallest.hitBoxY = peep1Smallest.y
                peep1Smallest.hitBoxW = 165;
                peep1Smallest.hitBoxH = 200;
                peep1Smallest.fillStyle = "rgba(50,50,200, .5)"
                peep1Smallest.frameX = 0;
                peep1Smallest.frameY = 0;
                peep1Smallest.moveRight= false;
                peep1Smallest.moveLeft = true;
                peep1Smallest.hairCut = false;
                peep1Smallest.walk = true;
                peep1Smallest.inHaircutZone = false;
                peep1Smallest.goHome = false;
                peep1Smallest.disappear = false;
                peep1Smallest.shortWait = 0;

                clippersBezierPointsSmallest = [
                    {x:clippers1Smallest.x, y:clippers1Smallest.y},
                    {x:200, y:0 - 150},
                    {x:250, y:0 - 100},
                    {x: zone1Smallest.x - 100, y: 0 - 40}
                ]
            }
        }
        resetAll();
    }
}

const peep1Smallest = new PeepSmallest()

let clippersBezierPoints = [
    {x:clippers1.x, y:clippers1.y},
    {x:200, y:0 - 150},
    {x:250, y:0 - 100},
    {x: zone1.x - 100, y: 0 - 40}
]

const [pZero, pOne, pTwo, pThree] = clippersBezierPoints;

let showBezPoints = true;

let clippersBezierPointsSmall = [
    {x:clippers1Small.x, y:clippers1Small.y},
    {x:200, y:0 - 150},
    {x:250, y:0 - 100},
    {x: zone1Small.x - 100, y: 0 - 40}
]

const [pZeroSmall, pOneSmall, pTwoSmall, pThreeSmall] = clippersBezierPointsSmall;

let showBezPointsSmall = true;

let clippersBezierPointsSmallest = [
    {x:clippers1Smallest.x, y:clippers1Smallest.y},
    {x:200, y:0 - 150},
    {x:250, y:0 - 100},
    {x: zone1Smallest.x - 100, y: 0 - 40}
]

const [pZeroSmallest, pOneSmallest, pTwoSmallest, pThreeSmallest] = clippersBezierPointsSmallest;

let showBezPointsSmallest = true;

const drawBezPoints = () => {
    // p0
    ctx.save();
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(pZero.x, pZero.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    //p1
    ctx.save();
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(pOne.x, pOne.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    //p2
    ctx.save();
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(pTwo.x, pTwo.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    //p3
    ctx.save();
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(pThree.x, pThree.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}

const drawCroppingRectSmall = () => {
    ctx.save();
    ctx.fillStyle = "rgba(101,99,95,1)";
    ctx.fillRect(0, cnvs.height * .5, cnvs.width, cnvs.height * .5);
    ctx.restore();
}

const drawCroppingRectSmallest = () => {
    ctx.save();
    ctx.fillStyle = "rgba(101,99,95,1)";
    ctx.fillRect(0, cnvs.height * .25, cnvs.width, cnvs.height * .75);
    ctx.restore();
}

const poleColors = [
    'rgba(11, 36, 78, 1)',
    'rgba(22, 57, 138, 1)',
    'rgba(106, 149, 213, 1)',
    'rgba(182, 179, 176, 1)',
    'rgba(7, 28, 47, 1)'
];

const IRLLogoColors = [
    'rgba(98, 161, 142, 1)',
    'rgba(132 211 199, 1)',
    'rgba(178, 217, 214, 1)',
    'rgba(93, 93, 82, 1)',
    'rgba(151, 136, 142, 1)'
];

class HorizontalCluster1 {
    constructor() {
        this.x = cnvs.width * .75;
        this.y = cnvs.height * .75;
        this.radius = Math.random() * 3 + 1;
        this.fillStyle = "aliceBlue";
        this.radians = Math.random() * (Math.PI * 2);
        this.velocity = .005;
        this.startingPoint = 0;
        this.distanceFromCenter = Math.floor(Math.random() * (75 - 40 + 1) + 40); // rndmNumber between 250 100
        // this.color = undefined;
        this.colorNumber = Math.floor(Math.random() * 5);
        this.chooseColor = function () {
            switch (this.colorNumber) {
                case 0:
                    return IRLLogoColors[0];
                    break;
                case 1:
                    return IRLLogoColors[1];
                    break;
                case 2:
                    return IRLLogoColors[2];
                    break;
                case 3:
                    return IRLLogoColors[3];
                    break;
                case 4:
                    return IRLLogoColors[4];
                    break;
                default:
                    console.log('didnt match cases 0-4');
            }
        }
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs.width * .75;
            let yCenter = cnvs.height * .75;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }

    draw(lastPoint) {
        // arc
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * .5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // lines from prev to current
        ctx.beginPath();
        ctx.strokeStyle = this.chooseColor();
        ctx.lineWidth = this.radius;
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
    }
}

let horizontalCluster1 = []
for (let i = 0; i < 700; i++) {
    horizontalCluster1.push(new HorizontalCluster1());
}

class HorizontalCluster2 extends HorizontalCluster1 {
    constructor () {
        super();
        this.x = cnvs.width * .25;
        this.y = cnvs.height * .75;
        this.distanceFromCenter = Math.floor(Math.random() * (75 - 40 + 1) + 40); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs.width * .25;
            let yCenter = cnvs.height * .75;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}

let horizontalCluster2 = []
for (let i = 0; i < 700; i++) {
    horizontalCluster2.push(new HorizontalCluster2());
}

const DrawHorizontalClusters = () => {
    horizontalCluster1.forEach(p => {
        p.chooseColor();
    })
    horizontalCluster1.forEach(p => {
        p.update();
    });
    horizontalCluster2.forEach(p => {
        p.chooseColor();
    })
    horizontalCluster2.forEach(p => {
        p.update();
    });
}

class VerticleCluster1 extends HorizontalCluster1 {
    constructor () {
        super();
        this.x = cnvs.width * .5;
        this.y = cnvs.height * .45;
        this.distanceFromCenter = Math.floor(Math.random() * (60 - 35 + 1) + 35); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs.width * .5;
            let yCenter = cnvs.height * .45;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}

let verticleCluster1 = []
for (let i = 0; i < 700; i++) {
    verticleCluster1.push(new VerticleCluster1());
}

class VerticleCluster2 extends VerticleCluster1 {
    constructor () {
        super();
        this.x = cnvs.width * .5;
        this.y = cnvs.height * .8;
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs.width * .5;
            let yCenter = cnvs.height * .8;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}

let verticleCluster2 = []
for (let i = 0; i < 700; i++) {
    verticleCluster2.push(new VerticleCluster2());
}

const drawVerticleClusters = () => {
    verticleCluster1.forEach(p => {
        p.chooseColor();
    })
    verticleCluster1.forEach(p => {
        p.update();
    });
    verticleCluster2.forEach(p => {
        p.chooseColor();
    })
    verticleCluster2.forEach(p => {
        p.update();
    });
}


class BigCluster extends VerticleCluster1 {
    constructor () {
        super();
        this.x = cnvs.width * .5;
        this.y = cnvs.height * .6;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 50 + 1) + 50); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs.width * .5;
            let yCenter = cnvs.height * .6;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}

let bigCluster = []
for (let i = 0; i < 700; i++) {
    bigCluster.push(new BigCluster());
}

const DrawBigCluster = () => {
    bigCluster.forEach(p => {
        p.chooseColor();
    })
    bigCluster.forEach(p => {
        p.update();
    });
}

function animate () {
    gameFrame++;
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);

    if (window.innerWidth > 900) {
        // large animation
        mayboMid.draw();
        mayboMid.update();
    
        if (!peep1.disappear) {
            peep1.draw();
            peep1.update();
        }
    
        buttonGray.draw();
        buttonGray.update();
    
        cord1.draw();
    
        if (!clippers1.disappear) clippers1.draw();
        clippers1.update();
    
        if (clippers1.touchaku && !poof1.disappear) poof1.draw();
        poof1.update();
    
        // zone1.draw();
    } else if (window.innerWidth <= 900 && window.innerWidth > 500) {
        // small animation with cropping rect
        mayboMidSmall.draw();
        mayboMidSmall.update();

        if (!peep1Small.disappear) {
            peep1Small.draw();
            peep1Small.update();
        }

        buttonGraySmall.draw();
        buttonGraySmall.update();

        cord1Small.draw();

        if (!clippers1Small.disappear) clippers1Small.draw();
        clippers1Small.update();

        if (clippers1Small.touchaku && !poof1Small.disappear) poof1Small.draw();
        poof1Small.update();

        // zone1Small.draw();
        // drawCroppingRectSmall();
        // DrawHorizontalClusters();

    } else {
        // smallest animation with cropping rect
        mayboMidSmallest.draw();
        mayboMidSmallest.update();

        if (!peep1Smallest.disappear) {
            peep1Smallest.draw();
            peep1Smallest.update();
        }

        buttonGraySmallest.draw();
        buttonGraySmallest.update();

        cord1Smallest.draw();

        if (!clippers1Smallest.disappear) clippers1Smallest.draw();
        clippers1Smallest.update();

        if (clippers1Smallest.touchaku && !poof1Smallest.disappear) poof1Smallest.draw();
        poof1Smallest.update();

        // zone1Smallest.draw();
        // drawCroppingRectSmallest();
        // DrawBigCluster();
    }



    requestAnimationFrame(animate);
}
animate();

export {cnvs};