import React, {Component} from 'react';
import {drawGrid} from "./drawgrid";

export default class Grid extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        let ctx = this.canvasRef.current.getContext('2d');
        drawGrid(ctx, 'lightgrey', 20, 20)
    }

    render() {
        return (
            <div>
                <h1>网格绘制</h1>
                <canvas ref={this.canvasRef} width="500" height="500" style={{boxShadow: '1px 1px 10px #888888'}}></canvas>
            </div>
        );
    }
}
