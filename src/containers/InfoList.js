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
                <i></i><i></i><i></i><i></i>
            </SInfoList>
        );
    }
}

const SInfoList = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: space-between;
    i {
        width: 160px;
        padding: 0 25px;
    }
`;

export default InfoList;