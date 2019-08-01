import React from 'react';
import { PUBLIC_URL } from '../constants/global';
import styled from 'styled-components';

import Menu from './Menu';

class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SBanner>
                    <SLogo src={`${ PUBLIC_URL }/images/ahu_logo.png`} alt='Anhui University Logo'></SLogo>
                    <STitle>Multi-Modal Intelligent Computing Group</STitle>
                </SBanner>
                <Menu></Menu>
            </React.Fragment>
        );
    }
}

const SBanner = styled.div`
    height: 145px;
    background: #001529;
    display: flex;
    align-items: center;
`;

const SLogo = styled.img`
    width: 100px;
    margin-left: 60px;
`;

const STitle = styled.h1`
    margin-left: 20px;
    display: inline-block;
    color: white;
`;

export default Banner;