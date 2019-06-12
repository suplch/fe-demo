import React, {Component} from 'react';
import apple from '../../../imgs/apple.png';

export class Shadow extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {

        this.icon = new Image();
        this.icon.src = apple;
        this.icon.onload = () => {

            let canvas = this.canvasRef.current;

            let ctx = canvas.getContext('2d');


            setIconShadow(ctx);
            ctx.drawImage(this.icon, 20, 20, 58, 58);

            setSelectedIconShadow(ctx);
            ctx.drawImage(this.icon, 90, 20, 58, 58);

            setIconShadow(ctx);
            ctx.drawImage(this.icon, 160, 20, 58, 58);

            setSelectedIconShadow(ctx);
            ctx.drawImage(this.icon, 230, 20, 58, 58);

        };


    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                <canvas ref={this.canvasRef} width="800" height="500" style={{boxShadow: '1px 1px 5px grey'}}/>
            </div>
        );
    }
}

function setIconShadow(ctx) {
    ctx.shadowColor = 'blue';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 2
}

function setSelectedIconShadow(ctx) {
    ctx.shadowColor = 'blue';
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 5
}
