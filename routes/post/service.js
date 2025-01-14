import Post from "./models/Post.js";

/**
 * create : POST   - add
 * read   : GET    - fetch
 * update : PATCH  - modify
 * delete : DELETE - remove
 */
const addPost = (req, res) => {
  console.log(req.body);
  const { title, content, author } = req.body;
};

const PostService = {
  addPost,
};
export default PostService;
