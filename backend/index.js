const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const url =
  "mongodb+srv://jaydeep:Jq66IXZFjqbLNylD@cluster0.p7sbc.mongodb.net/myFirstReactDatabase?retryWrites=true&w=majority";
const app = express();
const bodyparser = require("body-parser");
const user = require("./Models/user");
const SignUp = require("./Models/SignUp");

const cors = require("cors");
app.use(cors());
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const jwtkey = "jwt1234";
var key = "password";
var algo = "aes256";

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
mongoose.Promise = global.Promise;
mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Don");
  })
  .catch((err) => {
    console.log(err);
    // process.exit();
  });

//delete API
app.delete("/:id", function (req, res) {
  user
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
      // console.log(req.params.id)
    })
    .catch((err) => {
      console.warn(err);
    });
});

//Update API
app.put("/:id", function (req, res) {
  user
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          address: req.body.address,
          number: req.body.number,
        },
      }
    )
    .then((result) => {
      res.json(result);
    });
});

//Search API
app.get("/find/:name", function (req, res) {
  var regex = new RegExp(req.params.name);
  user
    .find({ name: regex })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err, "Not Find");
      res.send("not find");
    });
});

app.post("/", (req, res) => {
  const userdata = new user({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    number: req.body.number,
  });

  userdata.save().then((res) => {
    console.log(res);
  });
});

app.get("/", function (req, res) {
  user.find().then((result) => {
    res.json(result);
    // console.log(result);
  });
});
// get data by ID
app.get("/:id", function (req, res) {
  user.findOne({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
});

// .....SignUp..... //

app.post("/signup", async (req, res) => {
  try {
    const signup = await new SignUp({
      username: req.body.username,
      useremail: req.body.useremail,
      password: bcrypt.hashSync(req.body.password, 10),
    });
    const token = jwt.sign({ signup }, "abcd123", {
      expiresIn: "2h",
    });
    signup.save().then((res1) => {
      console.log(res1);
      res.json({ res1, token });
    });
  } catch (err) {
    console.log(err);
  }
});

//.....Login User......//

app.post("/auth", async (req, res) => {
  try {
    const { useremail, password } = req.body;
    console.log(req.body);
    const user = await SignUp.findOne({ useremail });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, useremail }, "abc123", {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      res.status(200).json(user);
      // user
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

// app.get("/mmop/:useremail", function (req, res) {
//   SignUp.findOne({ useremail: req.params.useremail }).then((result) => {
//     res.json(result);
//     // res.send(result)
//     console.log(result);
//   });
// });

const port = 8000;
app.listen(port, () => {
  console.log(port);
});
