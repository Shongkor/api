const mongoose = require("mongoose");

const app = require("./app");

// database connection
mongoose.connect("mongodb+srv://sk:q6hu1wC8V1mIQojy@cluster0.izvkem4.mongodb.net/API(UserList)?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
      console.log("Database Connect Successfully");
  })
  .catch(()=>{
    console.log("Database Connection Failed");
  })

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

