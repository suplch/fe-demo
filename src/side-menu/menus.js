
import Line2D from '../canvas2d/line';
import Clock from "../canvas2d/clock";
import Grid from "../canvas2d/grid";
import {StudentScoreDemo} from "../mycomponent/StudentScoreDemo";
import {EmployeeDemo} from "../mycomponent/EmployeeDemo";
import DrawList from "../canvas2d/draw";

export default [
    {
        name: 'react 组件开发',
        submenus: [
            {name: '学生成绩表', comp: StudentScoreDemo},
            {name: '员工管理', comp: EmployeeDemo}
        ]
    },
    {
        name: 'Canvas 2D',
        submenus: [
            {name: '画线', comp: Line2D},
            {name: '钟表', comp: Clock},
            {name: '绘制', comp: DrawList},
            {name: 'Grid', comp: Grid},
            {name: 'Box'},
            {name: 'Painter'}
        ]
    }, {
        name: 'WebGL',
        submenus: [
            {name: '点'},
            {name: '画线'},
            {name: '画三角形'},
        ]
    }, {
        name: 'Three.js',
        submenus: [
            {name: '立方体'},
            {name: '球体'},
            {name: '运动'},
        ]
    }
];
