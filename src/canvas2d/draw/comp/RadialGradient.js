import React, {Component} from 'react';

function gradientConfig(canvas, dir) {
    let ctx = canvas.getContext('2d');

    let gradient = ctx.createRadialGradient(
        arguments[1], arguments[2], arguments[3],
        arguments[4], arguments[5], arguments[6]);

    let offset1 = 0;
    let offset2 = offset1 + Math.random() * 0.25;
    let offset3 = offset2 + Math.random() * 0.25;
    let offset4 = 1;

    gradient.addColorStop(offset1, 'blue');
    gradient.addColorStop(offset2, 'green');
    gradient.addColorStop(offset3, 'red');
    gradient.addColorStop(offset4, 'yellow');

    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export class RadialGradient extends Component {

    constructor(props) {
        super(props);
        this.canvas1Ref = React.createRef();
        this.canvas2Ref = React.createRef();
        this.canvas3Ref = React.createRef();
        this.canvas4Ref = React.createRef();
    }

    componentDidMount() {
        let self = this;
        window.requestAnimationFrame(function paint() {
            if (!self.stop) {
            gradientConfig(self.canvas1Ref.current, 100, 100, 100, 100, 100, 30);
            gradientConfig(self.canvas2Ref.current, 100, 100, 50, 100, 100, 100);
            gradientConfig(self.canvas3Ref.current, 10, 10, 10, 100, 100, 60);
            gradientConfig(self.canvas4Ref.current, 30,30, 10, 120, 120, 50);
                requestAnimationFrame(paint);
            }
        })

    }

    componentWillUnmount() {
        this.stop = true;
    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvas1Ref} width="500" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
                <canvas ref={this.canvas2Ref} width="500" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
                <canvas ref={this.canvas3Ref} width="500" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
                <canvas ref={this.canvas4Ref} width="500" height="200" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}
