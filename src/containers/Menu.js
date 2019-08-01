import React from 'react';
import styled from 'styled-components';
import { menu as menuConfig } from '../config.json'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        const lists = Object.keys(menuConfig).map((item, index) => (
            <SMenuItem key={ index }>
                <NavLink
                    to={ menuConfig[item] }
                    activeStyle={{ color: 'white' }}
                >{ item }</NavLink>
            </SMenuItem>
        ))
        return (
            <SMenu> { lists } </SMenu>
        );
    }
}

const SMenu = styled.ul`
    margin: 0;
    padding: 8px 70px;;
    background: rgb(0, 21, 41, 0.95);
    @media (max-width: 450px) {
        display: flex;
        justify-content: space-around;
        padding: 8px 3px;
    }
`;

const SMenuItem = styled.li`
    margin: 0 15px;
    list-style: none;
    display: inline-block;
    a {
        text-decoration: none;
        color: rgba(255,255,255,0.65);
        font-size: 18px;
        &:hover {
            color: white;
        }
    }
    @media (max-width: 450px) {
        margin: 0 3px;
        a {
            font-size: 14px;
        }
    }
`;

export default Menu;