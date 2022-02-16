import ReactDOMServer from 'react-dom/server';

export const createMarkup = (content) => {
    let formattedContent = (typeof content !== 'string') ? ReactDOMServer.renderToStaticMarkup(content) : content;
    return { __html: formattedContent };
}
