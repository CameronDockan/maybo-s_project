/**@type {HTMLCanvasElement}*/

const cnvs4 = document.getElementById("cnvs4");
const ctx4 = cnvs4.getContext("2d");
let cnvs4Container = document.querySelector('.cnvs4-container');

cnvs4.width = window.innerWidth;
cnvs4.height = window.innerHeight;

window.onresize = function () {
    resizeCanvasWidth();
    resizeCanvasHeight();
}
const resizeCanvasWidth = () => {
    cnvs4.width = window.innerWidth;
}
const resizeCanvasHeight = () => {
    cnvs4.height = window.innerHeight;
}

const poleColors = [
    'rgba(11, 36, 78, 1)',
    'rgba(22, 57, 138, 1)',
    'rgba(106, 149, 213, 1)',
    'rgba(182, 179, 176, 1)',
    'rgba(7, 28, 47, 1)'
];

class Cluster1 {
    constructor() {
        this.x = cnvs4.width * .5;
        this.y = cnvs4.height * .5;
        this.radius = Math.random() * 3 + 1;
        this.fillStyle = "aliceBlue";
        this.radians = Math.random() * (Math.PI * 2);
        this.velocity = .003;
        this.startingPoint = 0;
        this.distanceFromCenter = Math.floor(Math.random() * (250 - 100 + 1) + 100); // rndmNumber between 250 100
        // this.color = undefined;
        this.colorNumber = Math.floor(Math.random() * 5);
        this.chooseColor = function () {
            switch (this.colorNumber) {
                case 0:
                    return poleColors[0];
                    break;
                case 1:
                    return poleColors[1];
                    break;
                case 2:
                    return poleColors[2];
                    break;
                case 3:
                    return poleColors[3];
                    break;
                case 4:
                    return poleColors[4];
                    break;
                default:
                    console.log('didnt match cases 0-4');
            }
        }
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs4.width * .5;
            let yCenter = cnvs4.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }

    draw(lastPoint) {
        // arc
        // ctx4.fillStyle = this.fillStyle;
        // ctx4.beginPath();
        // ctx4.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        // ctx4.fill();
        // ctx4.closePath();

        // lines from prev to current
        ctx4.beginPath();
        ctx4.strokeStyle = this.chooseColor();
        ctx4.lineWidth = this.radius;
        ctx4.moveTo(lastPoint.x, lastPoint.y);
        ctx4.lineTo(this.x, this.y);
        ctx4.stroke();
        ctx4.closePath();
    }
}

let cluster1 = []
for (let i = 0; i < 1000; i++) {
    cluster1.push(new Cluster1());
}

const displayBigCluster = () => {
    cluster1.forEach(p => {
        p.chooseColor();
    })
    cluster1.forEach(p => {
        p.update();
    });
}


class Cluster2 extends Cluster1 {
    constructor () {
        super();
        this.x = cnvs4.width * .5;
        this.y = cnvs4.height * .5;
        this.distanceFromCenter = Math.floor(Math.random() * (150 - 50 + 1) + 50); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs4.width * .5;
            let yCenter = cnvs4.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}
let cluster2 = [];
for (let i = 0; i < 500; i++) {
    cluster2.push(new Cluster2());
}

const displayMediumCluster = () => {
    cluster2.forEach(p => {
        p.chooseColor();
    })
    cluster2.forEach(p => {
        p.update();
    });
}

class Cluster3 extends Cluster1 {
    constructor () {
        super();
        this.x = cnvs4.width * .5;
        this.y = cnvs4.height * .5;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 25 + 1) + 25); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs4.width * .5;
            let yCenter = cnvs4.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}
let cluster3 = [];
for (let i = 0; i < 500; i++) {
    cluster3.push(new Cluster3());
}

const displaySmallCluster = () => {
    cluster3.forEach(p => {
        p.chooseColor();
    })
    cluster3.forEach(p => {
        p.update();
    });
}


class Cluster10 extends Cluster1 {
    constructor () {
        super();
        this.x = cnvs4.width * .50;
        this.y = cnvs4.height * .25;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 50 + 1) + 50); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs4.width * .50;
            let yCenter = cnvs4.height * .25;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}
let cluster10 = [];
for (let i = 0; i < 500; i++) {
    cluster10.push(new Cluster10());
}

class Cluster11 extends Cluster1 {
    constructor () {
        super();
        this.x = cnvs4.width * .50;
        this.y = cnvs4.height * .65;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 50 + 1) + 50); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs4.width * .50;
            let yCenter = cnvs4.height * .65;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}
let cluster11 = [];
for (let i = 0; i < 500; i++) {
    cluster11.push(new Cluster11());
}

const displayTwoVerticleClusters = () => {
    cluster10.forEach(p => {
        p.chooseColor();
    })
    cluster10.forEach(p => {
        p.update();
    });
    cluster11.forEach(p => {
        p.chooseColor();
    })
    cluster11.forEach(p => {
        p.update();
    });
}

class Cluster12 extends Cluster1 {
    constructor () {
        super();
        this.x = cnvs4.width * .50;
        this.y = cnvs4.height * .50;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 50 + 1) + 50); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs4.width * .50;
            let yCenter = cnvs4.height * .50;
            this.radians += this.velocity;
            this.x = xCenter + Math.sin(this.radians * 2) * this.distanceFromCenter;
            this.y = yCenter + Math.cos(this.radians * 3) * this.distanceFromCenter;
            this.draw(lastPoint);
        }
        particleMovement();
    }
}
let cluster12 = [];
for (let i = 0; i < 500; i++) {
    cluster12.push(new Cluster12());
}

const displayOneCluster = () => {
    cluster12.forEach(p => {
        p.chooseColor();
    })
    cluster12.forEach(p => {
        p.update();
    });
}





function animate() {
    ctx4.fillStyle = 'rgba(0, 0, 0, 0.075)'
    ctx4.fillRect(0, 0, cnvs4.width, cnvs4.height);

    if (window.innerHeight > 550 && window.innerWidth > 700) {
        displayBigCluster();
    }
    if (window.innerHeight > 550 && window.innerWidth < 700 && window.innerWidth > 400) {
        displayMediumCluster();
    }
    if (window.innerHeight > 550 && window.innerWidth <= 400) {
        displaySmallCluster();
    }

    if (window.innerHeight <= 550 && window.innerHeight > 350 && window.innerWidth > 400) {
        displayMediumCluster();
    }
    if (window.innerHeight <= 550 && window.innerHeight > 350 && window.innerWidth <= 400) {
        displaySmallCluster();
    }

    if (window.innerHeight < 350) {
        displaySmallCluster();
    }


    // if (window.innerWidth < 600 && window.innerHeight > 550) displayTwoVerticleClusters();
    // if (window.innerWidth < 600 && window.innerHeight < 550) displayOneCluster();


    requestAnimationFrame(animate);
}
animate();