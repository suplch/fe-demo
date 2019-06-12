import React, {Component} from 'react';

export default class Line2D extends Component{

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.drawing = false;
        this.ctx = null;

    }

    componentDidMount() {
        this.bbox = this.canvasRef.current.getBoundingClientRect();
        this.ctx = this.canvasRef.current.getContext('2d');
    }

    componentWillUnmount() {
        this.bbox = null;
        this.ctx = null;
    }

    mouseDown(event) {
        this.drawing = true;
        let x = (event.clientX - this.bbox.left) * (this.canvasRef.current.width / this.bbox.width);
        let y = (event.clientY - this.bbox.top) * (this.canvasRef.current.height / this.bbox.height);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
    }

    mouseMove(event) {
        if (this.drawing) {
            //drawGrid(this.ctx, 'lightgrey', 20, 20);
            let x = (event.clientX - this.bbox.left) * (this.canvasRef.current.width / this.bbox.width);
            let y = (event.clientY - this.bbox.top) * (this.canvasRef.current.height / this.bbox.height);

            this.ctx.lineTo(x, y);

            this.ctx.stroke();
        }
    }

    mouseUp() {
        if (this.drawing) {
            //drawGrid(this.ctx, 'lightgrey', 20, 20)
            this.ctx.stroke();
            this.drawing = false;
        }

    }

    render() {
        return (
            <div>
                <h1>一个画线用例</h1>
                <canvas
                    onMouseDown={this.mouseDown.bind(this)}
                    onMouseMove={this.mouseMove.bind(this)}
                    onMouseUp={this.mouseUp.bind(this)}
                    width="500" height="500" style={{boxShadow: '1px 1px 10px #888888'}} ref={this.canvasRef}></canvas>
            </div>
        );
    }
}
