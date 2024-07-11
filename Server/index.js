const express = require('express');
const app = express();
const PORT=4000;
const cors = require('cors');
app.use(express.json());


app.use(cors());

    // origin: 'http://localhost:3001', // Allow requests from this origin
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
    // credentials: true, // Enable credentials (cookies, authorization headers, etc.)

require('./db/connection');
const use = require('./Models/user');

app.post("/studentData", async (req, res) => {
    try {
      let user = new use(req.body);
      let result = await user.save();
      res.status(200).json({ msg: "Posted data Successfully", result });
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ msg: "Internal server error" });
    }
  });
  

app.listen(PORT, () => {
    console.log('Server is running on port 4000');
});

