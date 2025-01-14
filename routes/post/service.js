import Post from "./models/Post.js";

/**
 * create : POST   - add
 * read   : GET    - fetch
 * update : PATCH  - modify
 * delete : DELETE - remove
 */
const addPost = async ({ title, content, author }) => {
  const newPost = new Post({ title, content, author });

  await newPost.save();

  // 아래의 작업 없이도 호출자(controller)에게 에러를 전달함
  // try {
  //   await newPost.save();
  // } catch (err) {
  //   console.log(`Error Post.save() mongodb | error::${err.message}`);
  //   throw new Error("error");
  // }

  return newPost;
};

const fetchPosts = async ({ limit }) => {
  return await Post.find().limit(limit);
};

const fetchPostById = async (id) => {
  return await Post.findById(id);
};

const deletePostById = async (id) => {
  return await Post.findByIdAndDelete(id);
};

const PostService = {
  addPost,
  fetchPosts,
  fetchPostById,
  deletePostById,
};
export default PostService;
