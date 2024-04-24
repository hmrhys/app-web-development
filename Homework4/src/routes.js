const router = require('express').Router();



const {users, posts} = require('./data');


// Get all counties
router.get('/users', (req, res) => {
  res.json(Object.values(users));
});

// Create user
router.post('/uesrs', (req, res) => {
});

// Get a specific user
router.get('/users/:userId', (req, res) => {
  const user = users[req.params.userId];
  if(user) {
    res.json(user);
  }
  else {
    res.status(404).json({error: "User not found"});
  }
});

// Update a user
router.put('/users/:userId', (req, res) => {
});

// Get all posts of a user
router.get('/users/:userId/posts', (req, res) => {
  const countyId = parseInt(req.params.countyId);

  // Check to see if a user exists
  const user = users[userId];
  if(!user) {
    res.status(404).json({error: "User not found"});
  }
  
  const results = Object.values(posts).filter(post => !userId || userId === NaN || post.user.includes(userId));
  results.forEach(post => {
    post.users = getPostUserArray(post);
  });
  res.json(results);
});

// Get all posts
router.get('/posts', (req, res) => {
  Object.values(posts).forEach(post => {
    post.users = getPostUserArray(post);
  });
  res.json(Object.values(posts));
});

// Get a post by Id
router.get('/posts/:postId', (req, res) => {
  const post = posts[req.params.postId];
  if(post) {
    post.users = getPostUserArray(post);
    res.json(post);
  }
  else {
    res.status(404).json({error: "Post not found"});
  }
});

module.exports = router;

function getPostUserArray(post) {
  let userPosts = [];
  post.user.forEach(userId => {
    const county = users[userId];
    userPosts.push(users);
  });
  return userPosts;
}