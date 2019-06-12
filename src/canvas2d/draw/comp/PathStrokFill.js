import React, {Component} from 'react';

import {drawGrid} from '../../drawgrid';

export class PathStrokFill extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let canvas = this.canvasRef.current;
        let ctx = canvas.getContext('2d');

        drawGrid(ctx, 'lightgrey', 20, 20);

        ctx.font = '48pt Helvetica';
        ctx.strokeStyle = 'blue';
        ctx.fillStyle = 'red';
        ctx.lineWidth = '2';

        // Text
        ctx.strokeText('Stroke', 60, 60);
        ctx.fillText('Fill', 440, 60);

        ctx.strokeText('Stroke & Fill', 650, 60);
        ctx.fillText('Stroke & Fill', 650, 60);

        // Rectangles

        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.rect(80, 100, 150, 80);
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(400, 100, 150, 80);
        ctx.fill();

        ctx.beginPath();
        ctx.rect(750, 100, 150, 80);
        ctx.fill();
        ctx.stroke();

        // Open arcs

        ctx.beginPath();
        ctx.arc(150, 280, 50, 0, Math.PI * 3 / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(475, 280, 50, 0, Math.PI * 3 / 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(820, 280, 50, 0, Math.PI * 3 / 2);
        ctx.stroke();
        ctx.fill();

        // Closed arcs

        ctx.beginPath();
        ctx.arc(150, 440, 50, 0, Math.PI * 3 / 2);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(475, 440, 50, 0, Math.PI * 3 / 2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(820, 440, 50, 0, Math.PI * 3 / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill()


    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvasRef} width="1100" height="520" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}
