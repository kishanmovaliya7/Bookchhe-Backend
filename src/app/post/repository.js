const mongoose = require("mongoose");

const Post = mongoose.model("post");

const insertPost = async (data) => {
  const post = new Post(data);
  return await post.save();
};

const getPost = (query) => Post.find(query);

const findPost = (id) => Post.findOne({ _id: id });

const update = (id, body) => Post.updateOne({ _id: id }, body);

const deletePost = (id) => Post.deleteOne({ _id: id });

module.exports = {
  insertPost,
  getPost,
  update,
  findPost,
  deletePost,
};
