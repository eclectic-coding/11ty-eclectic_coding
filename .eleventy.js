const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

  // Plugin section
  eleventyConfig.addPlugin(syntaxHighlight);

  // Watch targets
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/images/");

  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  // Pass through copies
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/fonts")

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 150)) + " ...";
  });

  eleventyConfig.addFilter("optionalImage", (post) => {
    const image = post.data.cover_image
    return image !== '' ? "/images/rails.jpg" : image
  });

  return {
    dir: {
      passthroughFileCopy: true,
      input: "src",
      output: "public",
    },
  };
};
