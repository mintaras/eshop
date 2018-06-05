import React from "react";
import { Layout, Menu, Icon, Badge } from "antd";
import './Header.scss';

const Header = () => (
    <Layout.Header>
        <div className="logo">mecomm</div>
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item key="3" style={{ float: 'right' }} className="cart">
            <Badge count={6}>
                <Icon className="icon" type="shopping-cart"/>
            </Badge>
        </Menu.Item>
    </Menu>
    </Layout.Header>
);

export default Header;