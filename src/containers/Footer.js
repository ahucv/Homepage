import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return (
            <SFooter>School of Computer Science and Technology, Anhui University, Yiyuan Campus, 111 Jiulong Road, Shushan District, Hefei, Anhui, China</SFooter>
        );
    }
}

const SFooter = styled.div`
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
    color: #999999;
`;

export default Footer;