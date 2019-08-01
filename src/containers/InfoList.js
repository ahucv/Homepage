import React from 'react';
import Info from '../components/Info';

class InfoList extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <React.Fragment>
                { list.map(({ name='', avatarUrl='', email='', website='', title='' }, index) => (
                    <Info key={index}
                        name={name}
                        avatarUrl={avatarUrl}
                        email={email}
                        website={website}
                        title={title}
                    />
                )) }
            </React.Fragment>
        );
    }
}

export default InfoList;