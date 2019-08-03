import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import InfoList from '../containers/InfoList';
import Slider from '../containers/Slider';

class MarkdownLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    async componentDidUpdate() {
        const { path } = this.props;
        switch (path) {
            case '/home':
                const sliderPromise = await fetch('/source/slider.json');
                const { images, configrations: { interval } } = await sliderPromise.json();
                ReactDOM.render(
                    <Slider images={images} interval={interval} />,
                    document.getElementById('slider')
                );
                break;
            case '/people':
                const response = await fetch('/source/people.json');
                const { faculty, students } = await response.json();
                ReactDOM.render(
                    <InfoList list={faculty} />,
                    document.getElementById('faculty')
                );
                ReactDOM.render(
                    <InfoList list={students} />,
                    document.getElementById('students')
                );
                break;
            case '/project':
                const styleRules = `
                    h2, h3 {
                        cursor: pointer;
                    }
                `.trim();
                const body = document.querySelector('body');
                const style = document.createElement('style');
                style.innerText = styleRules;
                body.appendChild(style);
                const titles = document.querySelectorAll('h3');
                // handle click events
                titles.forEach(title => {
                    title.nextSibling.style.display = 'none';
                    title.addEventListener('click', () => {
                        const siblingStyle = title.nextSibling.style;
                        if (siblingStyle.display !== 'none') {
                            siblingStyle.display = 'none';
                        } else {
                            siblingStyle.display = 'block';
                        }
                    })
                })
                break;
            default:
                break;
        }
    }

    async componentDidMount() {
        const { path } = this.props;
        const response = await fetch(`/source${path}.md`);
        const result = await response.text();
        this.setState({ content: result });
    }

    render() {
        return (
            <SMarkdown>
                <ReactMarkdown
                    source={this.state.content}
                    escapeHtml={false}
                />
            </SMarkdown>
        );
    }
}

const SMarkdown = styled.div`
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