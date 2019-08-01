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
    @media (max-width: 450px) {
        height: 80px;
    }
`;

const SLogo = styled.img`
    width: 100px;
    margin-left: 60px;
    @media (max-width: 450px) {
        margin-left: 50px;
        width: 60px;
    }
`;

const STitle = styled.h1`
    margin-left: 20px;
    display: inline-block;
    color: white;
    @media (max-width: 450px) {
        font-size: 18px;
        max-width: 245px;
    }
`;

export default Banner;