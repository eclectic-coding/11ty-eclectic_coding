const {html} = require('common-tags');

function TagButton({link, linkText, ariaText}) {
    return html`
        <button class="article-card__tags" type="button" aria-label="${ariaText}">
            <a href="${link}">${linkText}</a>
        </button>
    `;
}

module.exports = TagButton;
