import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
}
