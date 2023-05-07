const {html} = require('common-tags');

function TagButton({link, linkText, ariaText, tagCloud}) {
    return html`
        <button class="${`${tagCloud ? `tagcloud` :`article-card__tags`}`}" 
                type="button" aria-label="${ariaText}">
            <a href="${link}">${linkText}</a>
        </button>
    `;
}

module.exports = TagButton;
