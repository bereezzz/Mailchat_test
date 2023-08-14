const ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
  if (err) {
    console.error('Error publishing to GitHub Pages', err);
  } else {
    console.log('Published to GitHub Pages');
  }
});