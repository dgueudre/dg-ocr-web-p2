module.exports = config => {
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/css');


  config.addNunjucksFilter("filter_by_section", (links, section) => links.filter(link => link.section === section));

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