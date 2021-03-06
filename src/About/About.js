import React from "react";
import { Link } from "react-router-dom";
import styles from './About.module.css';
import { Breadcrumb, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
const { Paragraph, Title } = Typography;

const About = props => {
    // Breadcrumb routes
    const routes = [
        {
            path: '/',
            breadcrumbName: 'Home',
        },
        {
            path: '/about',
            breadcrumbName: 'About',
        },
    ];

    function itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link to={paths.join('/')}><HomeOutlined /> {route.breadcrumbName}</Link>
        );
    }

    return (
        <Typography className={styles.article}>
            <Breadcrumb
                itemRender={itemRender}
                routes={routes}
                className={styles.breadcrumb}
            ></Breadcrumb>

            <Title className={styles.title}>/About</Title>
            <Paragraph className={styles.text}>
                Movie Posters is a website where you can search, view and download movie posters.
            </Paragraph>

            <Title className={styles.title}>/Purpose</Title>
            <Paragraph className={styles.text}>
                The purpose of making this website is for me to practice <a href="https://reactjs.org/">React</a> and to serve it as my <a href="https://www.edx.org/course/cs50s-introduction-to-computer-science">CS50x</a> final project.
            </Paragraph>

            <Title className={styles.title}>/Tech used</Title>
            <ul className={styles.text}>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://ant.design/">Ant Design</a></li>
                <li><a href="https://www.themoviedb.org/documentation/api">TMDb API</a></li>
            </ul>

            <Title className={styles.title}>/Things I learned making this project</Title>
            <ul className={styles.text}>
                <li><a href="https://reactrouter.com/web/guides/quick-start">React Router</a></li>
                <li><a href="https://cssgrid.io/">CSS Grid</a></li>
                <li><a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet">CSS Modules</a></li>
            </ul>
        </Typography>
    );
}

export default About;
