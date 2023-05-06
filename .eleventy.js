const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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

    // Filters
    eleventyConfig.addFilter("excerpt", (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, "");
        return content.substr(0, content.lastIndexOf(" ", 150)) + " ...";
    });

  return {
    dir: {
      passthroughFileCopy: true,
      input: "src",
      output: "public",
    },
  };
};
