import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");

  eleventyConfig.addWatchTarget("src/css/");
	eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/*.webc",
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }  
};