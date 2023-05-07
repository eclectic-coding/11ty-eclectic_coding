const {html} = require('common-tags');

function SectionTitle({title}) {
    return html`
        <h1 class="h2 section__header">${title}</h1>
    `;
}

module.exports = SectionTitle;
