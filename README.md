# blog-backend

## INFO

This is a backend for a BLOG which saves data in a mongoDb. Basic crud operations are present in this backend. Like adding, get blog by id, get all blogs

## Setup

1. Clone the repositary
2. Install all the dependencies by using command
   - npm install
     (this will install all the dependencies)
3. There is an 'config.env' file which has the data base url
4. If you want to change the url just go in config.env and enter the desired database name
   - mongodb://127.0.0.1:27017/"database Name"
   - Now the default database is blogBackend
5. The default port no. is 3000
   - http://localhost:3000
6. Now the diffrent crud operations are given below

   - http://localhost:3000/getAll //gets all Blogs
   - http://localhost:3000/getId //gets the particulat blog by id
   - http://localhost:3000/addBlog //adds a new blog

7. If u want to change the input data go into the particular controller function in controllers folder

   - blogController.js
     - There are 3 functions
       1. getAllBlogs
       2. getById
       3. addBlogs
     - For user defined data just change data as you want in the above mentioned functions

8. A default blog is added at the start as
   - blog { \_id: 5fdae50da69ff71a81c08b7c,
     blogId: 5fdae50da69ff71a81c08b7b,
     author: 'Sagar',
     title: 'BLOG',
     content: 'created a blog',
     imageUrl: 'https://unsplash.com/photos/dqx3HQDrXuw',
     createdAt: 2020-12-17T04:56:45.147Z,
     updatedAt: 2020-12-17T04:56:45.147Z,
     \_\_v: 0 }
   - to change or add another blog go to line 32 in app.js
     - change the data as per required in above format
9. When you run the server again adding a blog is run again and again when the databse is connected

LIVE LINK [https://blog-backend99.herokuapp.com/]
