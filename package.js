Package.describe({
  name: 'fermuch:metrics-graphics',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A library optimized for concise, principled data graphics and layouts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fermuch/meteor-metrics-graphics.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.imply(['jquery', 'd3js:d3']);

  //api.addFiles('metrics-graphics.browserify.js');
  api.addFiles([
    'metrics-graphics/dist/metricsgraphics.js',
    'metrics-graphics/dist/metricsgraphics.css'
  ], 'client');
  api.export('MG', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fermuch:metrics-graphics');
  api.addFiles('metrics-graphics-tests.js');
});
