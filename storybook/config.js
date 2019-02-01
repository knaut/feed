import { configure } from '@storybook/react';

function loadStories() {
  // Profile
  require('./stories/profile/Avatar.js');
  require('./stories/profile/FeedLink.js');

  // Loaders
  require('./stories/GlobalLoader.js');

  // Editor
  require('./stories/Editor.js');
}

configure(loadStories, module);