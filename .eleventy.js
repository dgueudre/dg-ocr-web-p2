module.exports = config => {
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/css');


  config.addNunjucksFilter("filter_by", (array, property, value) => array.filter(item => item[property] === value));

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