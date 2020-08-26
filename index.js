//module imports
const app = require("./app");

//server running port number
const port = 5000;

//run server to listen to request on port ${port}
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
