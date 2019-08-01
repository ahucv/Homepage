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
    .circle-border {
        position: relative;
        width: 130px;
        height: 130px;
        display: inline-block;
        ::after {
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.3);
            content: "";
            width: 135px;
            height: 135px;
            border-radius: 50%;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
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