module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "svg",
        "png",
        "jpg"
    ]);
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
};