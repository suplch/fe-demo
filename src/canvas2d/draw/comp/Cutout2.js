import React, {Component} from 'react';

import { drawGrid } from '../../drawgrid';

export class Cutout2 extends Component{

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let canvas = this.canvasRef.current;
        let ctx = canvas.getContext('2d');

        drawGrid(ctx, 'lightgrey', 20, 20);

        ctx.save();

        ctx.fillStyle = 'goldenrod';
        ctx.shadowColor = 'rgba(200, 200, 0, 0.5)';
        ctx.shadowOffsetX = 12;
        ctx.shadowOffsetY = 12;
        ctx.shadowBlur = 15;

        drawCutouts(ctx);
        strokeCutoutShapes(ctx);

        ctx.restore();

    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvasRef} width="1000" height="500" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}


function drawCutouts(ctx) {
    ctx.beginPath();
    addOuterRectanglePath(ctx);
    addCirclePath(ctx);
    addRectanglePath(ctx);
    addTrianglePath(ctx);

    ctx.fill();
}

function strokeCutoutShapes(ctx) {
    ctx.save()

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();

    addOuterRectanglePath(ctx);
    ctx.stroke();

    ctx.beginPath();

    addCirclePath(ctx);
    addRectanglePath(ctx);
    addTrianglePath(ctx);
    ctx.stroke();

    ctx.restore();
}

function addOuterRectanglePath(ctx) {
    ctx.rect(110, 25, 370, 335);
}

function addRectanglePath(ctx) {
    rect(ctx,310, 55, 70, 35, true);
}

function addCirclePath(ctx) {
    ctx.arc(300, 300, 40, 0, Math.PI * 2, true);
}

function addTrianglePath(ctx) {
    ctx.moveTo(400, 200);
    ctx.lineTo(250, 115);
    ctx.lineTo(200, 200);
    ctx.closePath();
}

function rect(ctx, x, y, w, h, direction) {
    if (direction) {
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x + w, y );
    } else {
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
    }
    ctx.closePath();
}

