import React, {Component} from 'react';

import { DrawRect } from './comp/DrawRect';

import { Tabs } from 'antd';
import {ColorRect} from "./comp/ColorRect";
import {LinerGradient} from "./comp/LinerGradient";
import {RadialGradient} from "./comp/RadialGradient";
import {Pattern} from "./comp/Pattern";
import {Shadow} from "./comp/Shadow";
import {PathStrokFill} from "./comp/PathStrokFill";
import {Cutout} from "./comp/Cutout";
import {Cutout2} from "./comp/Cutout2";
import {Axes} from "./comp/Axes";

const { TabPane } = Tabs;

export default class DrawList extends Component {

    render() {
        return (
            <Tabs>
                <TabPane key={1} tab="矩形的绘制">
                    <DrawRect/>
                </TabPane>
                <TabPane key={2} tab="颜色与透明度">
                    <ColorRect/>
                </TabPane>
                <TabPane key={3} tab="线性渐变">
                    <LinerGradient/>
                </TabPane>
                <TabPane key={4} tab="放射渐变">
                    <RadialGradient/>
                </TabPane>
                <TabPane key={5} tab="图案">
                    <Pattern/>
                </TabPane>
                <TabPane key={6} tab="阴影">
                    <Shadow/>
                </TabPane>
                <TabPane key={7} tab="描边&填充">
                    <PathStrokFill/>
                </TabPane>
                <TabPane key={8} tab="剪纸效果">
                    <Cutout/>
                </TabPane>
                <TabPane key={9} tab="剪纸效果2">
                    <Cutout2/>
                </TabPane>
                <TabPane key={10} tab="坐标轴">
                    <Axes/>
                </TabPane>




            </Tabs>
        );
    }
}
