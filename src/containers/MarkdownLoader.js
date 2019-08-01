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
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    padding: 10px 50px;
    background: white;
    margin-bottom: 30px;
    overflow: auto;
    line-height: 1.5;
    h1, h2, h3, h4, h5, h6 {
        font-family: "Charter", "Bitstream Charter", Georgia, serif;
    }
    a {
        color: #0088cc;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    @media (max-width: 450px) {
        padding: 15px;
    }
`;

export default MarkdownLoader;