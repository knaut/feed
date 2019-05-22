import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/button/AddPost.js');

  // Profile
  require('./stories/profile/Avatar.js');
  require('./stories/profile/FeedLink.js');
  require('./stories/profile/Card.js');

  // Loaders
  require('./stories/GlobalLoader.js');

  // Slate
  require('./stories/Slate.js');

  // Post Avatar
  require('./stories/status/PostAvatar.js');

  // Post Card
  require('./stories/status/Card.js');

  // Lists
  // Posts
  require('./stories/lists/Post.js');

  // v2
  // Circles
  require('./stories/button/Circles.js');

  // Search
  require('./stories/button/Search.js');
}

configure(loadStories, module);