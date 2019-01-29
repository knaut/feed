import { configure } from '@storybook/react';

function loadStories() {
  // Profile
  require('./stories/profile/Avatar.js');
  require('./stories/profile/FeedLink.js');
}

configure(loadStories, module);