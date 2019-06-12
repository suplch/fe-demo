import React, {Component} from 'react';

function gradientConfig(canvas, dir) {
    let ctx = canvas.getContext('2d');

    let gradient = ctx.createLinearGradient(arguments[1], arguments[2], arguments[3], arguments[4]);

    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(.25, 'green');
    gradient.addColorStop(0.5, 'red');
    gradient.addColorStop(1, 'yellow');

    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export class LinerGradient extends Component {

    constructor(props) {
        super(props);
        this.canvas1Ref = React.createRef();
        this.canvas2Ref = React.createRef();
        this.canvas3Ref = React.createRef();
        this.canvas4Ref = React.createRef();
    }

    componentDidMount() {
        gradientConfig(this.canvas1Ref.current, 0, 0, 100, 0);
        gradientConfig(this.canvas2Ref.current, 0, 0, 100, 100);
        gradientConfig(this.canvas3Ref.current, 0, 0, 0, 100);
        gradientConfig(this.canvas4Ref.current, 0, 0, this.canvas4Ref.current.width, this.canvas4Ref.current.height);
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
