/**@type {HTMLCanvasElement}*/

const cnvs2 = document.getElementById("cnvs2");
const ctx2 = cnvs2.getContext("2d");
const gridContainer = document.querySelector('.grid-container');

cnvs2.width = 5552;
cnvs2.height = 415;
let animationFrame = 0;

let wave = {
    y: cnvs2.height *.5,
    amp: 50,
    length: .01,
    freq: .02
}

class Wave {
    constructor (amp, length, freq, freqIncrementaionValue, lineWidth, strokeStyle) {
        this.y = cnvs2.height * .5;
        this.amp = amp;
        this.length = length;
        this.freq = freq;
        this.freqIncrementaionValue = freqIncrementaionValue;
        this.lineWidth =lineWidth;
        this.strokeStyle = strokeStyle;
    }
    draw () {
        ctx2.save();
        ctx2.lineWidth = this.lineWidth;
        ctx2.strokeStyle = this.strokeStyle;
        ctx2.beginPath();
        ctx2.moveTo(0, this.y);
        for(let i=0; i<cnvs2.width; i++) {
            ctx2.lineTo(i, this.y + Math.sin(i * this.length + this.freq) * this.amp);
        }
        ctx2.stroke();
        ctx2.restore();
    }
    update () {
        const moveWave = () => {
            this.freq += this.freqIncrementaionValue;
        }
        moveWave();
    }
}

const wave1 = new Wave(50, .005, .02, .018, 1, 'rgba(127, 255, 212,.5)'); //'rgba(220,220,220,.3)' aquamarine === rgba(127, 255, 212,1);
const wave2 = new Wave(60, .004, .02, .018, 1, 'rgba(220,220,220,.5)');
const wave3 = new Wave(70, .003, .02, .018, 1, 'rgba(220,220,220,.4)');
const wave4 = new Wave(80, .002, .02, .018, 1, 'rgba(220,220,220,.2)');

const updateWaveYValues = () => {
    wave1.y = window.innerHeight * .5;
    wave2.y = window.innerHeight * .5;
    wave3.y = window.innerHeight * .5;
}

function animate () {
    animationFrame++;
    ctx2.clearRect(0, 0, cnvs2.width, cnvs2.height);

    wave1.draw();
    wave1.update();

    wave2.draw();
    wave2.update();

    wave3.draw();
    wave3.update();

    wave4.draw();
    wave4.update();

    requestAnimationFrame(animate);
}
animate();

