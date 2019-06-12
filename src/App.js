import React, {Component} from 'react';
import { Layout, Menu, Icon } from "antd";
import "./app.css";
import "antd/dist/antd.css";
import Logo from './imgs/logo.png';

import Menus from './side-menu/menus';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: null
        };
    }

    openMenu(item) {
        this.setState({
            selectedMenu: item
        })
    }

    render() {
        const Comp = this.state.selectedMenu && this.state.selectedMenu.comp;
        let comp = null;
        if (Comp) {
            comp = <Comp/>
        }
        const menuEls = Menus.map((menu) => {
            return <SubMenu
                key={menu.name}
                title={
                    <span>
                    <Icon type="user" />
                        {menu.name}
                </span>
                }>
                {menu.submenus.map((item, index) => {
                    return (
                        <Menu.Item key={menu.name + index} onClick={this.openMenu.bind(this, item)}>
                            {item.name}
                        </Menu.Item>
                    )
                })}
            </SubMenu>
        });

        return <Layout className="approot">
            <Header className="header" style={{background: 'white', paddingBottom: '5px', borderBottom: 'solid 3px lightblue'}}>
                <div className="logo" />
                <img src={Logo} alt="前锋教育"/>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff', overflow: 'scroll' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}>
                        {menuEls}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px 24px 24px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}>
                        {comp}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    }
}

export default App;
