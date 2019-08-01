import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

class MarkdownLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    async componentDidMount() {
        const { path } = this.props;
        const response = await fetch(`/source${ path }.md`);
        const result = await response.text();
        this.setState({ content: result });
    }

    render() {
        return (
            <SMarkdown>
                <ReactMarkdown
                    source={ this.state.content }
                    escapeHtml={ false }
                />
            </SMarkdown>
        );
    }
}

const SMarkdown = styled.div`
    padding: 10px 50px;
    background: white;
    margin-bottom: 30px;
    overflow: auto;
    @media (max-width: 450px) {
        padding: 15px;
    }
`;

export default MarkdownLoader;