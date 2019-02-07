import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/button/AddPost.js');

  // Profile
  require('./stories/profile/Avatar.js');
  require('./stories/profile/FeedLink.js');

  // Loaders
  require('./stories/GlobalLoader.js');

  // Slate
  require('./stories/Slate.js');

  // PostCard
  require('./stories/card/Card.js');
}

configure(loadStories, module);