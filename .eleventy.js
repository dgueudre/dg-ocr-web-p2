module.exports = config => {
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/css');


  config.addNunjucksFilter("filter_by", (links, propertyName, value) => links.filter(link => link[propertyName] === value));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
      includes: "templates",
      data: "data"
    }
  };
};