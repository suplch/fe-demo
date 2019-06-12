import React, {Component} from 'react';
import { drawGrid } from '../../drawgrid';



function createAxes(canvas) {
    const ctx = canvas.getContext('2d');
    const AXIS_MARGIN = 40;
    const AXIS_ORIGIN = {x: AXIS_MARGIN, y: canvas.height - AXIS_MARGIN};

    const AXIS_TOP = AXIS_MARGIN;
    const AXIS_RIGHT = canvas.width - AXIS_MARGIN;

    const HORIZONTAL_TICK_SPACING = 10;
    const VERTICAL_TICK_SPACING = 10;

    const AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x;
    const AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP;

    const NUM_VERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING;
    const NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING;

    const TICK_WIDTH = 10;
    const TICKS_LINEWIDTH = 0.5;
    const TICKS_COLOR = 'navy';

    const AXIS_LINEWIDTH = 1.0;
    const AXIS_COLOR = 'blue';


    function drawAxes() {
        ctx.save();

        ctx.strokeStyle = AXIS_COLOR;
        ctx.lineWidth = AXIS_LINEWIDTH;
        drawHorizontalAxis();
        drawVerticalAxis();


        ctx.lineWidth = TICKS_LINEWIDTH;
        ctx.strokeStyle = TICKS_COLOR;

        drawVerticalAxisTicks();
        drawHorizontalAxisTicks();

        ctx.restore();
    }

    function drawHorizontalAxis() {
        ctx.beginPath();
        ctx.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
        ctx.lineTo(AXIS_RIGHT, AXIS_ORIGIN.y);
        ctx.stroke();
    }

    function drawVerticalAxis() {
        ctx.beginPath();
        ctx.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
        ctx.lineTo(AXIS_ORIGIN.x, AXIS_TOP);
        ctx.stroke();
    }

    function drawVerticalAxisTicks() {
        let deltaX;
        for(let i = 1; i < NUM_VERTICAL_TICKS; ++i) {
            ctx.beginPath();
            if (i % 5 === 0) {
                deltaX = TICK_WIDTH;
            } else {
                deltaX = TICK_WIDTH / 2;
            }
            ctx.moveTo(AXIS_ORIGIN.x - deltaX, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
            ctx.lineTo(AXIS_ORIGIN.x + deltaX, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
            ctx.stroke();
        }
    }

    function drawHorizontalAxisTicks() {
        let deltaY;
        for (let i = 1; i < NUM_HORIZONTAL_TICKS; ++i) {
            ctx.beginPath();

            if (i % 5 === 0) {
                deltaY = TICK_WIDTH;
            } else {
                deltaY = TICK_WIDTH / 2;
            }

            ctx.moveTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y - deltaY);
            ctx.lineTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y + deltaY);
            ctx.stroke();
        }
    }

    drawGrid(ctx, 'lightgrey', 20, 20);
    drawAxes();

}

export class Axes extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        createAxes(this.canvasRef.current);
    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvasRef} width="800" height="500" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}
