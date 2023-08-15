/**@type {HTMLCanvasElement}*/

const cnvs5 = document.getElementById("cnvs5");
const ctx5 = cnvs5.getContext("2d");
let cnvs5Container = document.querySelector('.cnvs5-container');

cnvs5.width = window.innerWidth;
cnvs5.height = window.innerHeight;

window.onresize = function () {
    resizeCanvasWidth();
    resizeCanvasHeight();
}
const resizeCanvasWidth = () => {
    cnvs5.width = window.innerWidth;
}
const resizeCanvasHeight = () => {
    cnvs5.height = window.innerHeight;
}

const IRLLogoColors = [
    'rgba(98, 161, 142, 1)',
    'rgba(132 211 199, 1)',
    'rgba(178, 217, 214, 1)',
    'rgba(93, 93, 82, 1)',
    'rgba(151, 136, 142, 1)'
];

class Cluster1 {
    constructor() {
        this.x = cnvs5.width * .5;
        this.y = cnvs5.height * .5;
        this.radius = Math.random() * 3 + 1;
        this.fillStyle = "purple";
        this.radians = Math.random() * (Math.PI * 2);
        this.velocity = .0075;
        this.startingPoint = 0;
        this.distanceFromCenter = Math.floor(Math.random() * (250 - 100 + 1) + 100); // rndmNumber was 250 100
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
            let xCenter = cnvs5.width * .5;
            let yCenter = cnvs5.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.cos(this.radians *2) * this.distanceFromCenter;
            this.y = yCenter + Math.sin(this.radians * 3) * this.distanceFromCenter;
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
        let x1 = cnvs5.width * .5;
        let y1 = cnvs5.height * .5;
        let angle = -Math.PI/2;
        //bo.hpFactor = h1/bo.hp;
    
        ctx5.save();
        ctx5.translate(x1, y1)
        ctx5.rotate(angle);
        ctx5.translate(-(x1), -(y1))

        ctx5.beginPath();
        ctx5.strokeStyle = this.chooseColor();
        ctx5.lineWidth = this.radius;
        ctx5.moveTo(lastPoint.x, lastPoint.y);
        ctx5.lineTo(this.x, this.y);
        ctx5.stroke();
        ctx5.closePath();
        ctx5.restore();

    }
}

let cluster1 = [];
for (let i = 0; i < 500; i++) {
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
        this.x = cnvs5.width * .5;
        this.y = cnvs5.height * .5;
        this.distanceFromCenter = Math.floor(Math.random() * (150 - 50 + 1) + 50); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs5.width * .5;
            let yCenter = cnvs5.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.cos(this.radians *2) * this.distanceFromCenter;
            this.y = yCenter + Math.sin(this.radians * 3) * this.distanceFromCenter;
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
        this.x = cnvs5.width * .5;
        this.y = cnvs5.height * .5;
        this.distanceFromCenter = Math.floor(Math.random() * (100 - 25 + 1) + 25); // rndmNumber between 250 100
    }
    update() {
        const particleMovement = () => {
            let lastPoint = { x: this.x, y: this.y }
            let xCenter = cnvs5.width * .5;
            let yCenter = cnvs5.height * .5;
            this.radians += this.velocity;
            this.x = xCenter + Math.cos(this.radians *2) * this.distanceFromCenter;
            this.y = yCenter + Math.sin(this.radians * 3) * this.distanceFromCenter;
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




function animate() {
    ctx5.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx5.fillRect(0, 0, cnvs5.width, cnvs5.height);
    // p for particle





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







    // if (window.innerWidth > 1200 && window.innerHeight > 500) displayNineClusters();

    // if (window.innerWidth > 1200 && window.innerHeight < 500) displayTwoHorizontal();

    // if (window.innerWidth < 1200 && window.innerWidth > 745 && window.innerHeight > 535) displayFourClusters();

    // if (window.innerWidth < 1200 && window.innerWidth > 745 && window.innerHeight < 535) displayTwoHorizontal();

    // if (window.innerWidth < 745 && window.innerHeight > 450) displayTwoVerticleClusters();

    // if (window.innerWidth < 745 && window.innerHeight < 450) displayOneCluster();

    requestAnimationFrame(animate);
}
animate();