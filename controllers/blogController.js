const Blog = require("../data/blogs.js");
const mongoose = require("mongoose");
const { request } = require("express");

const getAllBlogs = async (req, res) => {
  let allblogs = await Blog.find({});
  console.log("ALL BLOGS:", allblogs);
  res.send(allblogs);
};

const getById = async (req, res) => {
  let getblog = await Blog.find({ blogId: "5fdae4d7173ed21a583f72d0" });
  console.log("blog=", getblog);
  res.send(getblog);
};

const addBlogs = async (req, res) => {
  try {
    let addBlog = await Blog.insertMany({
      blogId: mongoose.Types.ObjectId().toHexString(),
      author: "idk",
      title: "idk",
      content: "idk",
      imageUrl: "https://unsplash.com/random",
    });
    console.log(addBlog);
    res.send(addBlog);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getById = getById;
module.exports.addBlogs = addBlogs;
