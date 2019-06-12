import {Component} from "react";
import React from "react";
import apple from '../../../imgs/apple.png';

export class Pattern extends Component {
    
    constructor(props) {
        super(props);
        this.canvas1Ref = React.createRef();
        this.canvas2Ref = React.createRef();
        this.canvas3Ref = React.createRef();
        this.canvas4Ref = React.createRef();
    }
    
    componentDidMount() {
        this.image = new Image();
        this.image.src = apple;
        this.image.width = 10;
        this.image.height = 10;
        this.image.onload = () => {
            drawPattern(this.image, 'repeat', this.canvas1Ref.current);
            drawPattern(this.image, 'repeat-x', this.canvas2Ref.current);
            drawPattern(this.image, 'repeat-y', this.canvas3Ref.current);
            drawPattern(this.image, 'no-repeat', this.canvas4Ref.current);
        }
    }

    render() {
        return (
            <div>
                <h1>图案处理</h1>
                <canvas ref={this.canvas1Ref} width="400" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
                <canvas ref={this.canvas2Ref} width="400" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
                <canvas ref={this.canvas3Ref} width="400" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
                <canvas ref={this.canvas4Ref} width="400" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}

function drawPattern(image, repeatString, canvas) {
    let ctx = canvas.getContext('2d');
    let pattern = ctx.createPattern(image, repeatString);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}
