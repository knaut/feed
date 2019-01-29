import { configure } from '@storybook/react';

function loadStories() {
  // Profile
  require('./stories/profile/Avatar.js');
}

configure(loadStories, module);