import commentService from "./service.js";

/**
 * create : POST   - add
 * read   : GET    - fetch
 * update : PATCH  - modify
 * delete : DELETE - remove
 */

const addComment = (req, res) => {};

const getComments = (req, res) => {
  console.log("get comments");
};

const commentController = {
  getComments,
};
export default commentController;
