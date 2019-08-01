import React from 'react';
import styled from 'styled-components';
import Info from '../components/Info';

class InfoList extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <SInfoList>
                { list.map(({ name='', avatarUrl='', email='', website='', title='' }, index) => (
                    <Info key={index}
                        name={name}
                        avatarUrl={avatarUrl}
                        email={email}
                        website={website}
                        title={title}
                    />
                )) }
            </SInfoList>
        );
    }
}

const SInfoList = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    &::after {
        content: '';
        flex: auto;
    }
`;

export default InfoList;