import React from 'react';
import styled from 'styled-components';

class Info extends React.Component {
    render() {
        const { name, avatarUrl, email, website, title } = this.props;
        return (
            <SInfo>
                <img src={avatarUrl} avatar={avatarUrl} alt={name}></img>
                {website ? (
                    <a className='name' href={website}>{name}</a>)
                    : (<span className='name'>{name}</span>)
                }
                <div className='email' >{email.replace(/@/, ' [AT] ')}</div>
                <div className='title'>{title}</div>
            </SInfo>
        );
    }
}

const SInfo = styled.div`
    position: relative;
    width: 130px;
    height: 130px;
    text-align: center;
    display: inline-block;
    margin: 15px 25px;
    ::after {
        position: absolute;
        top: -1px;
        left: -1px;
        content: "";
        width: 135px;
        height: 135px;
        border-radius: 50%;
    }
    a {
        color: #0066cc!important;
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin-bottom: 5px;
        border: 5px solid rgba(255, 255, 255, 0.6);
        background: url(${ ({ children: [ { props: { avatar } } ] }) => avatar });
    }
    .email {
        color: #666666;
        font-size: 14px;
        text-align: center;
        width: 150px;
        margin-left: -10px;
    }
    .title {
        color: #999999;
        font-size: 12px;
        text-align: center;
    }
`;

export default Info;