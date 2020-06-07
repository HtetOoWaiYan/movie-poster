import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import styles from './NavBar.module.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const NavBar = props => {
    const location = useLocation();

    return (
        <Header style={{ padding: '0' }}>
            <div className={styles.viewpoint}>
                <Menu theme="dark" mode="horizontal" selectedKeys={location.pathname === '/about' ? ['2'] : ['0', '1']}>
                    <Menu.Item key="0" style={{ float: 'left', background: 'none' }}>
                        <Link to="/">
                            <img src="logo.png" alt="logo" className={styles.logo} />
                            <span className={styles.brand}>Movie Posters</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ float: 'right' }}>
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="1" style={{ float: 'right' }}>
                        <Link to="/">Posters</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    )
}

export default NavBar;
