const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const SectionTitle = require('./src/_includes/components/SectionTitle.js');
const TagButton = require('./src/_includes/components/TagButton.js');

module.exports = function (eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/js/");

  // Browser sync options
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  // Pass through copies
  eleventyConfig.addPassthroughCopy("src/fonts")
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/js")

  // Official plugins
  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: { tabindex: 0 }
  });

  eleventyConfig.addShortcode("SectionTitle", SectionTitle);
  eleventyConfig.addShortcode("TagButton", TagButton);

  // Filters
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 150)) + " ...";
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", collection => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(tag => ["article", "articles"].indexOf(tag) === -1);
  });

  return {
    dir: {
      passthroughFileCopy: true,
      input: "src",
      output: "public",
    },
  };
};
