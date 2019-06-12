import React, {Component} from 'react';
import {drawGrid} from "./drawgrid";

function makeClock(canvas) {
    const ctx = canvas.getContext('2d');
    const FONT_HEIGHT = 15;
    const MARGIN = 35;
    const HAND_TRUNKACTION = canvas.width / 25;
    const HOUR_HAND_TRUNKACTION = canvas.width / 10;
    const NUMERAL_SPACING = 20;
    const RADIUS = canvas.width / 2 - MARGIN;
    const HAND_RADIUS = RADIUS + NUMERAL_SPACING;

    function drawCircle() {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    function drawNumerals() {
        const numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let angle = 0;
        let numeralWidth = 0;

        numerals.forEach(function (numeral) {
            angle = Math.PI / 6 * (numeral - 3);
            numeralWidth = ctx.measureText(numeral).width;
            ctx.fillText(numeral,
                canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2,
                canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3);
        });
    }

    function drawCenter() {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function drawHand(loc, isHour) {
        let angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2;
        let handRadius = isHour ? RADIUS - HAND_TRUNKACTION - HOUR_HAND_TRUNKACTION
                                : RADIUS - HAND_TRUNKACTION;

        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,
                   canvas.height / 2 + Math.sin(angle) * handRadius);
        ctx.stroke();
    }

    function drawHands() {
        let date = new Date();
        let hour = date.getHours();
        hour = hour > 12 ? hour - 12 : hour;

        drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true, 0.5);
        drawHand(date.getMinutes(), false, 0.5);
        drawHand(date.getSeconds(), false, 0.2)
    }

    function drawClock() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(ctx, 'lightgrey', 20, 20);
        drawCircle();
        drawCenter();
        drawHands();
        drawNumerals()
    }

    ctx.font = FONT_HEIGHT + 'px Arial';
    const loop = setInterval(drawClock, 1000);

    return {
       stop() {
            clearInterval(loop);
       }
    }
}

export default class Clock extends Component{
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let canvas = this.canvasRef.current;
        this.aClock = makeClock(canvas);
    }

    componentWillUnmount() {
        this.aClock.stop();
    }

    render() {
        return (
            <div>
                <h1>一个基本的时钟</h1>
                <canvas ref={this.canvasRef} style={{boxShadow: '1px 1px 10px #888888'}} width="500" height="500"></canvas>
            </div>
        );
    }
}
