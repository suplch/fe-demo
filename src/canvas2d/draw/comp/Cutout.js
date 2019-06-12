import React, {Component} from 'react';

import { drawGrid } from '../../drawgrid';

export class Cutout extends Component{

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let canvas = this.canvasRef.current;
        let ctx = canvas.getContext('2d');

        let smallArcX = 100;
        let step = 1;

        requestAnimationFrame(function repeat() {
            smallArcX += step;
            if (smallArcX === 100) {
                step = 1;
            } else if (smallArcX === 900) {
                step = -1;
            }
            drawTwoArc(ctx, smallArcX);
            requestAnimationFrame(repeat);
        })
    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvasRef} width="1000" height="500" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}

function drawTwoArc(ctx, smallArcX) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawGrid(ctx, 'lightgrey', 20, 20);
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'rgba(100, 140, 230, 0.5)';
    ctx.strokeStyle = ctx.fillStyle;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowOffsetX = 12;
    ctx.shadowOffsetY = 12;
    ctx.shadowBlur = 15;
    ctx.arc(500, 190, 150, 0, Math.PI * 2, false);
    ctx.moveTo(smallArcX + 100, 190);
    ctx.arc(smallArcX, 190, 100, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.shadowColor = undefined;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.stroke();
    ctx.restore();
}
