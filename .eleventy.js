const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  // Plugin section

  // Watch targets
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/images/");

  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  // Pass through copies
  eleventyConfig.addPassthroughCopy("./src/images")

  // Filters Section
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 280)) + " ...";
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
