module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addWatchTarget("./src/images/");

  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
