import React, {Component} from 'react';

export class ColorRect extends Component{

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let canvas = this.canvasRef.current;
        let ctx = canvas.getContext('2d');

        ctx.lineJoin = 'round';
        ctx.lineWidth = 30;

        ctx.font = '24px Helvetica';
        ctx.fillText('Click anywhere to erase', 175, 150);

        ctx.strokeStyle = 'goldenrod';
        ctx.fillStyle = 'rgba(0, 0, 255, 0.8)';

        ctx.strokeRect(75, 100, 200, 200);
        ctx.fillRect(325, 100, 200, 200);

        ctx.canvas.onmousedown = function (ev) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvasRef} width="800" height="500" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}
