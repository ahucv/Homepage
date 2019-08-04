import React from 'react';
import styled from 'styled-components';

class Info extends React.Component {
    render() {
        const { name, avatarUrl, email, website, title } = this.props;
        const PUBLIC_PATH = process.env.PUBLIC_URL;
        return (
            <SInfo>
                <div className='image-box'>
                    <IImage src={`${PUBLIC_PATH}/images/transparent.png`} avatar={avatarUrl} alt={name}></IImage>
                </div>
                {website ? (
                    <div className='name'><a href={website}>{name}</a></div>)
                    : (<div className='name'>{name}</div>)
                }
                <div className='email' >{email.replace(/@/, ' (at) ')}</div>
                <div className='title'>{title}</div>
            </SInfo>
        );
    }
}

const SInfo = styled.div`
    height: 230px;
    margin: 15px 25px;
    display: inline-block;
    .image-box {
        position: relative;
        width: 130px;
        height: 130px;
        text-align: center;
        display: inline-block;
        ::after {
            position: absolute;
            top: -1px;
            left: -1px;
            content: "";
            width: 135px;
            height: 135px;
            border-radius: 50%;
        }
    }
    a {
        color: #0066cc!important;
    }
    .name {
        text-align: center;
        margin-left: -10px;
    }
    .email {
        color: #666666;
        font-size: 12px;
        text-align: center;
        width: 170px;
        margin-left: -10px;
    }
    .title {
        color: #999999;
        font-size: 12px;
        text-align: center;
        margin-left: -10px;
    }
    @media (max-width: 450px) {
        margin: 15px 0;
    }
`;

const IImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin-bottom: 5px;
    border: 5px solid rgba(255, 255, 255, 0.6);
    background: url(${ ({ avatar }) => avatar }) center/110% no-repeat;
    box-shadow: 0 0 5px 0 rgb(230, 230, 230);
`;

export default Info;